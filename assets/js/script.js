var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 50) { // Just an example
        nav.style.backgroundColor = 'transparent'; // or default color
        document.querySelector('.nav1').style.color = '#fff';
        document.querySelector('.nav2').style.color = '#fff';
        document.querySelector('.nav3').style.color = '#fff';
        document.querySelector('.hamburger').style.color = '#FFF';
    } else {
        nav.style.backgroundColor = '#FFF';
        document.querySelector('.nav1').style.color = '#FF02F7';
        document.querySelector('.nav2').style.color = '#FF02F7';
        document.querySelector('.nav3').style.color = '#FF02F7';
        document.querySelector('.hamburger').style.color = '#FF02F7';
    }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}