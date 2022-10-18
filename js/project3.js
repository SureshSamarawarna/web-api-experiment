const stg = ['This is a experiment of Web API','I am Suresh Samarawarna','Thank you...'];

console.log(stg.length);

const text = document.getElementById('text');

text.innerText = stg[0];

let erase = false;
let charIndex = 1;
let index = 0

const typeText = ()=>{
    if(!erase){
        text.innerText = stg[index].substring(0,charIndex++);
        if(charIndex === stg[index].length + 15){
            charIndex = stg[index].length
            erase = true;
        }
    }

}

const  eraseText = () =>{
    if(erase){
        text.innerText = stg[index].substring(0,charIndex--);
        if(charIndex === 0){
            erase = false;
            index++
            if(index === stg.length){
                index = 0;
            }
        }
    }
}




let t1 =0 ,t2 = 0 ;


function animateText(timestamp){
    if(!t1) t1 = timestamp;
    if(!t2) t2 = timestamp;

    const diff1 = timestamp - t1;
    const diff2 = timestamp - t2;

    if(diff1 >= 150){
        typeText();
        t1 = timestamp;
    }

    if(diff2 >= 25){
        eraseText();
        t2 = timestamp;
    }


    requestAnimationFrame(animateText);
}
requestAnimationFrame(animateText);



