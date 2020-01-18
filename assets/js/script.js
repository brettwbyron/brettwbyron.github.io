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
} );

$( window ).on( 'load', () => {
    var frames = 20;
    var position;

    for (var i = 0; i < frames; i++) {
        $('.animoji').appendChild("<img class='animoji-frame' id='" + i + "'" + " data-src='https://brettwbyron.github.io/assets/images/animoji/" + i + ".png'>");
    }

    // animoji hover
    $('.animoji').on( "hover", ( e ) => {
        setTimeout( () => {
            position = 0;
            setInterval( () => {
                var el = $('#' + position);
                if (position > frames) { clearInterval() }
                el.attr('src', el.attr('data-src'));
                el.css('opacity','1');
                position++;
            }, 100 );
        }, 100 );
    } );
    $('.animoji').on( "mouseleave", ( e ) => {

    } );
} );