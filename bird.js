// --- 새 애니메이션 관련 (bird.js) ---

function drawBird() {
  const birdFrame = frameToggle1 ? birdImgs[0] : birdImgs[1];
  const size = 80 * ((scaleX + scaleY) / 2);
  const floatOffset = sin(frameCount * 0.2) * 10 * scaleY;
  image(birdFrame, birdX, baseY + floatOffset, size, size);

  if (frameCount % 2 === 0) birdX += 3 * scaleX;
  if (birdX > width + 50 * scaleX) showBird = false;
}