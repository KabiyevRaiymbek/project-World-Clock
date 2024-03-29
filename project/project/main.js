function showTime() {
    d = new Date();

countryName = document.getElementById('country-name')

utc = d.getTime() + d.getTimezoneOffset() * 60000;

checkDropdown = document.getElementById("list").value;

modalBg = document.getElementsByClassName('modal-content');

var session = "AM";

if (checkDropdown == "poland") {
    nd = new Date(utc + 3600000 * 2);
    countryName.innerHTML = 'Poland';
} else if (checkDropdown == "california") {
    countryName.innerHTML = 'California';
    nd = new Date(utc + 3600000 * -7);
} else if (checkDropdown == "newYork") {
    countryName.innerHTML = 'New York';
    nd = new Date(utc + 3600000 * -4);
} else if (checkDropdown == "japan") {
    countryName.innerHTML = 'Japan';
    nd = new Date(utc + 3600000 * 9);
} else if (checkDropdown == "uae") {
    countryName.innerHTML = 'UAE';
    nd = new Date(utc + 3600000 * 4);
} else if (checkDropdown == "moscow") {
    countryName.innerHTML = 'Moscow';
    nd = new Date(utc + 3600000 * 3);
} else if (checkDropdown == "france") {
    countryName.innerHTML = 'France';
    nd = new Date(utc + 3600000 * 2);
} else if (checkDropdown == "africa") {
    countryName.innerHTML = 'Africa';
    nd = new Date(utc + 3600000 * 2);
}else if (checkDropdown == "afghanistan"){
    nd = new Date(utc + 3600000 * 4.5);
}else if (checkDropdown == "belgium"){
    nd = new Date(utc + 3600000 * 1);
}else if (checkDropdown == "denmark"){
    nd = new Date(utc + 3600000 * 1);
}else if (checkDropdown == "jamaica"){
    nd = new Date(utc + 3600000 * -5);
}else if (checkDropdown == "china"){
    nd = new Date(utc + 3600000 * 8);
}else if (checkDropdown == "southk"){
    nd= new Date(utc +3600000 * 9);
    countryName.innerHtML= ' South Korea';
}

var res = nd.toLocaleString();
res = res.split(" ");
var ans = res[1].split(":");

if (ans[0] > 12) {
    var t = parseInt(ans[0]) - 12;
    ans[0] = t.toString();
    session = "PM";

}

if (ans[0] == 0) {
    ans[0] = "12";
}

res[1] = ans.join(":");

document.getElementById("clock").innerHTML = res[1] + " " + session;

setTimeout(showTime, 1000);

var ti = nd.toString();
ti = ti.split(" ");
var ri = ti[4].split(":");
if(ri[0]<=18 && ri[0]>7){

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/light.css");

}else{

    var element = document.createElement("link");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", "css/Style.css");
    document.getElementsByTagName("head")[0].appendChild(element);
}
}
showTime();


document.getElementById("list").addEventListener("scroll", scroll);

function scroll() {
document.getElementsByClassName("box").innerHTML = "Scrolled";
}


setInterval(setClock, 1000);

const PolandhourHand = document.querySelector("[poland-hour-hand]");
const PolandminuteHand = document.querySelector("[poland-minute-hand]");
const PolandsecondHand = document.querySelector("[poland-second-hand]");

const chicagohourHand = document.querySelector("[chicago-hour-hand]");
const chicagominuteHand = document.querySelector("[chicago-minute-hand]");
const chicagosecondHand = document.querySelector("[chicago-second-hand]");

const japanhourHand = document.querySelector("[japan-hour-hand]");
const japanminuteHand = document.querySelector("[japan-minute-hand]");
const japansecondHand = document.querySelector("[japan-second-hand]");

function setClock() {
const PolandcurrentDate = new Date();

const PolandsecondsRatio = PolandcurrentDate.getSeconds() / 60;
const PolandminutesRatio = (PolandsecondsRatio + PolandcurrentDate.getMinutes()) / 60;
const PolandhoursRatio = (PolandminutesRatio + PolandcurrentDate.getHours()) / 12;

var utc = PolandcurrentDate.getTime() + PolandcurrentDate.getTimezoneOffset() * 60000;

const chicagoCurrentDate = new Date(utc + 3600000 * -5);
const chicagosecondsRatio = chicagoCurrentDate.getSeconds() / 60;
const chicagominutesRatio = (chicagosecondsRatio + chicagoCurrentDate.getMinutes()) / 60;
const chicagohoursRatio = (chicagominutesRatio + chicagoCurrentDate.getHours()) / 12;

const japanCurrentDate = new Date(utc + 3600000 * 9);
const japansecondsRatio = japanCurrentDate.getSeconds() / 60;
const japanminutesRatio = (japansecondsRatio + japanCurrentDate.getMinutes()) / 60;
const japanhoursRatio = (japanminutesRatio + japanCurrentDate.getHours()) / 12;

setRotation(PolandsecondHand, PolandsecondsRatio);
setRotation(PolandminuteHand, PolandminutesRatio);
setRotation(PolandhourHand, PolandhoursRatio);

setRotation(chicagosecondHand, chicagosecondsRatio);
setRotation(chicagominuteHand, chicagominutesRatio);
setRotation(chicagohourHand, chicagohoursRatio);

setRotation(japansecondHand, japansecondsRatio);
setRotation(japanminuteHand, japanminutesRatio);
setRotation(japanhourHand, japanhoursRatio);
}

function setRotation(element, rotationRatio) {
element.style.setProperty("--rotation", rotationRatio * 360);
}


$('.acc h3').click(function(){
$(this).next('.content').slideToggle();
$(this).parent().toggleClass('active');
$(this).parent().siblings().children('.content').slideUp();
$(this).parent().siblings().removeClass('active');
});

const btn = document.getElementById('list');
const modal = document.getElementById('modal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function(){
modal.style.display = "none";
}

btn.onclick = function(){
modal.style.display = "block";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}