var nav = document.querySelector('.navbar'); // Identify target
let screen = window.matchMedia("(max-width: 768px)")
let screen2 = window.matchMedia("(max-width: 425px)")
if (screen2.matches) {
    document.querySelector('.navbar-toggler').style.color = '#FFF';
}
if (screen.matches) {
    document.querySelector('#navbarNav').style.background = '#FF02F7';
    window.addEventListener('scroll', function(event) { // To listen for event
        event.preventDefault();

    if (window.scrollY <= 50) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
        document.querySelector('.nav1').style.color = '#FFF';
        document.querySelector('.nav2').style.color = '#FFF';
        document.querySelector('.nav3').style.color = '#FFF';
        document.querySelector('.nav4').style.color = '#FFF';
        document.querySelector('.nav5').style.color = '#FFF';
        document.querySelector('.nav6').style.color = '#FFF';
        document.querySelector('.navbar-toggler').style.color = '#FFF';
    } else {
        nav.style.backgroundColor = '#FFF';
        document.querySelector('.nav1').style.color = '#FF02F7';
        document.querySelector('.nav2').style.color = '#FF02F7';
        document.querySelector('.nav3').style.color = '#FF02F7';
        document.querySelector('.nav4').style.color = '#FF02F7';
        document.querySelector('.nav5').style.color = '#FF02F7';
        document.querySelector('.nav6').style.color = '#FF02F7';
        document.querySelector('.navbar-toggler').style.color = '#FF02F7';
    }
});
}