const element = document.getElementById("demo1");
const elements = document.getElementById("demo2").innerHTML = "Bangladesh is a "+" "+element.innerHTML;

 document.getElementById("demo3").innerHTML = elements+" "+"and it's awesome country";


 const elementa = document.getElementsByTagName("p");
 document.getElementById("demo4").innerHTML = " This is md saiful" +" "+elementa[3].innerHTML;


 //querySelectorAll()

 const queryIntro = document.querySelectorAll("p.intro");
 document.getElementById("demo5").innerHTML = "it's amazing "+" "+ queryIntro[1].innerHTML;



 //

 document.getElementById("myimage").src="images/image5.jpg";



 //form area start here
 function validateForm(){
     let x = document.forms["myForm"]["fname"].value;
     if (x == "") {
         alert("Name must be fulfilled out");
         return false;
     }

 }

 //form area end here


//  input validation

function myValidFunction(){
    let numValue = document.getElementById("numb").value;
    let text;
    if (isNaN(numValue) || numValue < 1 || numValue > 10) {
        text = "Your input is not valid";
    }else{
        text = "Your input is Okay!";
    }
    document.getElementById("demo8").innerHTML = text;
}


//
document.getElementsByTagName("h3")[0].style.color="green";

//
document.getElementById("demo9").style.color="brown";
document.getElementById("demo9").style.fontSize="49px";

//

function myCssFunction(){
    document.getElementById("demo10").style.color="red";
}

function myCssFunctions(){
    document.getElementById("demo10").style.color="yellow";
}

//


// javascript animation 

function myMove(){
    let id = null;
    const elem = document.getElementById("myAnimation");
    console.log("button is clicked")
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame(){
        if (pos == 350) {
            clearInterval(id);
            
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}



//javascript HTML Events
function eventFunction(){
    document.getElementById("demo11").innerHTML =" Ooops!!Thanks for clicking me!";

}

function currentDate(){
    document.getElementById("demo12").innerHTML = Date();

}






// addEventListener()

document.getElementById("btnListener").addEventListener("click",displayCurrentDate);
function displayCurrentDate(){
    document.getElementById("demo13").innerHTML = Date();
}

//

// alert("hello")


/**document.getElementById("btnAlert").addEventListener("click",btnAlertFunction)

function btnAlertFunction(){
    alert("Hello Bangladesh!");
    document.getElementById("demo14").innerHTML = "alert value is printed"
}
 */


//


/**document.getElementById("btnAlert").addEventListener("click",btnAlertFunction)

function btnAlertFunction(){
    alert("Hello Bangladesh!");
    alert("alert value is executed")
    
    
    */

    document.getElementById("btnAlert").addEventListener("click",btnAlertFunction);
    document.getElementById("btnAlert").addEventListener("click",btnAlerFunctionTwo)

function btnAlertFunction(){
    alert("Hello Bangladesh!");
    
}
function btnAlerFunctionTwo(){
    alert("alert value two is executed");

}



// three types button

let threeBtn = document.getElementById("three_button");
threeBtn.addEventListener("click",myThreeButton1);
threeBtn.addEventListener("mouseover",myThreeButton2);
threeBtn.addEventListener("mouseout",myThreeButton3)

function myThreeButton1(){
    document.getElementById("demo15").innerHTML += "mouse clicked"+"<br>";
}
function myThreeButton2(){
    document.getElementById("demo15").innerHTML += "mouseover"+"<br>";
}
function myThreeButton3(){
    document.getElementById("demo15").innerHTML += "mouseout"+"<br>";
}


//


const para = document.createElement("p");
const node = document.createTextNode("this is paragraph 3 from javascript");
para.appendChild(node);
const elementss = document.getElementById("div1");
elementss.appendChild(para);



//

const paras = document.createElement("h3");
const nodes = document.createTextNode("this is heading from javascript");
paras.appendChild(nodes);

const elementsts= document.getElementById("div2");
elementsts.appendChild(paras);



//
/**function myButton1(){
    document.getElementById("button1").remove();
}

function myButton2(){
    document.getElementById("button2").remove();
}

function myButton3(){
    document.getElementById("button3").remove();
}
 */


function myButton1(){
    document.getElementById("button1").remove();
    alert("are you sure! You remove it")
    document.getElementById("btns1").remove();
}

function myButton2(){
    document.getElementById("button2").remove();
    alert("are you sure! You remove it")
    document.getElementById("btns2").remove();
}

function myButton3(){
    document.getElementById("button3").remove();
    alert("are you sure! You remove it")
    document.getElementById("btns3").remove();
}




//removeChild()

const parent = document.getElementById("removeChild");
const child = document.getElementById("child1");
parent.removeChild(child);
const childs = document.getElementById("child2");
parent.removeChild(childs);


//



const myNodelist = document.querySelectorAll("p");

document.getElementById("demo15").innerHTML = "This document contains " + myNodelist.length + " paragraphs.";



// function goBack() {
//     window.history.back()
//   }




function clickedConfirm(){
    let txt ;

    if (confirm("You press a button")) {
        txt = "you presssed ok!"; 
    }else{
        txt = "you pressed cancel";
    }
    document.getElementById("demo21").innerHTML = txt;
}

//


function confirmClick(){
    let test;
    if(confirm("are you sure yor remove it!")){
        test = "ok it already removed";
    }else{
        test = "sorry you can't remove it!"
    }
    document.getElementById("demo22").innerHTML = test;
}

//prompt start here 

// prompt("hello bro")




function myPromptFunction(){
    let promptText;
    let person = prompt("Please Enter Your Name: ");

    if(person == null || person == ""){
        promptText = "User cancelled prompt ";

    }else{
        promptText = "hello" + " "+person +" "+ "How are you doing?";
    }
    document.getElementById("demo23").innerHTML = promptText;
}




//

// function myPromptBox2(){
//     let  promptboxesNum2;
//     let person2 = prompt("Please enter your number : ");
//     if(person2 == null || person2 == ""){
//         promptboxesNum2 = "you dont through any number or else!";

//     }else{
//         promptboxesNum2 = "Hey"+" "+ person2+" "+"is your argument number";
//     }

//     document.getElementById("demo24").innerHTML = promptboxesNum2;
  
// }







function myPromptBox2(){

    let promptboxesNum3;
    let  promptboxesNum2;
    let person3 = prompt("please enter you name  :")
    if (person3 == null || person3 == "") {
        promptboxesNum3 = "user is cancelled prompt or ";
    }else{
        promptboxesNum3 = "Hello"+" "+ person3;
    }



    let person2 = prompt("Please enter your number : ");
    if(person2 == null || person2 == ""){
        promptboxesNum2 = "you dont through any number or else!";

    }else{
        promptboxesNum2 =  person2+" "+"is your argument number";
    }

    document.getElementById("demo24").innerHTML = promptboxesNum3+" "+ promptboxesNum2;
  
}



//alert line break start here

function alertLineBreakFunction(){
    alert("hello\nHow ane you?");
    alert("What you want?\nWhat are you looking here?\nWhy are you clicked here!")
    document.getElementById("demo25").innerHTML = "your alert line break is clicked and Everything is ok!";
}




// setTimeout area start here

function setTimeoutis(){
    document.getElementById("demo26").innerHTML = "I love my Country";
}


//
function cleartTimeSetTimeouts(){
    alert("this is clearTIme And setTimeout");
}




//setInterval() method

setInterval(setInts,1000);

function setInts(){
    const d = new Date();
    document.getElementById("demo27").innerHTML = d.toLocaleTimeString();
}











