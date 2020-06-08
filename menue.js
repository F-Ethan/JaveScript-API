var highli;
var text;
var space = "----------------------------";

//makes arrays of all the cells in the table so I can change thier text
const option = document.querySelectorAll('.option');
const completed = document.querySelectorAll('.completed');
const UserId = document.querySelectorAll('.UserId');
const ID = document.querySelectorAll('.ID');
const Title = document.querySelectorAll('.Title');
const spacer = document.querySelectorAll('.spacer');

//sets up a XMLHttpRequest which is what gets the information from the website
var xmlhttp = new XMLHttpRequest();
// calls the function when the var xmlhttp is changed 
xmlhttp.onreadystatechange = function() {
  //readyState checks if the XMLHttpRequest could access the website
  // status checkes it the website retuned any information
  if (this.readyState == 4 && this.status == 200) {
    //chages the information into abjects from a string
    var myObj = JSON.parse(this.responseText);
    //loops over all the cells and adds the new data to each cell
    for(i=0; i<5; i++){
        completed[i].innerText = myObj[i].completed;
        UserId[i].innerText = myObj[i].userId;
        ID[i].innerText = myObj[i].id;
        Title[i].innerText = myObj[i].title;
        spacer[i].innerText = space;
    }
    console.log(myObj)
   }
};
// on load calls the first page
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=1", true);
xmlhttp.send();


function option1(){
  highli = 0;
  update();
  //onClick calls the new URL
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=1", true);
  xmlhttp.send();
}

function option2(){
  highli = 1;
  update();
    //onClick calls the new URL
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=2", true);
  xmlhttp.send();
}

function option3(){
  highli = 2;
  update();
  //onClick calls the new URL
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=3", true);
  xmlhttp.send();
}

function option4(){
  highli = 3;
  update();
  //onClick calls the new URL
  xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/todos?userId=4", true);
  xmlhttp.send();
}


function update(){  
  for(i=0; i< option.length; i++){
    option[i].classList.add("normal");
    option[i].classList.remove("highlighted");
  }
  
  option[highli].classList.add("highlighted");  
}