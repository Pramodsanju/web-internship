 formSubmit=()=>{
let firstname=document.getElementById("fname").value
let middlename=document.getElementById("mname").value
let lastname=document.getElementById("lname").value
let relation=document.getElementById("relationType").value
let relationfname=document.getElementById("rfname").value
let relationmname=document.getElementById("rmname").value
let relationlname=document.getElementById("rlname").value
let relationlfullname=document.getElementById("fullname").value
let dateofbirth=document.getElementById("dob").value
let age=document.getElementById("age").value
let place=document.getElementById("pob").value
let country=document.getElementById("cob").value
let qualification=document.getElementById("qualification").value
let blood=document.getElementById("bg").value
let landline=document.getElementById("lno").value
let mail=document.getElementById("email").value
let application=document.getElementById("appno").value
let emergency=document.getElementById("eno").value
let identify1=document.getElementById("identification1").value
let identify2=document.getElementById("identification2").value

let obj={fname:firstname,mname:middlename,lname:lastname,relationType:relation,rfname:relationfname,rmname:relationmname,rlname:relationlname,fullname:relationlfullname,dob:dateofbirth,age:age,pob:place,cob:country,qualification:qualification,bg:blood,lno:landline,email:mail,appno:application,eno:emergency,identification1:identify1,identification2:identify2}

let convertString=JSON.stringify(obj)
let saved=localStorage.setItem("details",convertString)
let reload=localStorage.getItem("details")

let convertObject=JSON.parse(reload)


}