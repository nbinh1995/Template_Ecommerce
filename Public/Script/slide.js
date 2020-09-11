const Slide = document.querySelectorAll('.slide');
var Xl_BreakPoint = window.matchMedia("(min-width: 1200px)");
var Lg_BreakPoint = window.matchMedia("(min-width: 992px)");
var Sm_BreakPoint = window.matchMedia("(min-width: 576px)");
let displays;
let len = Slide.length;
function queryWidth() {
    if (Xl_BreakPoint.matches) {
        displays = 3;
    } else {
        if (Lg_BreakPoint.matches) {
            displays = 2;
        } else {
            if (Sm_BreakPoint.matches) {
                displays = 1;
            }
        }
    }
    console.log(displays);
}
queryWidth();

function slideLeft() {
    let lenNone = document.querySelectorAll('.slide--none').length;
    console.log(lenNone);
    if (lenNone == 0) {

    } else {
        document.querySelectorAll('.slide--none')[lenNone - 1].classList.remove('slide--none')
    }
}
function slideRight() {
    let lenNone = document.querySelectorAll('.slide--none').length;
    console.log(lenNone);
    if ((len - lenNone) == displays) {

    } else {
        Slide[lenNone].classList.add('slide--none');
    }
}
Xl_BreakPoint.addListener(queryWidth);
Lg_BreakPoint.addListener(queryWidth);
Sm_BreakPoint.addListener(queryWidth);
