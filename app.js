var curDate = new Date('2022-09-20').getTime() ;

var a = setInterval(()=>{
    
    var now = new Date().getTime();
    var dist = now - curDate;

    var day = Math.floor((dist%(1000*60*60*24*30.4))/(1000*60*60*24));
    console.log(day)
    var hour = Math.floor((dist %(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((dist %(1000*60*60))/(1000*60));
    var sec = Math.floor((dist %(1000*60))/(1000));
    var month = Math.floor(dist/(1000*60*60*24*30.4));
    
    document.getElementById('1').innerHTML = month;
    document.getElementById('2').innerHTML = day;
    document.getElementById('3').innerHTML = hour;
    document.getElementById('4').innerHTML = min;
    document.getElementById('5').innerHTML = sec;
    // console.log("perfect")

    //title and subtitles

    let title10 = document.getElementById('tnew4')
    let title9 = document.getElementById('tnew3')
    let title8 = document.getElementById('tnew2')
    let title7 = document.getElementById('tnew1')
    let title6 = document.getElementById('title1')
    let title5 = document.getElementById('title2')
    let title4 = document.getElementById('title3')
    let title3 = document.getElementById('title4')
    let title2 = document.getElementById('title5')
    let title1 = document.getElementById('title6')

},1000)
let btn10 = document.getElementById('10btn');
let btn9 = document.getElementById('9btn');
let btn8 = document.getElementById('8btn');
let btn7 = document.getElementById('7btn');
let btn6 = document.getElementById('6btn');
let btn5 = document.getElementById('5btn');
let btn3 = document.getElementById('3btn');
let btn4 = document.getElementById('4btn');
let btn2 = document.getElementById('2btn');
let btn1 = document.getElementById('1btn');
let card6 = document.getElementById('sixth')
let card5 = document.getElementById('fifth')
let card4 = document.getElementById('forth')
let card3 = document.getElementById('third')
let card2 = document.getElementById('second')
let card1 = document.getElementById('first')
let card7 = document.getElementById('new1')
let card8 = document.getElementById('new2')
let card9 = document.getElementById('new3')
let card10 = document.getElementById('new4')


btn6.addEventListener('click',()=>{
    gsap.fromTo('#sixth' ,0.75, {opacity:1,x:0},{opacity:0,x:120})
    gsap.fromTo('#title5',0.75,{opacity:0,x:120},{opacity:1,x:0})
    card6.style.zIndex = 0;
    card5.style.zIndex = 200;
    card5.style.opacity = 1;
    console.log("sixth")
})
btn5.addEventListener('click',()=>{
    gsap.fromTo('#fifth' ,0.75, {opacity:1,x:0},{opacity:0,x:-120})
    gsap.fromTo('#title4',0.75,{opacity:0,x:-120},{opacity:1,x:0})
    console.log("fifth")
    card5.style.zIndex = 0;
    card4.style.zIndex = 200;
    card4.style.opacity = 1;
})
btn4.addEventListener('click',()=>{
    gsap.fromTo('#forth' ,0.75, {opacity:1,x:0},{opacity:0,x:120})
    gsap.fromTo('#title3',0.75,{opacity:0,x:120},{opacity:1,x:0})
    card4.style.zIndex = 0;
    card3.style.zIndex = 200;
    card3.style.opacity = 1;
    console.log("forth")
})
btn3.addEventListener('click',()=>{
    gsap.fromTo('#third' ,0.75, {opacity:1,x:0},{opacity:0,x:-120})
    gsap.fromTo('#title2',0.75,{opacity:0,x:-120},{opacity:1,x:0})
    card3.style.zIndex = 0;
    card2.style.zIndex = 200;
    card2.style.opacity = 1;
    console.log('third')
})
btn2.addEventListener('click',()=>{
    gsap.fromTo('#second' ,0.75, {opacity:1,x:0},{opacity:0,x:120})
    gsap.fromTo('#title1',0.75,{opacity:0,x:120},{opacity:1,x:0})
    card2.style.zIndex = 0;
    card1.style.zIndex = 200;
    card1.style.opacity = 1;
    console.log('second')
})
btn1.addEventListener('click',()=>{
    gsap.fromTo('#first',0.75,{opacity:1,x:0},{opacity:0,x:-120})
    gsap.fromTo('#tnew1',0.75,{opacity:0,x:-120},{opacity:1,x:0})
    card1.style.zIndex= 0;
    card7.style.zIndex=200;
    
    card7.style.opacity = 1;

    console.log('first')
})
btn7.addEventListener('click',()=>{
    gsap.fromTo('#new1',0.75,{opacity:1,x:0},{opacity:0,x:120})
    gsap.fromTo('#tnew2',0.75,{opacity:0,x:120},{opacity:1,x:0})
    card7.style.zIndex=0;
    card8.style.zIndex=200;
    card8.style.opacity=1;
})
btn8.addEventListener('click',()=>{
    gsap.fromTo('#new2',0.75,{opacity:1,x:0},{opacity:0,x:-120})
    gsap.fromTo('#tnew3',0.75,{opacity:0,x:-120},{opacity:1,x:0})
    card8.style.zIndex=0;
    card9.style.zIndex=200;
    card9.style.opacity=1;
})
btn9.addEventListener('click',()=>{
    gsap.fromTo('#new3',0.75,{opacity:1,x:0},{opacity:0,x:120})
    gsap.fromTo('#tnew4',0.75,{opacity:0,x:120},{opacity:1,x:0})
    card9.style.zIndex=0;
    card10.style.zIndex=200;
    card10.style.opacity=1;
})
btn10.addEventListener('click',()=>{
    gsap.fromTo('#sixth',0.75,{opacity:0,x:120},{opacity:1,x:0})
    gsap.fromTo('#title6',0.75,{opacity:0,x:-120},{opacity:1,x:0})
    gsap.fromTo('#fifth',0.75,{x:-120},{x:0})
    gsap.fromTo('#forth',0.75,{x:120},{x:0})
    gsap.fromTo('#third',0.75,{x:-120},{x:0})
    gsap.fromTo('#second',0.75,{x:120},{x:0})
    gsap.fromTo('#first',0.75,{x:-120},{x:0})
    gsap.fromTo('#new1',0.75,{x:120},{x:0})
    gsap.fromTo('#new2',0.75,{x:-120},{x:0})
    gsap.fromTo('#new3',0.75,{x:120},{x:0})
    card9.style.zIndex=0;
    // card10.style.zIndex=200;
    card10.style.opacity=0;
    card10.style.zIndex= 10;
    card9.style.zIndex= 20;
    card8.style.zIndex= 30;
    card7.style.zIndex= 40;
    card1.style.zIndex= 50;
    card2.style.zIndex= 60;
       card3.style.zIndex= 70;
       card4.style.zIndex= 80;
       card5.style.zIndex= 90;
       card6.style.zIndex=100;
})

var typed = new Typed(".autotype",{
    strings: [`<p>20th February, see how quickly time flies na, It seems like  it was just yesterday that we met and now its been 5 months. <br>
    
        <br>
        I know you're not doing fine these days, so this is for you to make you feel bit special <br> <br>
        Choti choti problems to ati rehti but esa nhi he ki ye time hmesha hi esa rhega 
        so dont worry , even if isse bura wkt bhi ajaye to you'll find me
        with you always💗.
        <br>
        <br>
        Tujhe to pata hi he mrko express krna nahi ata to bs kch v likh de rha,
        dhyan mat dena ispe<br> <br>
        Ye chota sa surprise , This ain't perfect but hope you'll like it<br>You're special, to kuch special krna banta he na💗.
        <br>
        Aur Haan alexa miss krri thi tujhe baat krle usse jake hehe.
        </p>
        <br>
        <h3>Unknown Person</h3>`],
    typeSpeed: 50,
    startDelay: 50,
    loop: true,
    showCursor: true,
    cursorChar: "|",
    fadeOut: true,
    fadeOutDelay: 2000
})

// twnikle animation
 function playSound(songname ,loop){
       console.log("start")
    let audio = new Audio(songname)
    audio.loop = loop
    audio.volume = 0.01
    audio.play();
    console.log("end")
   }
   playSound("parachute.mp3",true)

    
