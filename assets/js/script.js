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
        $('#animoji').append(frame);
        $('#' + i).css("background-image", "https://brettwbyron.github.io/assets/images/animoji/" + i + ".png");
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
                    el.css('opacity','1');
                    console.log('up:' + position);
                    position++;
                }
            }, 100 );
        }, 100 );
    } );
    $('#animoji').on( "mouseleave", ( e ) => {
        console.log('mouseleave');
        clearInterval(interval);
        interval = setInterval( () => {
            var el = $('#' + position);

            if (position === 1) {
                clearInterval(interval);
            } else {
                el.css('opacity','0');
                console.log('down:' + position);
                position--;
            }
        }, 100 );
    } );
} );