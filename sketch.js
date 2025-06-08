// 전체 수정된 코드 (캐릭터 등장 문제 해결)

let state = "start"; // "start" or "game" or "credit"

let pixelFont;

// 크레딧 관련
let creditY = 500;
let creditTexts = [
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

// === 비율 스케일 관련 ===
const BASE_WIDTH = 800;
const BASE_HEIGHT = 450;
let scaleX = 1;
let scaleY = 1;

// 캐릭터 위치
let characterX = 0;
let characterY = 0;

let background_move_n = 0;
let background_move = false;

let sence = 1;

// 구름 관련 변수
let img_cloud1,img_cloud2,img_cloud3,img_cloud4,img_cloud5,img_cloud6;
let cloud_move_falme = 0;

// 페이드 아웃 관련 변수
let fade = 0;
let fadeout_on = false;
let fadeon_on = false;

// 하늘 이미지
let img_sky;
let img_sky3;
let img_sky4;
let img_sky5;

// 공장 이미지
let img_factory1;
let img_factory2;

//연기 관련 이미지;
let img_smoke1;
let img_smoke2;
let smoke_move1 = 0;
let smoke_move2 = 0;
let smoke_move3 = 0;

let img_ground;
let img_ground2;
let img_ground5;

let img_tree_1;
let img_tree_2;
let img_tree_3;
let img_tree_4;

let img_noleaf_tree_1;
let img_noleaf_tree_2;
let img_noleaf_tree_3;

let img_cut_tree_1;

let handPose;
let video;
let hands = [];

let objectX = 0, objectY = 0;
let objectVisible = true;
let isGrabbing = false;
let offsetX = 0, offsetY = 0;

let openHandImg, closedHandImg;
let standImgs = [], walkImgs = [];

let currentAge = 0;
let isGiven = false;
let frameToggle = false;

// 캐릭터 등장 애니메이션 관련 변수
let characterAppearAnim = false;
let characterAppearFrame = 0;
let characterAppearDuration = 32; // 32프레임(약 1.5초)
let characterAppearDone = false;

// 새 관련 변수
let birdImgs = [];
let birdX = 0;
let baseY = 0;
let showBird = false;
let frameToggle1 = false;

function preload() {
  pixelFont = loadFont('PressStart2P-Regular.ttf');

  img_sky = loadImage('하늘.png');
  img_sky3 = loadImage('하늘3.png');
  img_sky4 = loadImage('하늘4.png');
  img_sky5 = loadImage('하늘5.png');

  img_factory1 = loadImage('공장1.png');
  img_factory2 = loadImage('공장2.png');

  img_smoke1 = loadImage('연기1.png');
  img_smoke2 = loadImage('연기2.png');

  img_ground = loadImage('땅.png');
  img_ground2 = loadImage('땅2.png');
  img_ground5 = loadImage('땅5.png');

  img_cloud1 = loadImage('구름1.png');
  img_cloud2 = loadImage('구름2.png');
  img_cloud3 = loadImage('구름3.png');
  img_cloud4 = loadImage('구름4.png');
  img_cloud5 = loadImage('구름5.png');
  img_cloud6 = loadImage('구름6.png');

  img_tree_1 = loadImage('나무1.png');
  img_tree_2 = loadImage('나무2.png');
  img_tree_3 = loadImage('나무3.png');
  img_tree_4 = loadImage('나무4.png');

  img_noleaf_tree_1 = loadImage('잎없는나무1.png');
  img_noleaf_tree_2 = loadImage('잎없는나무2.png');
  img_noleaf_tree_3 = loadImage('잎없는나무3.png');

  img_cut_tree_1 = loadImage('잘린나무1.png');

  handPose = ml5.handPose();
  openHandImg = loadImage('openHand.png');
  closedHandImg = loadImage('closedHand.png');

  standImgs[0] = loadImage('child_stand.png');
  walkImgs[0]  = loadImage('child_walk.png');
  standImgs[1] = loadImage('teen_walk.png');
  walkImgs[1]  = loadImage('teen_walk2.png');
  standImgs[2] = loadImage('adult_walk.png');
  walkImgs[2] = loadImage('adult_walk2.png');
  standImgs[3] = loadImage('old_walk.png');
  walkImgs[3] = loadImage('old_walk2.png');

  birdImgs[0] = loadImage('bird1.png');
  birdImgs[1] = loadImage('bird2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateScaleFactors();
  textFont(pixelFont);
  noSmooth();
  background(220);
  rectMode(CENTER);
  imageMode(CENTER);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);
  frameRate(20);

  characterX = 400 * scaleX;
  characterY = 300 * scaleY;

  objectX = 300 * scaleX;
  objectY = 400 * scaleY;

  characterAppearAnim = false;
  characterAppearFrame = 0;
  characterAppearDone = false;
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
    if(characterX >= width / 2 && sence == 5){
      isGiven = false;
    }
    if (characterX > width + 50 * scaleX) {
      fadeout_on = true;
    }
  }

  if (objectVisible) {
    drawRecyclingBox(objectX, objectY);
  }

  updateHandState();
  updateObjectPosition();

  if (objectVisible && isGrabbing && isNearCharacter(objectX, objectY)) {
    objectVisible = false;
    isGiven = true;
  }

  if(fadeout_on){
    fadeout();
  }

  if(fadeon_on){
    fadeon();
  }

  if (!fadeon_on && sence == 5 && characterX == 750 * scaleX) {
    state = "credit";
    creditY = height;
  }

  if (state === "game" && (sence === 2 || sence === 3)) {
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
}
