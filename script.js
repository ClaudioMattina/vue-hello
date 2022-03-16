



const app = new Vue(
    {
        el: "#app",
        data :{
            message : "ciao", 
            url : ""   
        }
    }
)


let img = document.getElementById("containerImg")

img.innerHTML += `<img src="${app.data.url} " alt="" id="myImg">`
