// character.js - 캐릭터 등장, 걷기, 전환 관련 로직

let standImgs = [], walkImgs = [];
let currentAge = 0;
let characterX, characterY;
let isGiven = false;
let frameToggle = false;

let characterAppearAnim = false;
let characterAppearFrame = 0;
let characterAppearDuration = 32;
let characterAppearDone = false;

function drawCharacter(x, y, isGiven, ageIndex) {
  let w = 100 * scaleX;
  let h = 100 * scaleY;
  if (!isGiven) {
    image(standImgs[ageIndex], x, y, w, h);
  } else {
    if (frameCount % 6 === 0) frameToggle = !frameToggle;
    image(frameToggle ? walkImgs[ageIndex] : standImgs[ageIndex], x, y, w, h);
  }
}

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
  objectX = width - 200 * scaleX;
  objectY = height - 100 * scaleY;
  characterAppearAnim = true;
  characterAppearFrame = 0;
  characterAppearDone = false;

  interactiveTrees = []; // 나무 클릭 초기화 (sence 2, 3용)
}
