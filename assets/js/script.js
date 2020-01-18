$( document ).on( 'ready', () => {
    smoothScroll();
    animoji();
} );

function smoothScroll() {
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
}

function animoji() {
    $('.animoji').addEventListener( "mouseenter", ( e ) => {
        $('.animoji').css('background-image','url("../images/animoji.gif")');
    } );
    $('.animoji').addEventListener( "mouseleave", ( e ) => {
        $('.animoji').css('background-image','url("../images/animoji_reverse.gif")');
    } );
}