// Countdown
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
    document.getElementById("countdown").innerHTML = "<div class='status'>✨ Oprec Sudah Dibuka!</div>";
  }
}
setInterval(updateCountdown,1000);

// Background Partikel Bintang
const canvas = document.getElementById("stars");
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
