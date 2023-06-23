const container = document.querySelector('.rain-container');
const rain  = () =>{
    let j=0;
    while (j<=80){
        let gout = document.createElement('i');
        if(j%2==0){
            gout.textContent = "1";
        }else{
            gout.textContent = "0";
        }
        let x = innerWidth*Math.random()-10;
        let time = 10*Math.random();

        gout.style.animationDuration = time + 's';
        gout.style.left = x + 'px';
        container.appendChild(gout);
        j++;
    }
}
rain()