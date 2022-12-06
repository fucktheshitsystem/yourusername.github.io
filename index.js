let fName
let name
let namelength


document.getElementById("Title").innerHTML = "Welcome, ..."
document.getElementById("Title").style.fontSize = "xx-large"

currentTime();

function currentTime() {
    let date = new Date(); 
    let day = date.toDateString();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
   
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("Time").innerText = time; 
    document.getElementById("Time").style.fontSize = "large"
    let t = setTimeout(function(){ currentTime() }, 1000);

    document.getElementById("Body").innerHTML = "Today is "+ day
    document.getElementById("Body").style.fontSize = "large"
}

document.getElementById("submit").onclick = function(){

    name = document.getElementById("textbox").value
    let newname = name.trim()

    if (name.indexOf(" ")>= 0){
        fName = name.slice(0, name.indexOf(" "))
        namelength = fName.length

        if (namelength > 16){
        document.getElementById("lengthcheck").innerHTML = "Name too long! No more than 16 characters!"
        }
        else {
        document.getElementById("Title").innerHTML = "Welcome, " + fName     
        }
    }
    else {
        namelength = name.length  
        if (namelength > 16){
        document.getElementById("lengthcheck").innerHTML = "Name too long! No more than 16 characters!"
        }
        else {
        document.getElementById("Title").innerHTML = "Welcome, " + name     
        }
    }
    
    if (!name == 0){
        document.getElementById("div1").style.opacity = 0

    }
   
}
