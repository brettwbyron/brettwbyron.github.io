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

    for (var i = 0; i < frames; i++) {
        var frame = document.createElement('div');
        frame.style.backgroundImage = "https://brettwbyron.github.io/assets/images/animoji/" + i+1 + ".png";
        frame.id = i+1;
        $('#animoji').append(frame);
    }

    // animoji hover
    $('#animoji').on( "mouseenter", ( e ) => {
        console.log('hover');
        setTimeout( () => {
            position = 1;
            var imgs = setInterval( () => {
                var el = $('#' + position);

                if (position > frames) {
                    clearInterval(imgs);
                    position = 1;
                } else {
                    el.css('opacity','1');
                    position++;
                    console.log('up:' + position);
                }
            }, 100 );
        }, 100 );
    } );
    $('#animoji').on( "mouseleave", ( e ) => {
        var removeImgs = setInterval( () => {
            var el = $('#' + position);

            if (position === 1) {
                clearInterval(removeImgs);
                console.log(position);

            } else {
                el.css('opacity','0');
                position--;
                console.log('down:' + position);
            }
        }, 100 );
    } );
} );