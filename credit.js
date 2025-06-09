// credit.js - 크레딧 롤링 화면

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
