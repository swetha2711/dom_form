let count=1
function validate(){
    const tablevalues=document.getElementById("data");
    const row=tablevalues.insertRow(count);
    const first=document.querySelector('#first-name').value
    const last=document.querySelector('#last-name').value
    const address=document.querySelector('#address').value
    const pincode=document.querySelector('#pincode').value
    const gender=document.querySelector('#gender').value
    var choice="";
    var foodcount=0;
    if(document.getElementById('choice1').checked==true){
        choice=choice+" "+document.getElementById('choice1').value
        foodcount++;
    }
    if(document.getElementById('choice2').checked==true){
        choice=choice+" "+document.getElementById('choice2').value
        foodcount++;
    }
    if(document.getElementById('choice3').checked==true){
        choice=choice+" "+document.getElementById('choice3').value
        foodcount++;
    }
    if(document.getElementById('choice4').checked==true){
        choice=choice+" "+document.getElementById('choice4').value
        foodcount++;
    }
    if(document.getElementById('choice5').checked==true){
        choice=choice+" "+document.getElementById('choice5').value
        foodcount++;
    }

    let state=document.querySelector('#state').value
    let country=document.querySelector('#country').value
    if(first && last && address && gender && pincode && state && country && foodcount>=2 && choice){
        let value1=row.insertCell(0)
        value1.innerHTML=first
        let value2=row.insertCell(1)
        value2.innerHTML=last
        let value3=row.insertCell(2)
        value3.innerHTML=address
        let value4=row.insertCell(3)
        value4.innerHTML=pincode
        let value5=row.insertCell(4)
        value5.innerHTML=gender
        let value6=row.insertCell(5)
        value6.innerHTML=choice
        let value7=row.insertCell(6)
        value7.innerHTML=state
        let value8=row.insertCell(7)
        value8.innerHTML=country
    }
    else if(foodcount<2){
        alert("please select atleast 2 choices");
        return false;
    }
    else{
        alert("please fill details");
        return false;
    }

    var form1=document.getElementById("form")
    form1.reset();

}

