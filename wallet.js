function addCoins(amount){ 
  let coins = Number(localStorage.getItem("coins")||0);
  coins+=amount; 
  localStorage.setItem("coins",coins);
  document.getElementById("coinBalance").innerText = coins;
}

function getRank(){
  const days = Math.floor((Date.now()-Number(localStorage.getItem("joinDate")))/(1000*60*60*24));
  if(days>=180) return "👑 Legend";
  if(days>=90) return "🟠 Elite";
  if(days>=30) return "🟣 Pro";
  if(days>=7) return "🔵 Player";
  return "🟢 Rookie";
}

function watchAd(){
  let time=5;
  const status = document.getElementById("adStatus");
  status.innerText="Ad playing... 5s";
  const timer=setInterval(()=>{
    time--;
    status.innerText=`Ad playing... ${time}s`;
    if(time===0){ clearInterval(timer); addCoins(200); status.innerText="✅ Earned 200 coins!"; }
  },1000);
}

