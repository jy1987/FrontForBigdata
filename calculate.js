const arrival=document.querySelector(".js-arrival");
const destination=document.querySelector(".js-destination");
const carrier=document.querySelector(".js-carrier");
const shipping=document.querySelector(".js-shipping");
const day1=document.querySelector(".js-day1");
const day2=document.querySelectorAll(".js-day2");

document.title="jyjy"

///---
url="http://192.168.1.14:5000/infos"
function predictTime(shipping, arrival, destination, carrier, day1, day2,){
    datas={
        "shipping":shipping,
        "carrier":carrier,
        "destination":destination,
        "arrival":arrival,
        "day1":day1,
        "day2":day2
    }
    fetch (url)
    .then(function(response){
        return response.json();
    
    })
    .then(function(json){
        print(json)
    })
}

function saveInput(){
    const shipping=shipping.value;
    const arrival=arrival.value;
    const destination=destination.value;
    const carrier=carrier.value;
    const day1=day1.value;
    const day2=day2.value;
    localStorage.setItem()

}
function selectInput(){

}

function init(){

}
///---