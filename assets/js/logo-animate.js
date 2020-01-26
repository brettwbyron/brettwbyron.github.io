function animateLines(elem) {
    // Go!
    elem.attr({strokeDashoffset: 0});
}

window.onload = function() {
    var s = Snap('svg.logo-animation');
    var capital = s.select('#capital');
    var capLen = capital.getTotalLength();
    var stem = s.select('#stem');
    var bowl = s.select('#bowl');

    this.setTimeout(() => {
        animateLines(capital);
        animateLines(stem);
        animateLines(bowl);
    }, 1000);
}