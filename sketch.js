// sketch.js - 메인 진입점 (전역 변수 + preload/setup 포함 + draw 포함)

const BASE_WIDTH = 800;
const BASE_HEIGHT = 450;
let scaleX = 1;
let scaleY = 1;

let state = "start";
let sence = 1;
let fade = 0;
let fadeout_on = false;
let fadeon_on = false;

let pixelFont;

// 크레딧 관련
let creditY = 500;
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

// 손 인식
let handPose;
let video;
let hands = [];
let isGrabbing = false;
let offsetX = 0, offsetY = 0;

// 캐릭터
let characterX = 0;
let characterY = 0;
let currentAge = 0;
let isGiven = false;
let frameToggle = false;
let characterAppearAnim = false;
let characterAppearFrame = 0;
let characterAppearDuration = 32;
let characterAppearDone = false;

// 물건
let objectX = 0, objectY = 0;
let objectVisible = true;

// 새
let birdImgs = [];
let birdX = 0;
let baseY = 0;
let showBird = false;
let frameToggle1 = false;

function preload() {
  pixelFont = loadFont("assets/PressStart2P-Regular.ttf");

  birdImgs[0] = loadImage("assets/bird1.png");
  birdImgs[1] = loadImage("assets/bird2.png");

  openHandImg = loadImage("assets/openHand.png");
  closedHandImg = loadImage("assets/closedHand.png");

  standImgs = [
    loadImage("assets/child_stand.png"),
    loadImage("assets/teen_walk.png"),
    loadImage("assets/adult_walk.png"),
    loadImage("assets/old_walk.png")
  ];

  walkImgs = [
    loadImage("assets/child_walk.png"),
    loadImage("assets/teen_walk2.png"),
    loadImage("assets/adult_walk2.png"),
    loadImage("assets/old_walk2.png")
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateScaleFactors();
  textFont(pixelFont);
  noSmooth();
  rectMode(CENTER);
  imageMode(CENTER);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handPose = ml5.handPose(video, { flipHorizontal: true }, () => {
    handPose.detectStart(video, gotHands);
  });

  frameRate(20);

  characterX = 627 * scaleX;
  characterY = 313 * scaleY;
  objectX = 300 * scaleX;
  objectY = 400 * scaleY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateScaleFactors();

  if (currentAge === 0) {
    characterX = 627 * scaleX;
    characterY = 313 * scaleY;
  } else {
    characterX = 40 * scaleX;
    characterY = 300 * scaleY;
  }
  objectX = 300 * scaleX;
  objectY = 400 * scaleY;
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
    drawRecyclingBox(objectX, objectY);
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

  if (!fadeon_on && sence == 5 && characterX == 750 * scaleX) {
    state = "credit";
    creditY = height;
  }
}
