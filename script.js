var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
let nameValue;
let emailValue;
let passValue;
let radiobtnValue;
let drop1;
let contact1;
let dob1;
function myfunction() {
    let name1 = document.getElementById("name").value;
    if (name1 == "" || name1 == null) {
      alert("please fill name")
    }
    else{
        nameValue=name1;
    }
   
    email1();
    password();
    contact();
    dob();
    radioButton();
    drop();
    printValue();
    
}
function email1(){
    let email = document.getElementById("email").value;
    if(email.match(valid) && email.includes("com") || email.includes("in")){
        emailValue=email;
    }
    else{
        alert("please fill right email")
    }

    
}
function password(){
   let p=document.getElementById("pass").value;
    console.log(p)
    // alert("right")
    if (p.length > 6 && p.search(/[a-z]/) > 0 && p.search(/[A-Z]/) > 0) {
        passValue=p;
    }
    else{
        alert("Enter write password(password must be 6 digit ,Enter small and capital character)")
    }

}
function contact(){
    let contact=document.getElementById("contact").value;
    if(contact.match(phoneNum) && contact.length>9 && contact.length <=10){
        contact1=contact;
    }
    else{
        alert("enter 10 digit contact no.")
    }

}
function dob(){
    let dob=document.getElementById("dob").value;
    if(dob!==""){
        dob1=dob;
    }
    else{
     alert("Enter date of Birth")
    }
}
function radioButton(){
    let val=document.querySelector('input[name="gender"]:checked').value;
    if(val!==null && val!==""){
        radiobtnValue=val;
    }
    else{
        alert("checked the gender")
    }


}
function drop(){
    let drop=document.getElementById('drop').value;
    if(drop !== ""){
        drop1=drop;
    }
    else{
        alert("please select dropdown")
    }
}
function printValue(){
    let div=document.getElementById('content');
    let table1=document.getElementById("table");
   if(nameValue !== undefined && emailValue!== undefined && passValue!==undefined && radiobtnValue!==undefined && drop1!==undefined && contact1!==undefined && dob1 !==undefined
    && nameValue !== "" && emailValue!== "" && passValue!=="" && radiobtnValue!=="" && drop1!=="" && contact1!=="" && dob1 !=="")
 {
    let tr=document.createElement('tr');
    tr.innerHTML=`<td>${nameValue}</td>
                  <td>${emailValue}</td>
                  <td>${passValue}</td>
                  <td>${radiobtnValue}</td>
                  <td>${drop1}</td>  `;
   table1.appendChild(tr);
   nameValue='';
   emailValue='';
   passValue='';
   radiobtnValue='';
   drop1= '';
   contact1='';
 }
 else{
    alert("fill correct detils")
 }
    console.log(table1)
}