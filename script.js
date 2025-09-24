// ============= Tambah CSS Langsung di JS =============
const style = document.createElement("style");
style.textContent = `
* {margin:0; padding:0; box-sizing:border-box;}
body {
  height:100vh; 
  display:flex; 
  justify-content:center; 
  align-items:center; 
  font-family:"Poppins", sans-serif;
  color:#fff;
  overflow:hidden;
  background: radial-gradient(circle at top, #004e92, #000428);
}
canvas {
  position: absolute;
  top:0; left:0;
  width:100%; height:100%;
  z-index:0;
}
.container {
  position:relative;
  z-index:1;
  text-align:center;
  padding:40px 20px;
  background:rgba(255,255,255,0.08);
  border-radius:20px;
  backdrop-filter:blur(12px);
  box-shadow:0 0 40px rgba(0,180,255,0.4);
  animation: fadeIn 1.5s ease-in-out;
  max-width: 800px;
  width: 90%;
}
.logo {
  width:90px;
  height:90px;
  margin-bottom:15px;
  border-radius:50%;
  object-fit:contain;
  box-shadow:0 0 18px rgba(0,180,255,0.7);
  animation: pulse 3s infinite;
}
h1 {
  font-size:2rem;
  margin-bottom:10px;
  background: linear-gradient(90deg,#00c6ff,#0072ff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 0 18px rgba(0,180,255,0.7);
}
h2 {
  font-size:1.2rem;
  margin-bottom:15px;
  color:#cceaff;
}
p {
  color:#e6f7ff;
  margin-bottom:20px;
  font-size:0.95rem;
}
.countdown {
  display:flex;
  justify-content:center;
  gap:12px;
  margin-bottom:20px;
  flex-wrap: wrap;
}
.time-box {
  background:rgba(0,0,40,0.5);
  padding:14px;
  border-radius:12px;
  min-width:70px;
  font-size:1rem;
  box-shadow:0 0 12px rgba(0,180,255,0.6);
}
.time-box span {
  display:block;
  font-size:0.75rem;
  margin-top:4px;
  color:#b3e0ff;
}
.status {
  display:inline-block;
  padding:12px 28px;
  border-radius:40px;
  background: linear-gradient(135deg,#00c6ff,#0072ff);
  font-weight:bold;
  font-size:1rem;
  box-shadow:0 0 25px rgba(0,180,255,0.7);
  animation: pulse 2s infinite;
}
footer {
  margin-top:20px;
  font-size:0.8rem;
  color:#a9cde8;
  text-align:center;
}
@keyframes fadeIn {
  from{opacity:0; transform:scale(0.9);}
  to{opacity:1; transform:scale(1);}
}
@keyframes pulse {
  0%,100% { transform:scale(1);}
  50% { transform:scale(1.05);}
}
@media (max-width: 600px) {
  .container { padding: 25px 15px; }
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1rem; }
  .time-box {
    min-width: 60px;
    padding: 10px;
    font-size: 0.9rem;
  }
  .status {
    font-size: 0.9rem;
    padding: 10px 20px;
  }
  .logo {
    width:70px;
    height:70px;
  }
  footer {
    font-size:0.7rem;
  }
}
a.backBtn {
  position:absolute;
  top:15px; left:15px;
  padding:8px 14px;
  background:rgba(0,0,0,0.5);
  color:#fff;
  border-radius:6px;
  font-size:0.9rem;
  text-decoration:none;
  z-index:2;
}
`;
document.head.appendChild(style);

// ============= Buat Elemen HTML Lewat JS =============
const canvas = document.createElement("canvas");
canvas.id = "stars";
document.body.appendChild(canvas);

const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const backBtn = document.createElement("a");
backBtn.href = "p.html";
backBtn.textContent = "←";
backBtn.className = "backBtn";
document.body.appendChild(backBtn);

const logo = document.createElement("img");
logo.src = "logo1.png";
logo.alt = "Logo Club Wirausaha UNUJA";
logo.className = "logo";
container.appendChild(logo);

const h1 = document.createElement("h1");
h1.textContent = "OPREC CLUB WIRAUSAHA UNUJA";
container.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "Nantikan Pembukaan Resmi";
container.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Open Recruitment dimulai pada:";
container.appendChild(p);

const countdown = document.createElement("div");
countdown.className = "countdown";
countdown.id = "countdown";
container.appendChild(countdown);

["days","hours","minutes","seconds"].forEach((id,i)=>{
  const box = document.createElement("div");
  box.className = "time-box";
  box.id = id;
  box.innerHTML = "00<span>"+["Hari","Jam","Menit","Detik"][i]+"</span>";
  countdown.appendChild(box);
});

const status = document.createElement("div");
status.className = "status";
status.textContent = "🚀 Dibuka 1 Oktober 2025";
container.appendChild(status);

const footer = document.createElement("footer");
footer.innerHTML = "&copy; 2025 Club Wirausaha UNUJA";
container.appendChild(footer);

// ============= Countdown Logic =============
const targetDate = new Date("October 1, 2025 00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const d = Math.floor(distance / (1000*60*60*24));
  const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((distance%(1000*60*60))/(1000*60));
  const s = Math.floor((distance%(1000*60))/1000);

  document.getElementById("days").innerHTML = d + "<span>Hari</span>";
  document.getElementById("hours").innerHTML = h + "<span>Jam</span>";
  document.getElementById("minutes").innerHTML = m + "<span>Menit</span>";
  document.getElementById("seconds").innerHTML = s + "<span>Detik</span>";

  if(distance<0){
    countdown.innerHTML = "<div class='status'>✨ Oprec Sudah Dibuka!</div>";
  }
}
setInterval(updateCountdown,1000);

// ============= Background Partikel Bintang =============
const ctx = canvas.getContext("2d");
let w,h,stars=[];
function init(){
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
  stars=[];
  for(let i=0;i<120;i++){
    stars.push({
      x:Math.random()*w,
      y:Math.random()*h,
      radius:Math.random()*1.5,
      dx:(Math.random()-0.5)*0.5,
      dy:(Math.random()-0.5)*0.5
    });
  }
}
function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle="white";
  stars.forEach(star=>{
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);
    ctx.fill();
    star.x+=star.dx;
    star.y+=star.dy;
    if(star.x<0||star.x>w) star.dx*=-1;
    if(star.y<0||star.y>h) star.dy*=-1;
  });
  requestAnimationFrame(animate);
}
window.addEventListener("resize",init);
init();
animate();
