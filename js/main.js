const container = document.querySelector('.rain-container');
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.header-menu');
const rain  = () =>{
    let j=0;
    while (j<=80){
        let gout = document.createElement('i');
        if(j%2==0){
            gout.textContent = "1";
        }else{
            gout.textContent = "0";
        }
        let x = innerWidth*Math.random()-20;
        let time = 10*Math.random();

        gout.style.animationDuration = time + 's';
        gout.style.left = x + 'px';
        container.appendChild(gout);
        j++;
    }
}
btnMenu.addEventListener("click", function(){
    console.log("Boton");
    console.log(menu.classList.contains("on"));
    if(menu.classList.contains("on")){
        menu.classList.add("off");
        menu.classList.remove("on");
    }else{
        menu.classList.add("on");
        menu.classList.remove("off");
    }
})
rain()