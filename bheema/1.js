

 function registerClick(){

    var roomType="";
    var roomCost=0;
    var adonName="";
    var adonCost=0;
    

    deluxRadio=document.getElementById("optDelux");
    suiteRadio=document.getElementById("optSuite");

    if(deluxRadio.checked){
        roomType=deluxRadio.value;
        roomCost=2500;
    }
    if(suiteRadio.checked){
        roomType=suiteRadio.value;
        roomCost=4000;
    }
    acCheckbox=document.getElementById("optAc");
    lockerCheckbox=document.getElementById("optLocker");

    if(acCheckbox.checked){
        adonName+=acCheckbox.value+"<br>";
        adonCost=1000;
        roomCost=roomCost + adonCost;
    }
    if(lockerCheckbox.checked){
        adonName+=lockerCheckbox.value+"<br>";
        adonCost=300;
        roomCost=roomCost + adonCost;
    }
    
    
    

    var advance=document.getElementById("txtAdvance").value;
    var days=parseInt(document.getElementById("txtDays").value);
    var person=parseInt(document.getElementById("txtPerson").value);
    if(person>2){
        var experson=person-2;
        roomCost=roomCost+(experson*1000)
    }
    roomCost=roomCost*days;
    roomCost=roomCost-parseInt(advance);
    console.log(advance);
    if(advance==''){
        document.getElementById("error").style.display="block";
      
    }else{
        document.getElementById("lblName").innerHTML=document.getElementById("txtName").value;
        document.getElementById("lblDate").innerHTML=document.getElementById("txtDate").value;
        document.getElementById("lblAdvance").innerHTML= advance;
        document.getElementById("lblDays").innerHTML= days;
        document.getElementById("lblPerson").innerHTML= person;
        document.getElementById("lblRoom").innerHTML= roomType;
        document.getElementById("lblAdon").innerHTML=adonName;
        document.getElementById("lblTotal").innerHTML="&#8377;" + roomCost;
        document.getElementById("error").style.display="none";
        document.getElementById("txtName").value="";
        document.getElementById("txtDate").value="";
        document.getElementById("txtDays").value="";
        document.getElementById("txtPerson").value="";
        document.getElementById("txtAdvance").value="";
    }
    
    
}