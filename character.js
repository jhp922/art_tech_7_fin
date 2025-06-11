// --- 캐릭터 등장 애니메이션 및 출력 (character.js) ---

function drawCharacterAppearAnim() {
  let img = standImgs[currentAge];
  let x = characterX;
  let y = characterY;
  let w = 100 * scaleX;
  let h = 100 * scaleY;
  let t = characterAppearFrame / characterAppearDuration;
  let maxPixel = 18 * scaleX;
  let minPixel = 1;
  let pixelSize = floor(lerp(maxPixel, minPixel, t));
  pixelSize = max(pixelSize, 1);
  let pg = createGraphics(round(w), round(h));
  pg.noSmooth();
  pg.imageMode(CENTER);
  pg.clear();
  pg.image(img, w / 2, h / 2, w, h);

  noSmooth();
  for (let py = 0; py < h; py += pixelSize) {
    for (let px = 0; px < w; px += pixelSize) {
      let c = pg.get(px, py);
      fill(c);
      noStroke();
      rect(x - w / 2 + px, y - h / 2 + py, pixelSize, pixelSize);
    }
  }
  pg.remove();

  characterAppearFrame++;
  if (characterAppearFrame >= characterAppearDuration) {
    characterAppearDone = true;
  }
}

function drawCharacter(x, y, isGiven, ageIndex) {
  let w = 100 * scaleX;
  let h = 100 * scaleY;

  push();
  noSmooth();
  if (!isGiven) {
    image(standImgs[ageIndex], x, y, w, h);
  } else {
    if (frameCount % 6 === 0) frameToggle = !frameToggle;
    image(frameToggle ? walkImgs[ageIndex] : standImgs[ageIndex], x, y, w, h);
  }
  pop();
}


function nextCharacter() {
  sence++;
  switch (sence) {
    case 1: currentAge = 0; break;
    case 2:
    case 3: currentAge = 1; break;
    case 4: currentAge = 2; break;
    case 5: currentAge = 3; break;
  }
  characterX = 40 * scaleX;
  isGiven = false;
  objectVisible = true;
  objectX = width - 200 * scaleX; // 화면 오른쪽 밖에서 시작
  objectY = height - 100 * scaleY;
  characterAppearAnim = true;
  characterAppearFrame = 0;
  characterAppearDone = false;
}