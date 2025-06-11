// Nature Interaction by 임규빈, 오세진, 박지환
// Fullscreen and scaling modification by Perplexity

// --- 기본 상수 ---
const BASE_WIDTH = 800;
const BASE_HEIGHT = 450;

// --- 전역 변수 ---
let state = "start"; // "start" or "game" or "credit"
let pixelFont;

// --- 동적 스케일링 변수 ---
let scaleX, scaleY;

// --- 크레딧 관련 ---
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
  "박지환: 캐릭터/새 움직임, 나무 클릭",
];

// --- 배경 및 장면 관련 ---
let background_move_n = 0;
let sence = 1;
let fade = 0;
let fadeout_on = false;
let fadeon_on = false;

// --- 이미지 변수 ---
let img_sky, img_sky3, img_sky4, img_sky5;
let img_ground, img_ground2, img_ground5;
let img_cloud1, img_cloud2, img_cloud3, img_cloud4, img_cloud5, img_cloud6;
let cloud_move_falme = 0;
let img_factory1, img_factory2;
let img_smoke1, img_smoke2;
let smoke_move1 = 0, smoke_move2 = 0, smoke_move3 = 0;
let img_tree_1, img_tree_2, img_tree_3, img_tree_4;
let img_noleaf_tree_1, img_noleaf_tree_2, img_noleaf_tree_3;
let img_cut_tree_1;
let axePixel, toyImg, oilImg, phoneImg;
let openHandImg, closedHandImg;

// --- 손 인식 관련 (ml5.js) ---
let handPose;
let video;
let hands = [];
let showInstruction = true;
let isGrabbing = false;

// --- 오브젝트 및 캐릭터 관련 ---
let objectX, objectY;
let objectVisible = true;
let offsetX = 0, offsetY = 0;
const itemDescs = [
  "CAN PLAY WITH",
  "CUT TREE",
  "INDUSTRIAL DEVELOPMENT",
  "RARE MINERAL CONSUMPTION",
];
let standImgs = [], walkImgs = [];
let currentAge = 0;
let characterX, characterY;
let isGiven = false;
let frameToggle = false;

// 캐릭터 등장 애니메이션
let characterAppearAnim = false;
let characterAppearFrame = 0;
let characterAppearDuration = 32;
let characterAppearDone = false;

