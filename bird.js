// bird.js - 새 등장 및 움직임

let birdImgs = [];
let birdX = 0;
let baseY = 0;
let showBird = false;
let frameToggle1 = false;

function drawBird() {
  let birdY = baseY + sin(frameCount * 0.1) * 20 * scaleY;

  image(
    frameToggle1 ? birdImgs[0] : birdImgs[1],
    birdX, birdY,
    60 * scaleX, 60 * scaleY
  );
}
