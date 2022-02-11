async function inicio(){ 
const response= await fetch("https://cors-anywhere.herokuapp.com/"+"https://fullmike.herokuapp.com/")

  .then(response => datas=  response.json())
    .then(data =>datas = data);
ul= document.getElementById("ul").innerHTML
console.log(datas)
  for(i in datas){
    document.getElementById("ul").innerHTML+= "<li>" +datas[i]["name"]
    
}}

inicio()