
const cursorElm = document.getElementById('cursor');



addEventListener('mousemove',(eventData)=>{
    if(tmrId ){      //truthy
        clearTimeout(tmrId);
        tmrId=null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    },3000);

});

document.body.addEventListener('mouseleave',()=>{
   
    cursorElm.style.opacity = 0 ;

});

document.body.addEventListener('mouseenter',()=>{
   
    cursorElm.style.opacity = 1;
});

// const tmrId= setInterval(()=>{
    
//     console.log('Boomb...' )
// },3000);


// const tmrId1= setTimeout(()=>{
    
//     console.log('Bombe Pipuruwa...' )
// },5000);



// const btnStopTimer1 = document.querySelectorI('#btnStopTimer');
// btnStopTimer1.addEventListener('click',()=>{
//     clearTimeout(tmrId1);
//     console.log('Nishkriya kala...');
// });





