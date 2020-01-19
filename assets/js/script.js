$( document ).on( 'ready', () => {
    // Smooth scroll
    $( 'a[href*="#"]:not([href="#"])' ).click( function () {
        if ( location.pathname.replace( /^\//, '' ) == this.pathname.replace( /^\//, '' ) ||
            location.hostname == this.hostname ) {

            var target = $( this.hash ),

                target = target.length ? target : $( '[name=' + this.hash.slice( 1 ) + ']' );

            if ( target.length ) {
                $( 'html,body' ).animate( {
                    scrollTop: target.offset().top
                }, 500 );
                return false;
            }
        }
    } );

    var frames = 20;
    var position;

    for (var i = 1; i < frames; i++) {
        var frame = document.createElement('div');
        frame.id = i;
        frame.classList.add('animoji-frame');
        frame.style.backgroundImage = "url('https://brettwbyron.github.io/assets/images/animoji/" + i + ".png'";
        $('#animoji').append(frame);
        // $('#' + i).css("background-image", "url('https://brettwbyron.github.io/assets/images/animoji/" + i + ".png'");
        console.log(frame);
        // console.log($('#' + i));
    }

    // animoji hover
    var interval;

    $('#animoji').on( "mouseenter", ( e ) => {
        console.log('mouseenter');
        clearInterval(interval);
        setTimeout( () => {
            position = 1;
            interval = setInterval( () => {
                var el = $('#' + position);

                if (position > frames) {
                    clearInterval(interval);
                } else {
                    if (position > 20) {position = 20;}
                    el.css('opacity','1');
                    el.css("backgroundImage", "https://brettwbyron.github.io/assets/images/animoji/" + i + ".png");
                    position++;
                }
                console.log('up:' + position);
            }, 100 );
        }, 100 );
    } );
    $('#animoji').on( "mouseleave", ( e ) => {
        clearInterval(interval);
        interval = setInterval( () => {
            position--;
            var el = $('#' + position);

            if (position === 1) {
                clearInterval(interval);
            } else {
                if (position > 20) {position = 20;}
                el.css('opacity','0');
            }
        }, 100 );
    } );
} );