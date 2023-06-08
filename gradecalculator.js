function displayMarksAndGrade(){
var marks = prompt("Enter your marks:");

let grade;


if(marks >= 0 && marks <= 100) {
   


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



    document.getElementById("p1").innerHTML= marks;
    document.getElementById("p2").innerHTML= grade;
}
displayMarksAndGrade();

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});



    


