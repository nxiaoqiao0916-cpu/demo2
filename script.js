function goTo(page){ window.location.href = page; }

function finishGame(){
  const questions = document.querySelectorAll(".question");
  let totalScore=0, subjectScores={}, subjectTotals={};

  questions.forEach(q=>{
    const subject=q.dataset.subject;
    const score=parseInt(q.dataset.score);
    const selected=q.querySelector("input:checked");
    if(!subjectTotals[subject]){ subjectTotals[subject]=0; subjectScores[subject]=0; }
    subjectTotals[subject]+=score;
    if(selected && selected.value==="1"){ subjectScores[subject]+=score; totalScore+=score; }
  });

  let weakest="", lowest=100;
  for(let s in subjectScores){
    let p = (subjectScores[s]/subjectTotals[s])*100;
    if(p<lowest){ lowest=p; weakest=s; }
  }

  let stars="⭐"; if(totalScore>=20) stars="⭐⭐"; if(totalScore>=30) stars="⭐⭐⭐";
  let msg="💪 没关系，我们一起变强！";
  if(totalScore>=20) msg="😊 做得不错，继续努力！";
  if(totalScore>=30) msg="🎉 太棒了！你是学习小英雄！";

  document.getElementById("result").innerHTML=`
    <h2>🏁 关卡完成</h2>
    <p>总分：${totalScore}</p>
    <p>星星：${stars}</p>
    <p>${msg}</p>
    <p>📌 建议加强：<strong>${weakest}</strong></p>
    <button onclick="goTo('index.html')">回到地图</button>
  `;
}
for(let i=0;i<100;i++){
  let star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random()*100 + 'vh';
  star.style.left = Math.random()*100 + 'vw';
  star.style.width = star.style.height = (Math.random()*3+1) + 'px';
  document.body.appendChild(star);
}
