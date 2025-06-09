// background.js - 배경, 구름, 연기, 페이드 효과 관리

let background_move_n = 0;
let fade = 0;
let fadeout_on = false;
let fadeon_on = false;
let cloud_move_falme = 0;
let smoke_move1 = 0, smoke_move2 = 0, smoke_move3 = 0;

function background_maker() {
  let bg_offset = background_move_n * scaleX;
  switch (sence) {
    case 1:
      background1(bg_offset);
      cloud_maker(bg_offset);
      break;
    case 2:
      background2(bg_offset);
      cloud_maker(bg_offset);
      break;
    case 3:
      background3();
      cloud_maker(0);
      break;
    case 4:
      background4();
      break;
    case 5:
      background5();
      break;
  }
}

function cloud_maker(bg_offset = 0) {
  if (background_move_n * scaleX < -width) return;
  let current_cloud_offset = cloud_move_falme * scaleX;
  image(img_cloud1, 200 * scaleX + bg_offset + current_cloud_offset, 50 * scaleY, 120 * scaleX, 90 * scaleY);
  image(img_cloud2, 400 * scaleX + bg_offset + current_cloud_offset, 70 * scaleY, 150 * scaleX, 120 * scaleY);
  image(img_cloud3, 600 * scaleX + bg_offset + current_cloud_offset, 50 * scaleY, 150 * scaleX, 60 * scaleY);
  image(img_cloud4, 800 * scaleX + bg_offset + current_cloud_offset, 70 * scaleY, 180 * scaleX, 120 * scaleY);
  image(img_cloud5, 1000 * scaleX + bg_offset + current_cloud_offset, 50 * scaleY, 180 * scaleX, 120 * scaleY);
  image(img_cloud6, 1200 * scaleX + bg_offset + current_cloud_offset, 70 * scaleY, 120 * scaleX, 80 * scaleY);
  cloud_move_falme -= 0.2;
}

function making_smoke(x_position, y_position) {
  push();
  let size = 60 * ((scaleX + scaleY) / 2);
  image(img_smoke1, x_position - smoke_move1 * scaleX, y_position - smoke_move1 * scaleY, size, size);
  smoke_move1 += 0.1;
  if (smoke_move1 >= 120) smoke_move1 = -6;
  image(img_smoke2, x_position - 40 * scaleX - smoke_move2 * scaleX, y_position - 40 * scaleY - smoke_move2 * scaleY, size, size);
  smoke_move2 += 0.1;
  if (smoke_move2 >= 80) smoke_move2 = -46;
  image(img_smoke1, x_position - 80 * scaleX - smoke_move3 * scaleX, y_position - 80 * scaleY - smoke_move3 * scaleY, size, size);
  smoke_move3 += 0.1;
  if (smoke_move3 >= 50) smoke_move3 = -86;
  pop();
}

function fadeout() {
  push();
  fade += 4;
  fill(0, 0, 0, min(fade, 255));
  noStroke();
  rect(width / 2, height / 2, width, height);
  if (fade >= 255) {
    fade = 255;
    fadeout_on = false;
    fadeon_on = true;
  }
  pop();
}

function fadeon() {
  push();
  fade -= 4;
  fill(0, 0, 0, max(fade, 0));
  noStroke();
  rect(width / 2, height / 2, width, height);
  if (fade <= 0) {
    fade = 0;
    fadeon_on = false;
  }
  pop();
}

// background1 ~ background5 함수는 원본 구조에 따라 유지되며 각 장면에 맞는
// 나무, 공장, 땅, 하늘 등의 이미지 배치 포함
