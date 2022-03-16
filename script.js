



const app = new Vue(
    {
        el: "#app",
        data :{
            message : "ciao", 
        },
        methods:{
            immagine: function(){
                document.getElementById("contenitoreImg").innerHTML=`<img src="https://cdn.bhdw.net/im/league-of-legends-lol-dark-spirit-morgana-sfondo-64398_w635.jpg" alt="">`
            }
        }
    }
)



