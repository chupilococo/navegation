const   _API                ="http://localhost/calendar/";
let     DC                  ={};
let     Selected     ='';
let     today               = new  Date();
let     anio                =today.getFullYear();
let     mes                 =today.getMonth()+1;
let     dias                =[
        'domingo',
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado'
];
let     meses               =[
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
];


/**
 * Muestra mensaje en Index>#mensaje
 * @param mensasje
 */
DC.setMensajes=function(mensasje){
    console.log(mensasje);
    let DivMsj=document.getElementById('mensajes').getElementsByTagName('span')[0];
    DivMsj.innerHTML=mensasje;
    DivMsj.classList.remove("active");
    DivMsj.classList.add("active");
    DC.sleep(5000).then(function () {
        // DivMsj.innerHTML="";
        DivMsj.classList.remove("active");
    });
};


DC.sleep=function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};


/**
 * obtine los dias de un mes
 * @param month
 * @param year
 * @returns {Array}
 */
DC.getDaysInMonth=function (month, year) {
    if (month<0||month>11){
        DC.setMensajes('Mes invalido');
        throw "Error mes invalido";
    }
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
        days.push({
            date:(new Date(date))
        });
        date.setDate(date.getDate() + 1);
    }
    return days;
};

/**
 * Funcion Standard De ajax
 * @param options {{}}
 */
DC.ajax=function (options) {
    let xhr = new XMLHttpRequest();
    xhr.timeout=10000;
    let sendBody = null;
    let urlToFetch = options.url;
    let requestMethod = options.method != null ? options.method : "GET";

    if(options.data != null) {
        if(requestMethod.toUpperCase() === "GET") {
            urlToFetch += '?' + options.data;
        }else {
            sendBody = options.data;
        }
    }

    xhr.open(requestMethod, urlToFetch);
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                options.successCallback(xhr.responseText);
            } else {
                options.errorCallback();
            }
        }
    });

    if(requestMethod.toUpperCase() === "POST") {
        xhr.setRequestHeader(
            'Content-Type',
            'application/x-www-form-urlencoded'
        );
    }
    xhr.send(sendBody);
};

/**
 * Consulta al Back si el elemento tiene usario, si lo tiene le asigna la clase correspondiente
 * @param date
 * @param element
 */
DC.getUserByDate=function(date,element){
    date=date.split('-');
    DC.ajax(
        {
            url:_API+'api/public/fecha/'+date[0]+'/'+date[1]+'/'+date[2],
            successCallback:function (rta) {
                // noinspection JSUnresolvedVariable
                //console.log(rta);
                let nombre=JSON.parse(rta).Nombre;
                DC.paintMe(element,(nombre==='')?'blank':nombre);
            },
            errorCallback:function () {
                DC.setMensajes('Error al recuperar los dias desde el servidor');
            }
        }
    )
};


/**
 * Devuelve el html para isertar en el calendario
 * @returns {string}
 * @param options
 */
DC.drawCalendar=function(options){
    let realMes=options.mes-1;
    let days=DC.getDaysInMonth(realMes, options.anio);
    let content="";

    for (let x=0; x <days.length;x++){
        if (x===0){
            let dayInWeek=days[0].date.getDay();
            for (let j=1;j<dayInWeek;j++){
                content+="<div></div>"
            }
        }
        let diaSemana=dias[days[x].date.getDay()];
        let dateFormated=days[x].date.getFullYear()+'-'+("0"+(days[x].date.getMonth()+1)).slice(-2)+'-'+("0"+days[x].date.getDate()).slice(-2);
        content+="<div class='weekday' data-owner=\"\" data-date="+dateFormated+" onclick='"+options.callback+"(this,Selected)'>"+diaSemana+" <span>"+(x+1)+"</span></div>"
    }
    return content;
};

/**
 * Envia al Back los datos para setear el usaurio a una fecha
 * @param element
 * @param s
 */
DC.updateDate=function(element,s){
    DC.paintMe(element,s);
    let date=element.dataset.date.split('-');
    let data=JSON.stringify({"user":Selected});
    DC.ajax(
        {
            method:'PUT',
            url:_API+'api/public/fecha/'+date[0]+'/'+date[1]+'/'+date[2],
            data:data,
            successCallback:function (rta) {
            },
            errorCallback:function () {
                DC.setMensajes('Error al Actualizar la fecha');
            }
        }
    );
};


/**
 * asigna y remueve la clase del back
 * @param a
 * @param b
 */

DC.paintMe=function(a,b){
    a.dataset.owner=(!b)?'':b.toLowerCase();
};

/**
 * asigna a todos los elemetos que contegan el atributo data-date un hover shadow con el color indicado
 * @param color
 */
// DC.setCalendarHoverShadow=function(color){
//
//     let dates=document.querySelectorAll('[data-date]');
//     for (let s=0;s<dates.length;s++){
//         dates[s].onmouseover=function () {
//             // // console.log('mouseover',this);
//             this.style.boxShadow = "8px 8px 10px "+color;
//         };
//         dates[s].onmouseout=function () {
//             this.style.boxShadow = "5px 5px 10px #4a4a4a";
//         }
//         ;
//     }
//
// };
/**
 * inicia el calendario y todos los elementos
 * @param anio
 * @param mes
 */
DC.run=function(anio,mes){
    document.getElementById('guardias_almanac_grid').innerHTML=DC.drawCalendar(
        {
            mes:mes,
            anio:anio,
            callback:"DC.updateDate"
        }
    );
    document.getElementById('guardia_almanac_title').innerHTML="<p>"+anio+"-"+meses[mes-1]+"</p>";
    let fechas=document.querySelectorAll('#guardias_almanac_grid [data-date]');
    for (let s=0;s<fechas.length;s++){
        DC.getUserByDate(fechas[s].dataset.date,fechas[s]);
    }
};



/**
 * reinicia el calendario para el mes proximo
 */
DC.nextMonth=function(){
    today.setFullYear(anio);
    today.setMonth(mes);
    anio    =today.getFullYear();
    mes     =today.getMonth()+1;
    DC.run(anio,mes)
};

/**
 * reinicia el calendario para el mes anterior
 *
 */
DC.prevMonth=function(){
    today.setFullYear(anio);
    today.setMonth(mes-2);
    anio    =today.getFullYear();
    mes     =today.getMonth()+1;
    DC.run(anio,mes)
};


DC.setSelected = function (param, guardiaSeletors) {

    if (param.dataset.guardiaSelected==="true"){
        param.dataset.guardiaSelected=false;
        Selected='';
    }else{
        for (let i = 0; i < guardiaSeletors.length; i++) {
            guardiaSeletors[i].dataset.guardiaSelected = false;
        }
        Selected=param.dataset.own;
        param.dataset.guardiaSelected = true;
    }
};



DC.getDaysGrouped=function(anio,mes){
    DC.ajax({
        url:_API+'api/public/fecha/'+anio+'/'+("0"+mes).slice(-2),
        successCallback:function (rta) {
            console.log(rta);
        },
        errorCallback:function (rta) {

            console.error(JSON.parse(rta));

            DC.setMensajes('Error al recuperar los dias desde el servidor');
        }
    });
};