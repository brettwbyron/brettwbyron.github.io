$( document ).on( 'ready', () => {
    // animoji hover
    $('.animoji').on( "mouseenter", ( e ) => {
        $('.animoji').css('background-image','url("../assets/images/animoji.gif")');
    } );
    $('.animoji').on( "mouseleave", ( e ) => {
        $('.animoji').css('background-image','url("../assets/images/animoji_reverse.gif")');
    } );

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