setInterval(setClock, 1000);


var second_hand = document.querySelector('[data-second-hand]');
var minutes_hand = document.querySelector('[data-minutes-hand]');
var hour_hand = document.querySelector('[data-hour-hand]');

function setClock() {

    var date = new Date();

    var seconds = date.getSeconds() / 60;
    var minutes = (seconds + date.getMinutes()) / 60;
    var hours = (minutes + date.getHours()) / 12;

    setRotation(second_hand, seconds);
    setRotation(minutes_hand, minutes);
    setRotation(hour_hand, hours);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360);
}