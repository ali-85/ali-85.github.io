var nav = document.querySelector('.navbar'); // Identify target
var screen = window.matchMedia("(max-width: 768px)")
if (screen.matches) {
    document.querySelector('#navbarNav').style.background = '#FF02F7';
    document.querySelector('body').style.backgroundSize = 'contain';
}
    window.addEventListener('scroll', function(event) { // To listen for event
        event.preventDefault();

    if (window.scrollY <= 50) { // Just an example
        document.querySelector('.navbar').style.backgroundColor = 'transparent'; // or default color
        document.querySelector('.nav1').style.color = '#FFF';
        document.querySelector('.nav2').style.color = '#FFF';
        document.querySelector('.nav3').style.color = '#FFF';
        document.querySelector('.nav4').style.color = '#FFF';
        document.querySelector('.nav5').style.color = '#FFF';
        document.querySelector('.nav6').style.color = '#FFF';
        document.querySelector('.hamburger').style.color = '#FFF';
    } else {
        document.querySelector('.navbar').style.backgroundColor = '#FFF';
        document.querySelector('.nav1').style.color = '#FF02F7';
        document.querySelector('.nav2').style.color = '#FF02F7';
        document.querySelector('.nav3').style.color = '#FF02F7';
        document.querySelector('.nav4').style.color = '#FF02F7';
        document.querySelector('.nav5').style.color = '#FF02F7';
        document.querySelector('.nav6').style.color = '#FF02F7';
        document.querySelector('.hamburger').style.color = '#FF02F7';
    }
});