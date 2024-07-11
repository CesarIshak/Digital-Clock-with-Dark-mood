
let section = document.querySelector("section"),
 container = document.querySelector(".container"),
 clock = document.getElementById("clock");
    icons = document.querySelector(".icon");
    mood = document.querySelector(".mood");
    date = document.getElementById("date");
    ampm = document.getElementById("AM-PM");


icons.onclick = () => {
    section.classList.toggle("dark");
    container.classList.toggle("dark");
    clock.classList.toggle("dark");
    mood.classList.toggle("dark");
    date.classList.toggle("dark");
    ampm.classList.toggle("dark");
}



function upDateClock(){
    var Time = new Date();
    var hour =Time.getHours();
    var min = Time.getMinutes();
    var sec = Time.getSeconds();
    var month = Time.getMonth();
    var day = Time.getDate();
    var year = Time.getFullYear();
    
    

     
    var ampm = hour >= 12 ? 'PM' : 'AM';
     hour = hour > 12 ? hour - 12  : hour;
     hour = hour < 10 ? "0" + hour : hour;
     min = min < 10 ? "0" + min : min;


     sec = sec < 10 ? "0" + sec : sec;

     month = month + 1 ;




    var crrTime = hour +" : " + min + " : " + sec  ;
    var crrDate = month + " / " + day + " / " + year;
    
    document.getElementById("AM-PM").innerHTML = ampm ;
    document.getElementById("date").innerHTML = crrDate ;
    document.getElementById("clock").innerHTML = crrTime ; 
}
setInterval(upDateClock,1000);




