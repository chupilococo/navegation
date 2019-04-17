document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('next').addEventListener('click',function () {
       DC.nextMonth();
    });
    document.getElementById('prev').addEventListener('click',function () {
       DC.prevMonth();
    });


    let guardiaSelectors=document.querySelectorAll("[data-guardia-selected]");
    for (let i = 0; i < guardiaSelectors.length; i++) {
        guardiaSelectors[i].addEventListener('click',function (ev) {
            ev.preventDefault();
            DC.setSelected(this,guardiaSelectors);
        },true);
    }


    DC.run(anio,mes);
}, false);