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
}

/* ===== Video Background ===== */
video.bg-video {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: -2;
  filter: brightness(0.65) blur(2px);
}

/* ===== Glass Container ===== */
.container {
  position:relative;
  z-index:1;
  text-align:center;
  padding:50px 30px;
  background: rgba(255,255,255,0.06);
  border-radius:24px;
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 0 50px rgba(0,180,255,0.4), inset 0 0 30px rgba(255,255,255,0.05);
  animation: fadeIn 1.5s ease-in-out;
  max-width: 850px;
  width: 92%;
}

/* ===== Logo (tanpa bayangan) ===== */
.logo {
  width:100px;
  height:100px;
  margin-bottom:20px;
  border-radius:50%;
  object-fit:contain;
  animation: pulse 3s infinite;
}
.logo::after {
  content:"";
  position:absolute;
  top:-20px; left:50%;
  transform: translateX(-50%);
  width:140px; height:140px;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,200,255,0.35), transparent 70%);
  z-index:-1;
}

/* ===== Headings ===== */
h1 {
  font-size:2.2rem;
  margin-bottom:12px;
  background: linear-gradient(90deg,#00f0ff,#0072ff);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  text-shadow:0 0 18px rgba(0,180,255,0.7);
}
h2 {
  font-size:1.2rem;
  margin-bottom:15px;
  color:#d6f2ff;
}
p {
  color:#cceaff;
  margin-bottom:22px;
  font-size:1rem;
}

/* ===== Countdown ===== */
.countdown {
  display:flex;
  justify-content:center;
  gap:18px;
  margin: 25px 0;
  flex-wrap: wrap;
}
.time-box {
  background:rgba(0,0,60,0.55);
  padding:16px 20px;
  border-radius:16px;
  min-width:80px;
  font-size:1.1rem;
  font-weight:600;
  letter-spacing:1px;
  box-shadow:0 0 18px rgba(0,200,255,0.5);
  border:1px solid rgba(0,200,255,0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.time-box:hover {
  transform: scale(1.1);
  box-shadow:0 0 28px rgba(0,200,255,0.9);
}
.time-box span {
  display:block;
  font-size:0.8rem;
  margin-top:6px;
  color:#b3e0ff;
  font-weight:400;
}

/* ===== Status Button ===== */
.status {
  display:inline-block;
  padding:14px 36px;
  border-radius:50px;
  background: linear-gradient(135deg,#00f0ff,#0072ff);
  font-weight:bold;
  font-size:1.05rem;
  letter-spacing:0.5px;
  box-shadow:0 0 30px rgba(0,200,255,0.8);
  animation: pulse 2.5s infinite;
  transition: all 0.3s ease;
}
.status:hover {
  transform: scale(1.05);
  box-shadow:0 0 45px rgba(0,200,255,1);
}

/* ===== Footer ===== */
footer {
  margin-top:22px;
  font-size:0.8rem;
  color:#a9cde8;
  text-align:center;
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from{opacity:0; transform:scale(0.9);}
  to{opacity:1; transform:scale(1);}
}
@keyframes pulse {
  0%,100% { transform:scale(1);}
  50% { transform:scale(1.05);}
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .container { padding: 28px 18px; }
  h1 { font-size: 1.6rem; }
  h2 { font-size: 1rem; }
  .time-box {
    min-width: 65px;
    padding: 12px;
    font-size: 0.95rem;
  }
  .status {
    font-size: 0.9rem;
    padding: 10px 22px;
  }
  .logo {
    width:75px;
    height:75px;
  }
  footer {
    font-size:0.7rem;
  }
}
`;
document.head.appendChild(style);

// ============= Tambah Video Background =============
const video = document.createElement("video");
video.src = "nadia.mp4";
video.autoplay = true;
video.loop = true;
video.muted = true; // biar autoplay jalan di browser
video.playsInline = true;
video.className = "bg-video";
document.body.appendChild(video);

// ============= Buat Elemen HTML Lewat JS =============
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

const logoWrapper = document.createElement("div");
logoWrapper.style.position = "relative";
container.appendChild(logoWrapper);

const logo = document.createElement("img");
logo.src = "logo1.png";
logo.alt = "Logo Club Wirausaha UNUJA";
logo.className = "logo";
logoWrapper.appendChild(logo);

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
