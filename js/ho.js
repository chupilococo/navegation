let     anioHO        =today.getFullYear();
let     mesHO         =today.getMonth()+1;

DC.isWeeken=function(dia, mes, anio){
    let date=new Date();
    date.setFullYear(anio,mes-1,dia);
    switch (date.getDay()) {
        case 0:
        case 6:
            return true;
        default:
            return false;

    }
};

DC.isMonFry=function(dia, mes, anio){
    let date=new Date();
    date.setFullYear(anio,mes-1,dia);
    switch (date.getDay()) {
        case 1:
        case 5:
            return true;
        default:
            return false;
    }
};
/**
 *
 */
DC.checkDate = obj => {
    let data=obj.dataset.date;
        data=data.split("-");
    let diaR=data[2];
    let mesR=data[1];
    let anioR=data[0];
    console.log(diaR,mesR,anioR);

    if ( DC.isMonFry(diaR, mesR,anioR)){
        DC.setMensajes("no se puede hacer HO lunes o viernes");
        return false;
    }
    if ( DC.isWeeken(diaR, mesR,anioR)){
        DC.setMensajes("Es fin de semana capo");
        return false;
    }
    return true;
};




DC.updateDateHO=function(element,s){
    if(DC.checkDate(element)) {
        DC.paintMe(element, s);
        let date = element.dataset.date.split('-');
        let data = JSON.stringify({"user": Selected});
        DC.ajax(
            {
                method: 'PUT',
                url: _API + 'api/public/fechaHO/' + date[0] + '/' + date[1] + '/' + date[2],
                data: data,
                successCallback: function (rta) {
                    // console.log(rta);
                },
                errorCallback: function () {
                    DC.setMensajes('Error al Actualizar la fecha');
                }
            }
        );
    }
};


DC.getUserByDateHO=function(date,element){
    date=date.split('-');
    DC.ajax(
        {
            url:_API+'api/public/fechaHO/'+date[0]+'/'+date[1]+'/'+date[2],
            successCallback:function (rta) {
                // noinspection JSUnresolvedVariable
                let nombre=JSON.parse(rta).Nombre;
                DC.paintMe(element,(nombre==null)?'':nombre);
            },
            errorCallback:function () {
                DC.setMensajes('Error al recuperar los dias desde el servidor');
            }
        }
    )
};


DC.runHO=function(anio,mes){
    document.getElementById('datesHO').innerHTML=DC.drawCalendar(
        {
            mes:mes,
            anio:anio,
            callback:"DC.updateDateHO"
        }
    );
    document.getElementById('tituloCalendarioHO').innerHTML=""+anio+"-"+("0"+mes).slice(-2);

    let fechas=document.querySelectorAll('#datesHO [data-date]');
    for (let s=0;s<fechas.length;s++){
        DC.getUserByDateHO(fechas[s].dataset.date,fechas[s]);
    }
};



document.addEventListener('DOMContentLoaded',function () {

    DC.runHO(anioHO,mesHO);

});