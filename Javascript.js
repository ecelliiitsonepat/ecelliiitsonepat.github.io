/*-----------------BELOW IS PRELOADER-------------*/

let timer1
let preloader=document.querySelector('.preloader')
let nav=document.querySelector('.navbar');
timer1=setInterval(()=>{
preloader.classList.add('endpreloadopacity');
setTimeout(timer1);

},4500)
let timer2= setInterval(()=>{
    nav.classList.remove('nav_beforepreload');
    setTimeout(timer2);
    document.body.style.transition="0s none";
document.body.style.transition.delay="none";
document.querySelector('.headervdo').classList.add('headervdo_afterpreload');
},4600)
let timer3= setInterval(()=>{
    preloader.style.display='none';
    setTimeout(timer3);
},5500)

/*-----------------ABOVE WAS PRELOADER-------------*/

let quotes = [ {"quote": `You see things; and you say, ‘Why?' But I dream things that never were; and I say, ‘Why not?'`, "writer":"George Bernard Shaw"},
{"quote":`You are never too old to set another goal or to dream a new dream.` , "writer":"C.S. Lewis"},
{"quote": `A man is not old until regrets take the place of dreams.`, "writer":"John Barrymore"},
{"quote":`The only thing that will stop you from fulfilling your dreams is you.` , "writer":"Tom Bradley"},
{"quote": `The only thing worse than starting something and failing … is not starting something.`, "writer":"Seth Godin"},
{"quote": `The future belongs to those who believe in the beauty of their dreams.` , "writer":"Eleanor Roosevelt"},
{"quote": `Remember to celebrate milestones as you prepare for the road ahead.`, "writer":"Nelson Mandela"},
{"quote": `It may be that those who do most, dream most.`, "writer":"Stephen Butler Leacock"},
{"quote": `Rome wasn't built in a day`, "writer":"John Heywood"},
{"quote": `To lose patience is to lose the battle.` , "writer":"Mahatma Gandhi"},
{"quote": `Patience is necessary, and one cannot reap immediately where one has sown.`, "writer":"Soren Kierkegaard"},
{"quote": `If I have done the public any service, it is due to my patient thought.`, "writer":" Isaac Newton"},
{"quote": `He that can have patience can have what he will.`, "writer":"Benjamin Franklin"},
{"quote": `Nature never rushes, yet everything gets done.`, "writer":"Lao Tzu"},
{"quote": `All our dreams can come true, if we have the courage to pursue them.`, "writer":"Walt Disney"},
{"quote": `Tough times never last, but tough people do.`, "writer":"Robert H. Schuller"},
{"quote": `I don't believe in taking right decisions. I take decisions and then make them right.` , "writer":"Ratan Tata"},
{"quote": `Success is when Your signature changes to autograph`, "writer":"Abdul Kalam"},
{"quote": `Kill them with success and bury them with a smile.`, "writer":" Leonardo DiCaprio"},
{"quote": `Whenever I watch someone doing something, even if it doesn’t turn out so great, I at least admire their intentions and stuff.`, "writer":"Robert Downey Jr."},
{"quote": "You miss 100% of the shots you don't take.", "writer":"Wayne Gretzky"},
{"quote": "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.", "writer":"Helen Keller"},
{"quote": "I'm not afraid of storms, for I'm learning how to sail my ship.", "writer":"Louisa May Alcott"},
{"quote": "Don't let the fear of striking out hold you back.", "writer":"Babe Ruth"},
{"quote": `The secret of getting ahead is getting started.`, "writer":"Mark Twain"},
{"quote": `I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.`, "writer":"Leah Busque"},
{"quote": `Do one thing every day that scares you.`, "writer":"Eleanor Roosevelt"},
{"quote": `Whatever you are, be a good one.`, "writer" : "Abraham Lincoln"}];
let quotedisplay=document.querySelector('.quote');
let writerdisplay=document.querySelector('.writer');
let currentdate = new Date;
let currentsec = currentdate.getSeconds();
let changedsec= currentsec;
let random =1;
let value=changedsec;
setInterval(()=>value=value+1,470)
setInterval(()=>{
    changedsec++;
    if(Math.abs(changedsec-currentsec)%8==0)
    { 
        quotedisplay.style.opacity=0;
        writerdisplay.style.opacity=0;
    }
    if(Math.abs(changedsec-currentsec)%8==1)
    {   /*-----------------BELOW IS PRELOADER-------------*/

let timer1
let preloader=document.querySelector('.preloader')
let nav=document.querySelector('.navbar');
timer1=setInterval(()=>{
preloader.classList.add('endpreloadopacity');
setTimeout(timer1);

},4500)
let timer2= setInterval(()=>{
    nav.classList.remove('nav_beforepreload');
    setTimeout(timer2);
    document.body.style.transition="0s none";
document.body.style.transition.delay="none";
document.querySelector('.headervdo').classList.add('headervdo_afterpreload');
},4600)
let timer3= setInterval(()=>{
    preloader.style.display='none';
    setTimeout(timer3);
},5500)

/*-----------------ABOVE WAS PRELOADER-------------*/

let quotes = [ {"quote": `You see things; and you say, ‘Why?' But I dream things that never were; and I say, ‘Why not?'`, "writer":"George Bernard Shaw"},
{"quote":`You are never too old to set another goal or to dream a new dream.` , "writer":"C.S. Lewis"},
{"quote": `A man is not old until regrets take the place of dreams.`, "writer":"John Barrymore"},
{"quote":`The only thing that will stop you from fulfilling your dreams is you.` , "writer":"Tom Bradley"},
{"quote": `The only thing worse than starting something and failing … is not starting something.`, "writer":"Seth Godin"},
{"quote": `The future belongs to those who believe in the beauty of their dreams.` , "writer":"Eleanor Roosevelt"},
{"quote": `Remember to celebrate milestones as you prepare for the road ahead.`, "writer":"Nelson Mandela"},
{"quote": `It may be that those who do most, dream most.`, "writer":"Stephen Butler Leacock"},
{"quote": `Rome wasn't built in a day`, "writer":"John Heywood"},
{"quote": `To lose patience is to lose the battle.` , "writer":"Mahatma Gandhi"},
{"quote": `Patience is necessary, and one cannot reap immediately where one has sown.`, "writer":"Soren Kierkegaard"},
{"quote": `If I have done the public any service, it is due to my patient thought.`, "writer":" Isaac Newton"},
{"quote": `He that can have patience can have what he will.`, "writer":"Benjamin Franklin"},
{"quote": `Nature never rushes, yet everything gets done.`, "writer":"Lao Tzu"},
{"quote": `All our dreams can come true, if we have the courage to pursue them.`, "writer":"Walt Disney"},
{"quote": `Tough times never last, but tough people do.`, "writer":"Robert H. Schuller"},
{"quote": `I don't believe in taking right decisions. I take decisions and then make them right.` , "writer":"Ratan Tata"},
{"quote": `Success is when Your signature changes to autograph`, "writer":"Abdul Kalam"},
{"quote": `Kill them with success and bury them with a smile.`, "writer":" Leonardo DiCaprio"},
{"quote": `Whenever I watch someone doing something, even if it doesn’t turn out so great, I at least admire their intentions and stuff.`, "writer":"Robert Downey Jr."},
{"quote": "You miss 100% of the shots you don't take.", "writer":"Wayne Gretzky"},
{"quote": "Avoiding danger is no safer in the long run than outright exposure. The fearful are caught as often as the bold.", "writer":"Helen Keller"},
{"quote": "I'm not afraid of storms, for I'm learning how to sail my ship.", "writer":"Louisa May Alcott"},
{"quote": "Don't let the fear of striking out hold you back.", "writer":"Babe Ruth"},
{"quote": `The secret of getting ahead is getting started.`, "writer":"Mark Twain"},
{"quote": `I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.`, "writer":"Leah Busque"},
{"quote": `Do one thing every day that scares you.`, "writer":"Eleanor Roosevelt"},
{"quote": `Whatever you are, be a good one.`, "writer" : "Abraham Lincoln"}];
let quotedisplay=document.querySelector('.quote');
let writerdisplay=document.querySelector('.writer');
let currentdate = new Date;
let currentsec = currentdate.getSeconds();
let changedsec= currentsec;
let random =1;
let value=changedsec;
setInterval(()=>value=value+1,470)
setInterval(()=>{
    changedsec++;
    if(Math.abs(changedsec-currentsec)%8==0)
    { 
        quotedisplay.style.opacity=0;
        writerdisplay.style.opacity=0;
    }
    if(Math.abs(changedsec-currentsec)%8==1)
    {   
        quotedisplay.innerHTML=`"${quotes[value%28].quote}"` ;
        writerdisplay.innerHTML=`~${quotes[value%28].writer}`;
        quotedisplay.style.opacity=1;
        writerdisplay.style.opacity=1;
    }
},1000)
let gpsmap=document.querySelector('.gpsmap')
setInterval(()=>gpsmap.width=(window.screen.width),100)
        quotedisplay.innerHTML=`"${quotes[value%28].quote}"` ;
        writerdisplay.innerHTML=`~${quotes[value%28].writer}`;
        quotedisplay.style.opacity=1;
        writerdisplay.style.opacity=1;
    }
},1000)
let gpsmap=document.querySelector('.gpsmap')
setInterval(()=>gpsmap.width=(window.screen.width),100)
