// credit.js - 크레딧 롤링 화면

let creditY;
const creditTexts = [
  "기획",
  "임규빈: 애니메이션 주제, 디자인 요소 기획",
  "오세진: 인터랙션, 손 인식 기획",
  "박지환: 스토리, 레이아웃 기획",
  "",
  "디자인",
  "임규빈: 배경, 나무, 공장",
  "오세진: 물건, 손 커서",
  "박지환: 사람, 새",
  "",
  "개발",
  "임규빈: 배경 이동/페이드, 나무 인터랙션",
  "오세진: 손 인식, 물건 잡기, 손 효과",
  "박지환: 캐릭터/새 움직임, 나무 클릭"
];

function drawCredit() {
  background(0, 0, 0, 220);
  fill(255);
  textAlign(CENTER, TOP);
  textFont("Arial");
  textSize(32 * scaleY);
  text("CREDIT", width / 2, creditY - 80 * scaleY);

  textSize(20 * scaleY);
  for (let i = 0; i < creditTexts.length; i++) {
    text(creditTexts[i], width / 2, creditY + i * (30 * scaleY));
  }

  if (creditY + creditTexts.length * 30 * scaleY > 100 * scaleY) {
    creditY -= 1.5 * scaleY;
  }
}
