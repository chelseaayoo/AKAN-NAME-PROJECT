function onFormSubmit(FormData) {
    let dayOfTheWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    return dayOfTheWeek;
    let day = Math.trunc(dayOfTheWeek);
    console.log(day)
    
}
console.log(day);
return day;
const name = ['kwasi','kwadwo','kwabena','kwaku','yaw','kofi','kwame','akosua','adwoa','abenaa','akua','yaa','afua','ama'];
console.log(names.join('-'));//
const gender= document.querySelector('input[name="gender"]:checked').value;
console.log(gender)
//const gender=document.getElementById("gender").value;
function onFormSubmit(formData) {
    var formData = readFormData();
    if (day = 0 && gender === male ){
        console.log("kwasi");
        
    }else if (gender === female){
        console.log("akosua")
    }else{
        console.log("ama")
    }if (day= 1 && gender===male){
        console.log("kwadwo");
    }else if (gender=== female){
        console.log("adwoa");
    }else{
        console.log("afua")
    }
    if (day=2 && gender===male){
        console.log("kwabena")
    }else if (gender===female){
        console.log("abenaa")
    }else{
        console.log("yaa")
    }if (day=3&& gender===male){
        console.log("kwaku")
    }else if(gender ===female){
        console.log("akua")
    }else{
        console.log("kwasi")
    }if (day= 4 && gennder=== male){
        console.log("yaw")
    }else if (gender ===female){
        console.log("yaa")
    }else{
        console.log("kwadwo")
    }if (day= 5 && gender === male){
        console.log("kofi")
    }else if (gender === female){
        console.log("afua")
    }else{
        console.log("kwabena")
    }if(day===6 && gender ===male){
        console.log("kwame")
    }else if (gender === female){
        console.log("ama")
    }else{
        console.log("kwaku")
    }
    console.log(dayOfTheWeek);

    
}
function readFormData() {
    var formData = {};
    formData["yy"] = document.getElementById("yy").value;
    formData["mm"] = document.getElementById("mm").value;
    formData["dd"] = document.getElementById("dd").value;
    return FormData;
    
}
var akanname= "Your Akan Name is" + name
// Display name
document.getElementById("output").innerHTML = akanname