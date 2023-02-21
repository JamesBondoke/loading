gsap.fromTo(
    ".loading-page",
    { opacity: 1},
    {
        opacity: 0,
        duration: 1.5,
        delay: 3.5,
    }
    );
gsap.fromTo(
    ".logo-name",
    {
        y: 60,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 1.5,
    }
    );
gsap.fromTo(
    ".ring",
    {
        y: 60,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 1.5,
    }
    );
/* scroll  */


var sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 4500,
})
sr.reveal(".row");
sr.reveal(".row2", {origin: 'bottom'});
sr.reveal(".row3", {origin: 'left'});
sr.reveal("button", {origin: 'bottom', delay: 6000, distance: '100px'})

$('button').click( function() {
    alert("hey Abdurahim")
})