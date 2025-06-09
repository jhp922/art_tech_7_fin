// sketch.js - 메인 진입점

// === 기본 상수 ===
const BASE_WIDTH = 800;
const BASE_HEIGHT = 450;

// === 전역 변수 ===
let scaleX, scaleY;
let state = "start";

// === 기본 구조 함수 ===
function preload() {
  preloadAssets(); // assets.js에서 정의
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleX = width / BASE_WIDTH;
  scaleY = height / BASE_HEIGHT;

  setupGame(); // main.js 또는 init.js 등에서 정의
}

function draw() {
  drawMain(); // main.js에서 정의
}

function keyPressed() {
  handleKeyPress(); // input.js에서 정의
}

function mousePressed() {
  handleMousePress(); // input.js에서 정의
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = width / BASE_WIDTH;
  scaleY = height / BASE_HEIGHT;
}
