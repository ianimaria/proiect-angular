
function myFunction() {
nume = prompt("Cum te numesti?");

if (nume != null) {
    newPageTitle = 'Salut, '+ nume + '!';
    document.querySelector('title').textContent = newPageTitle;
    setTimeout(function() {
        document.querySelector('title').textContent = 'Aquatica';
    }, 2000);
}
}

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Jul 1, 2020 10:00:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          diferenta = countDown - now;
      document.getElementById('days').innerText = Math.floor(diferenta / (day)),
        document.getElementById('hours').innerText = Math.floor((diferenta % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((diferenta % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((diferenta % (minute)) / second);
        if (diferenta < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "It's open!";
            document.getElementById('days').innerText = 0,
        document.getElementById('hours').innerText = 0,
        document.getElementById('minutes').innerText = 0,
        document.getElementById('seconds').innerText = 0;
 
          }
    }, second)

    function idleLogout() {
        var t;
        t = setTimeout(inactiv, 15000);

        function inactiv() {
            var div = document.createElement("div");
            div.setAttribute("id","div1");
            div.style.position = "fixed";
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.top = "0px";
            div.style.left = "0px";
            div.style.zIndex ="1000";
            div.style.background = "#ccc";
            div.style.textAlign = "center";
            document.body.appendChild(div);

            var countDownDate = new Date().getTime();

            x = setInterval(function() {

            var now = new Date().getTime();

            var diferenta = now - countDownDate;
            const second = 1000,
            minute = second * 60,
            hour = minute * 60;
            
            var minutes = Math.floor((diferenta % (hour)) / (minute));
            var seconds = Math.floor((diferenta % (minute)) / second);

            elem = document.getElementById("div1");
            console.log(elem);
            if (elem!=null)
                {elem.innerHTML ="Ai fost inactiv timp de " + minutes + " min " + (seconds+15) + " s ";}
        }, 1000);

            window.onload = resetTimer;
            window.onmousemove = resetTimer;
            window.onmousedown = resetTimer;      
            window.ontouchstart = resetTimer;
            window.onclick = resetTimer;     
            window.onkeypress = resetTimer;     
    
        }
    
        function resetTimer() {
            clearInterval(x);
            var elem2 = document.getElementById("div1");
            
            if (elem2 != null)
            {
                elem2.remove();
            }
            clearTimeout(t);
            t = setTimeout(inactiv, 15000);
        }
    }
    
idleLogout();


function HideShow() {
    var x = document.getElementsByTagName('img');
    var y = document.getElementById('imgbtn');
    if (y.innerHTML === "Hide Images")
    {console.log(1);
    for (i=0;i<x.length;i++)
    { x[i].style.display = "none";
console.log(2);}
    y.innerHTML = "Show Images";}
    else
    {for (i=0;i<x.length;i++)
        { x[i].style.display = "block";
            y.innerHTML = "Hide Images";
        }} 
    }


function FindLink(){
setTimeout ( function(){
var curent = window.location.href;
curent = curent.split('#')[1];
console.log(curent);

var buttons = document.getElementsByClassName('findbtn');

for (i=0; i<buttons.length;i++)
{
    buttons[i].classList.remove('btnactive')
}
for (i=0; i<buttons.length;i++)
{    var active = buttons[i].getAttribute('href').split('#')[1];
    if (curent === active)
    {   
        console.log(active)
        buttons[i].className += " btnactive";
    }
}}, 100);}

var text1 = document.getElementById("animation1");
var text2 = document.getElementById("animation2");
console.log(text2);
console.log(text2.textContent);
const strtext1 = text1.textContent;
const strtext2 = text2.textContent;
const split1 = strtext1.split(" ");
const split2 = strtext2.split(" ");
console.log(split2);
text1.textContent="";
text2.textContent="";
for (i=0;i<split1.length;i++)
    {text1.innerHTML += "<span2>" + split1[i] + "</span2>" + " ";
}
for (i=0;i<split2.length;i++)
{text2.innerHTML += "<span2>" + split2[i] + "</span2>" + " ";}
console.log(text2.innerHTML);
let word1=0;
let word2=0;
let timer1=setInterval(ShowWord, 333);
let timer2=setInterval(ShowWord2,333);

function ShowWord()
{
    const span1 = text1.querySelectorAll('span2')[word1];
    span1.classList.add('fade');
    word1++;
     
    if (word1 === split1.length) 
    {
        clearInterval(timer1);
        timer1 = null;
        return;
    }
}

function ShowWord2()
{
    const span2 = text2.querySelectorAll('span2')[word2];
    span2.classList.add('changecolor');
    word2++; 
    if (word2 == split2.length) 
    {
        clearInterval(timer2);
        timer2 = null;
        return;
    }
}

var infoblock = ["From high-speed water slides and exhilarating wave pools to tranquil beaches and the remarkable animal habitats that are the hallmark of SeaWorld, Aquatica Orlando delights all ages and interests. This one-of-a-kind waterpark is home to some of the world's most thrilling water rides, featuring 42 slides, rivers and lagoons and 84,000 square feet of sparkling white, sandy beaches.",
                 "Nothing is more relaxing than lying out on the beach. Aquatica invites you to relax under the sun on the beaches of Cutback Cove and Big Surf Shores. Grab a complimentary lounge chair for even more relaxation or upgrade to a wave pool lounger with an attached shade top. You can also enjoy the ultimate relaxation with a cabana rental.",
                 "If you're a kid, Kata's Kookaburra Cove is the coolest place in the park to be. Named for a little bitty bird with a big call that sounds like someone tickled its funny bone, this kooky, quirky cove has a way of making even a grown-up want to jump right in and play. With a beginner's body slide, water spouts and silly spilly rides, kids can laugh it up all day long- and so can you!"]

var k=0;
var info = document.getElementById("changeinfo");
setInterval(function() {
    info.innerHTML = infoblock[k];
    k++;
    if (k>= infoblock.length)
    {
        k = 0;
    }}, 6000);

