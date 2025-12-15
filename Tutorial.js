function showTutorialModal(gameName,gameLink,videoSrc,canSkip){
  const modal=document.getElementById("tutorialModal");
  modal.style.display="block";
  document.getElementById("tutorialTitle").innerText="🎮 How to Play "+gameName;
  document.getElementById("tutorialVideo").src=videoSrc;

  const startBtn=document.getElementById("startGame");
  startBtn.onclick=function(){
    modal.style.display="none";
    localStorage.setItem("tutorial_"+gameName,JSON.stringify({firstTime:false}));
    window.location.href=gameLink;
  }

  const skipBtn=document.getElementById("skipTutorial");
  if(canSkip){ 
    skipBtn.style.display="inline-block"; 
    skipBtn.onclick=function(){ modal.style.display="none"; window.location.href=gameLink; } 
  }
  else skipBtn.style.display="none";
}

