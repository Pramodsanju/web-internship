let result0
formSubmit0=() => {
    let firstname = document.getElementById("fname").value;
    let button = document.getElementById("button");

    if (firstname.length > 3 && firstname.length <20) {
        result0=1
        document.getElementById("nig").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {
        result0=0
        // console.log("Name is Invalid")
        document.getElementById("nig").innerHTML ='<p style="color:green">Name is Valid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result1
formSubmit1=() => {
    let middlename = document.getElementById("mname").value;
    let button = document.getElementById("button");

    if (middlename.length > 3 && middlename.length <20) {
        result1=1
        document.getElementById("tig").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {
        result1=0
        // console.log("Name is Invalid")
        document.getElementById("tig").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result2
formSubmit2=() => {
    let lastname = document.getElementById("lname").value;
    let button = document.getElementById("button");

    if (lastname.length >=1 && lastname.length <20) {
        result2=1
        document.getElementById("dig").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result2=0
        // console.log("Name is Invalid")
        document.getElementById("dig").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result3
formSubmit3=() => {
    let relation = document.getElementById("parent").value;
    let button = document.getElementById("button");

    if (relation!==" ") {
        result3=1
        document.getElementById("mug").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result3=0
        // console.log("Name is Invalid")
        document.getElementById("mug").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result4
formSubmit4=() => {
    let f1name = document.getElementById("parentfname").value;
    let button = document.getElementById("button");

    if (f1name.length >3 && f1name.length <20) {
        result4=1
        document.getElementById("abc").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result4=0
        // console.log("Name is Invalid")
        document.getElementById("abc").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result5
formSubmit5=() => {
    let f2name = document.getElementById("parentmname").value;
    let button = document.getElementById("button");

    if (f2name.length >3 && f2name.length <20) {
        result5=1
        document.getElementById("def").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result5=0
        // console.log("Name is Invalid")
        document.getElementById("def").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result6
formSubmit6=() => {
    let f3name = document.getElementById("parentlname").value;
    let button = document.getElementById("button");

    if (f3name.length >=1 && f3name.length <20) {
        result6=1
        document.getElementById("ghi").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result6=0
        // console.log("Name is Invalid")
        document.getElementById("ghi").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result7
formSubmit7=() => {
    let f4name = document.getElementById("fullname").value;
    let button = document.getElementById("button");

    if (f4name.length >3 && f4name.length <20) {
        result7=1
        document.getElementById("jkl").innerHTML ='<p style="color:green">Name is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result7=0
        // console.log("Name is Invalid")
        document.getElementById("jkl").innerHTML ='<p style="color:red">Name is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result8
formSubmit8=() => {
    let dateofbirth = document.getElementById("dob").value;
    let button = document.getElementById("button");

    if (dateofbirth!==" ") {
        result8=1
        document.getElementById("mno").innerHTML ='<p style="color:green">date is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result8=0
        // console.log("Name is Invalid")
        document.getElementById("mno").innerHTML ='<p style="color:red">date is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result9
formSubmit9=() => {
    let age = document.getElementById("year").value;
    let button = document.getElementById("button");

    if (age >=0 && age <=100) {result9=1
        document.getElementById("pqr").innerHTML ='<p style="color:green">age is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result9=0
        // console.log("Name is Invalid")
        document.getElementById("pqr").innerHTML ='<p style="color:red">age is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result10
formSubmit10=() => {
    let f5name = document.getElementById("placeofbirth").value;
    let button = document.getElementById("button");

    if (f5name.length >3 && f5name.length <20) {result10=1
        document.getElementById("stu").innerHTML ='<p style="color:green">place is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result10=0
        // console.log("Name is Invalid")
        document.getElementById("stu").innerHTML ='<p style="color:red">place is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result11
formSubmit11=() => {
    let country = document.getElementById("Countryofbirth").value;
    let button = document.getElementById("button");

    if (country!==" ") {result11=1
        document.getElementById("vwx").innerHTML ='<p style="color:green">country is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result11=0
        // console.log("Name is Invalid")
        document.getElementById("vwx").innerHTML ='<p style="color:red">country is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result12
formSubmit12=() => {
    let qualify = document.getElementById("qualification").value;
    let button = document.getElementById("button");

    if (qualify!==" ") {result12=1
        document.getElementById("aaa").innerHTML ='<p style="color:green">qualification is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result12=0
        // console.log("Name is Invalid")
        document.getElementById("aaa").innerHTML ='<p style="color:red">qualification is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result22
formSubmit22=() => {
    let blood = document.getElementById("bloodgroup").value;
    let button = document.getElementById("button");

    if (blood!==" ") {result22=1
        document.getElementById("bbb").innerHTML ='<p style="color:green">bloodgroup is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result22=0
        // console.log("Name is Invalid")
        document.getElementById("bbb").innerHTML ='<p style="color:red">bloodgroup is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result13
formSubmit13=() => {
    let landline = document.getElementById("landlineno").value;
    let button = document.getElementById("button");

    if (  landline.length==10) {result13=1
        document.getElementById("ccc").innerHTML ='<p style="color:green">number is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result13=0
        // console.log("Name is Invalid")
        document.getElementById("ccc").innerHTML ='<p style="color:red">number is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result14
formSubmit14=() => {
    let landline2 = document.getElementById("applicantno").value;
    let button = document.getElementById("button");

    if (  landline2.length==10) {result14=1
        document.getElementById("ddd").innerHTML ='<p style="color:green">number is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result14=0
        // console.log("Name is Invalid")
        document.getElementById("ddd").innerHTML ='<p style="color:red">number is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result15
formSubmit15=() => {
    let landline3 = document.getElementById("alternateno").value;
    let button = document.getElementById("button");

    if (  landline3.length==10) {result15=1
        document.getElementById("eee").innerHTML ='<p style="color:green">number is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result15=0
        // console.log("Name is Invalid")
        document.getElementById("eee").innerHTML ='<p style="color:red">number is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result16
formSubmit16=() => {
    let f5name = document.getElementById("identifymark1").value;
    let button = document.getElementById("button");

    if (f5name.length >3 && f5name.length <20) {result16=1
        document.getElementById("fff").innerHTML ='<p style="color:green">sentence is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result16=0
        // console.log("Name is Invalid")
        document.getElementById("fff").innerHTML ='<p style="color:red">sentence is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}
let result17
formSubmit17=() => {
    let f5name = document.getElementById("identifymark2").value;
    let button = document.getElementById("button");

    if (f5name.length >3 && f5name.length <20) {result17=1
        document.getElementById("ggg").innerHTML ='<p style="color:green">sentence is Valid</p>'
        //   console.log("Name is Valid")
        button.removeAttribute("disabled", " ")
    }
    else {result17=0
        // console.log("Name is Invalid")
        document.getElementById("ggg").innerHTML ='<p style="color:red">sentence is invalid</p>'
        button.setAttribute("disabled", " ")
        
    }   
}

callSubmit=()=>{
if(result0==1 && result1==1 && result2==1 && result3==1 &&result4==1 &&result5==1 &&result6==1 &&result7==1 &&result8==1 &&result9==1 &&result10==1 &&result11==1 &&result12==1 && result22==1 &&result13==1 &&result14==1 &&result15==1 &&result16==1 &&result17==1)
{
    

        button.removeAttribute("disabled"," ")
        window.location.href="./day8_task1.html"
    
}
else{

    submit.setAttribute("disabled"," ")
}
}
