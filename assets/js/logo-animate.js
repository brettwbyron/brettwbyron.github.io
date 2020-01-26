function animateLines(elem, toggle="on", speed="1000") {
    if (speed.toLowerCase() === "slow") {
        // elem.node.css('transition-duration',(elem.node.css('transition-duration') * 0.5));
    }
    if (toggle.toLowerCase() === "on") {
        $( '.' + elem.node.className.baseVal ).css('stroke-dashoffset',0);
        // elem.attr({strokeDashoffset: 0});
    } else if (toggle.toLowerCase() === "off") {
        $( '.' + elem.node.className.baseVal ).css('stroke-dashoffset',1);
        // elem.attr({strokeDashoffset: 1});
    }
    // console.log($(elem.node).css('transition-duration'));
}

window.onload = function() {
    var s = Snap('svg.logo-animation');
    var capital = s.select('.capital');
    var stem = s.select('.stem');
    var bowl = s.select('.bowl');

    var n = Snap('svg.nav-arrows');
    var capArrow = n.select('.capital');
    var stemArrow = n.select('.stem');
    var bowlArrow = n.select('.bowl');

    this.setTimeout(() => {
        animateLines(capital);
        animateLines(stem);
        animateLines(bowl);
    }, 1000);


    $('.nav-burger').on('mouseenter', function(e) {
        $('nav.nav-vertical').css({
            'height':'calc(100vh - 79px)',
            'opacity':'1',
            'border-width':'1px'
        });
        animateLines(capital, 'off');
        animateLines(stem, 'off');
        animateLines(bowl, 'off');
        setTimeout(() => {
            animateLines(capArrow);
            animateLines(stemArrow);
            animateLines(bowlArrow);
        }, 2000);
    });
    $('.nav-burger').on('mouseleave', function(e) {
        animateLines(capArrow, "off");
        animateLines(stemArrow, "off");
        animateLines(bowlArrow, "off");
        setTimeout(() => {
            $('nav.nav-vertical').css({
                'height':'0',
                'opacity':'0',
                'border-width':'0'
            });
            animateLines(capital);
            animateLines(stem);
            animateLines(bowl);
        }, 2000);
    });
}