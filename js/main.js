
//global variable
var cont=0;

//Listener waiting for pressed key
window.addEventListener('keydown', function(event){
    //check first time
    if (cont===0){
        showContent();
    }

    changeByClass(event);
    changeById(event);
    cont++;
    //console.log(event);
});

function fillTable(){
    var table = document.getElementById("keyTable");
    var row = table.insertRow

}

for (let x = 0; x < data.length; x++){
    tr = table.insertRow(1);
}

//function to show table on button
function showTable(){
    var x = document.getElementById("tableDetails"); 
    if (x.style.display == "block"){
        x.style.display = "none";
        document.getElementById("showContent").style.display = "block";
    }else{
        x.style.display = "block";
        document.getElementById("showContent").style.display = "none";
    }
}

//fucntion to hide first element and show the rest
function showContent(){
    document.getElementById("hideContent").style.display = "none";
    document.getElementById("showContent").style.display = "block";
}

//function to set all info by id
function changeById(event){
    if (event.keyCode=="32"){
        document.getElementById("showKey").innerHTML = "Space";
    } else {
        document.getElementById("showKey").innerHTML = event.key;
    }
    document.getElementById("showCode").innerHTML = event.code;
}

//function to set all info by class
function changeByClass(event){
    var x = document.getElementsByClassName("showKeycode");
    for (let i = 0;i < x.length;i++){
        x[i].innerHTML = event.keyCode;
    }
}