function preload() {
  pixelFont = loadFont("assets/PressStart2P-Regular.ttf");

  img_sky = loadImage("assets/하늘.png");
  img_sky3 = loadImage("assets/하늘3.png");
  img_sky4 = loadImage("assets/하늘4.png");
  img_sky5 = loadImage("assets/하늘5.png");

  img_factory1 = loadImage("assets/공장1.png");
  img_factory2 = loadImage("assets/공장2.png");

  img_smoke1 = loadImage("assets/연기1.png");
  img_smoke2 = loadImage("assets/연기2.png");

  img_ground = loadImage("assets/땅.png");
  img_ground2 = loadImage("assets/땅2.png");
  img_ground5 = loadImage("assets/땅5.png");

  img_cloud1 = loadImage("assets/구름1.png");
  img_cloud2 = loadImage("assets/구름2.png");
  img_cloud3 = loadImage("assets/구름3.png");
  img_cloud4 = loadImage("assets/구름4.png");
  img_cloud5 = loadImage("assets/구름5.png");
  img_cloud6 = loadImage("assets/구름6.png");

  img_tree_1 = loadImage("assets/나무1.png");
  img_tree_2 = loadImage("assets/나무2.png");
  img_tree_3 = loadImage("assets/나무3.png");
  img_tree_4 = loadImage("assets/나무4.png");

  img_noleaf_tree_1 = loadImage("assets/잎없는나무1.png");
  img_noleaf_tree_2 = loadImage("assets/잎없는나무2.png");
  img_noleaf_tree_3 = loadImage("assets/잎없는나무3.png");

  img_cut_tree_1 = loadImage("assets/잘린나무1.png");

  axePixel = loadImage("assets/axepixel.png");
  toyImg = loadImage("assets/toy.png");
  oilImg = loadImage("assets/oil.png");
  phoneImg = loadImage("assets/cellphone.png");

  openHandImg = loadImage("assets/openHand.png");
  closedHandImg = loadImage("assets/closedHand.png");

  standImgs[0] = loadImage("assets/child_stand.png");
  walkImgs[0] = loadImage("assets/child_walk.png");
  standImgs[1] = loadImage("assets/teen_walk.png");
  walkImgs[1] = loadImage("assets/teen_walk2.png");
  standImgs[2] = loadImage("assets/adult_walk.png");
  walkImgs[2] = loadImage("assets/adult_walk2.png");
  standImgs[3] = loadImage("assets/old_walk.png");
  walkImgs[3] = loadImage("assets/old_walk2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleX = width / BASE_WIDTH;
  scaleY = height / BASE_HEIGHT;
  creditY = height;
  objectX = 1500 * scaleX;
  objectY = 450 * scaleY;
  characterX = 40 * scaleX;
  characterY = 450 * scaleY;

  textFont(pixelFont);
  noSmooth();
  rectMode(CENTER);
  imageMode(CENTER);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose = ml5.handPose(video, { flipHorizontal: true }, () => {
    console.log('Model Loaded!');
  });
  handPose.on("predict", gotHands);


  frameRate(20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = width / BASE_WIDTH;
  scaleY = height / BASE_HEIGHT;
}


function updateScaleFactors() {
  scaleX = width / BASE_WIDTH;
  scaleY = height / BASE_HEIGHT;
}

function mousePressed() {
  if (!fullscreen()) fullscreen(true);
  if (state === "start") {
    state = "game";
    characterAppearAnim = true;
    characterAppearFrame = 0;
    characterAppearDone = false;
  } else {
    isGiven = true;
  }
}

function keyPressed() {
  if (!fullscreen()) fullscreen(true);
  if (state === "start" && (key === ' ' || keyCode === ENTER)) {
    state = "game";
    characterAppearAnim = true;
    characterAppearFrame = 0;
    characterAppearDone = false;
  }
}

function draw() {
  if (state === "start") {
    drawStartScreen();
    return;
  }

  if (state === "credit") {
    drawCredit();
    return;
  }

  background_maker();

  if (!characterAppearDone && characterAppearAnim) {
    drawCharacterAppearAnim();
  } else {
    drawCharacter(characterX, characterY, isGiven, currentAge);
  }

  drawHands();

  if (isGiven) {
    characterX += 5 * scaleX;
    if (characterX >= width / 2 && sence == 5) {
      isGiven = false;
    }
    if (characterX > width + 50 * scaleX) {
      fadeout_on = true;
    }
  }

  if (objectVisible) {
    drawObject(objectX, objectY);
  }

  updateHandState();
  updateObjectPosition();

  if (objectVisible && isGrabbing && isNearCharacter(objectX / scaleX, objectY / scaleY)) {
    objectVisible = false;
    isGiven = true;
  }

  if (
    state === "game" &&
    (sence === 2 || sence === 3) &&
    !fadeout_on && !fadeon_on
  ) {
    if (random(1) < 0.005 && !showBird) {
      birdX = random(100 * scaleX, 700 * scaleX);
      baseY = random(100 * scaleY, 200 * scaleY);
      showBird = true;
    }
    if (showBird) {
      if (frameCount % 6 === 0) frameToggle1 = !frameToggle1;
      drawBird();
    }
  }

  if (fadeout_on) fadeout();
  if (fadeon_on) fadeon();

  if (!fadeon_on && sence == 5 && characterX > width + 50 * scaleX) {
  state = "credit";
  creditY = height;
}

}

function drawStartScreen() {
  background1(0);
  let mainText = "NATURE";
  let subText = "PRESS SPACE TO CONTINUE";
  textAlign(CENTER, CENTER);
  textSize(64 * scaleY);
  stroke(255);
  strokeWeight(12 * scaleX);
  fill(0);
  text(mainText, width / 2, height / 2 - 40 * scaleY);
  noStroke();
  fill(0);
  text(mainText, width / 2, height / 2 - 40 * scaleY);

  if (frameCount % 60 < 30) {
    textSize(24 * scaleY);
    stroke(255);
    strokeWeight(6 * scaleX);
    fill(0);
    text(subText, width / 2, height / 2 + 30 * scaleY);
    noStroke();
    fill(0);
    text(subText, width / 2, height / 2 + 30 * scaleY);
  }
}