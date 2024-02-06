const All= document.querySelector(".screen");
const botones= document.querySelectorAll(".boton");

botones.forEach(boton=> {
    boton.addEventListener("click", ()=>{
        const accion=boton.textContent;
        
        if(boton.id ==="C"){
            All.textContent = "0";
            return
        }
        if(boton.id==="delete"){
            if(All.textContent.length===1 || All.textContent=== "Syntax Error"){
                All.textContent="0";
            } else{
                All.textContent=All.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id==="equals"){
            try{
                All.textContent=eval(All.textContent);
            } catch{
                All.textContent="Syntax Error";
            }
            return;
        }

        if(All.textContent === "0" || All.textContent=== "Syntax Error"){
            All.textContent=accion;
        } else{
            All.textContent += accion;
        }
    })

})