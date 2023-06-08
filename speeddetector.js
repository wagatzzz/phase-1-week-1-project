function ticketPOints(){
    //gets the speed inputs of user
    let speed = prompt("Enter speed:");
    let points;
    let message = "";
    
    
    //for every speed less than 70, the output is "OK"
    if(speed < 70) {
        message = "OK";
        points = 0;
// for every 5km/h above the speed a point is given to driver
    }else if(speed > 70){
        points = Math.floor((speed - 70) / 5) * 5;
        message = "Points:"+points;
// if the points ecxceed 12, the drivers licence is suspended
    }if(points > 12){
        message = "Licence suspended";
    }
//outputs message to the webpage
    document.getElementById("p1").innerHTML= message;
    }
    
ticketPOints();
//button eventlistener that refreshes the webpage
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});