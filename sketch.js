function draw() {
  if (state === "start") {
    drawStartScreen();
    return;
  }

  if (state === "credit") {
    drawCredit();
    return;
  }

  // === 게임 본문 ===
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

  // === 🐦 새 등장 조건 처리 ===
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

  // === 페이드 효과 ===
  if (fadeout_on) fadeout();
  if (fadeon_on) fadeon();

  if (!fadeon_on && sence == 5 && characterX == 750 * scaleX) {
    state = "credit";
    creditY = height;
  }
}
