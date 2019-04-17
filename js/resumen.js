document.addEventListener('DOMContentLoaded',function () {
    let formResumen=document.getElementById('form-resumen');
        formResumen.addEventListener('submit',function (e) {
            e.preventDefault();
            let mes=document.getElementById('Resumen-mes').value;
            let anio=document.getElementById('Resumen-anio').value;

            DC.getDaysGrouped(anio,mes);

    },true);
},true);