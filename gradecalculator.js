function displayMarksAndGrade(){
  //prompts the user to input their marks
var marks = prompt("Enter your marks:");

let grade;

//makes sure the marks are between 0 and 100
if(marks >= 0 && marks <= 100) {
   

//gives grade according to inputed marks
switch (true) {
  case (marks > 79):
    grade = 'A';
    break;
    debugger;
    case (marks >= 60):
        grade = 'B';
        break;
        case (marks >= 49):
            grade = 'C';
            break;
            case (marks >= 40):
               grade = 'D';
               break;
               case (marks < 40):
               grade = 'E';
               break;
}

}else{
    alert("Entered marks is not between 0 and 100!");
}


//gives output on webpage
    document.getElementById("p1").innerHTML= marks;
    document.getElementById("p2").innerHTML= grade;
}
displayMarksAndGrade();

//eventlistener button that refreshes the webpage
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});



    


