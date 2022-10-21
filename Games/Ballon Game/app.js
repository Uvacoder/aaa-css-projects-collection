var ttime=document.getElementById("totalcount");
var count=0;
ttime.innerHTML = count;

let colors=[
    "LightPink",
    "Orange",
    "peachpuff",
    "chocolate",
    "SlateBlue",
    "Teal",
    "LightGray",
    "Aquamarine"
];


for (let i = 1; i < 16; i++) {
    let ballon=document.getElementById(`ballon-${i}`);
    ballon.style.background=colors[Math.floor(Math.random() * colors.length)];
    
}

var findcolor=colors[Math.floor(Math.random()*colors.length)];
console.log(findcolor);
document.getElementById("color").innerText=findcolor;

function nextcolor() {
    findcolor=colors[Math.floor(Math.random()*colors.length)];
    console.log(findcolor);
    document.getElementById("color").innerText=findcolor;
}


function findbal(balloon) {

    var ballon=document.getElementById(balloon);
    // console.log("redddd",ballon.style.background);

    if (findcolor.toLowerCase() === ballon.style.background) {
        alert("color found");
        count++;
        ttime.innerHTML = count;
        ballon.style.display="none";
    }
}