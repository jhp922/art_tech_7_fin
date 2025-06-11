// --- 배경 전환 및 페이드아웃 등 관련 함수 (background.js) ---

let treeCut = [false, false, false];

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
  image(img_cloud1, (200 * scaleX) + bg_offset + current_cloud_offset, 50 * scaleY, 120 * scaleX, 90 * scaleY);
  image(img_cloud2, (400 * scaleX) + bg_offset + current_cloud_offset, 70 * scaleY, 150 * scaleX, 120 * scaleY);
  image(img_cloud3, (600 * scaleX) + bg_offset + current_cloud_offset, 50 * scaleY, 150 * scaleX, 60 * scaleY);
  image(img_cloud4, (800 * scaleX) + bg_offset + current_cloud_offset, 70 * scaleY, 180 * scaleX, 120 * scaleY);
  image(img_cloud5, (1000 * scaleX) + bg_offset + current_cloud_offset, 50 * scaleY, 180 * scaleX, 120 * scaleY);
  image(img_cloud6, (1200 * scaleX) + bg_offset + current_cloud_offset, 70 * scaleY, 120 * scaleX, 80 * scaleY);
  cloud_move_falme -= 0.2;
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

function background1(bg_offset = 0) {
  push();
  image(img_sky, width / 2 + bg_offset, height / 2, width, height);
  image(img_ground, width / 2 + bg_offset, height / 2, width, height);
  let treeW = 150 * scaleX;
  let treeH = 270 * scaleY;
  image(img_tree_3, (100 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_4, (200 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (300 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_2, (400 * scaleX) + bg_offset, 170 * scaleY, treeW, treeH);
  image(img_tree_3, (500 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_4, (600 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (700 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (100 * scaleX) + bg_offset, 200 * scaleY, treeW, treeH);
  image(img_tree_2, (30 * scaleX) + bg_offset, 230 * scaleY, treeW, treeH);
  image(img_tree_3, (200 * scaleX) + bg_offset, 270 * scaleY, treeW, treeH);
  image(img_tree_4, (80 * scaleX) + bg_offset, 300 * scaleY, treeW, treeH);
  image(img_tree_1, (10 * scaleX) + bg_offset, 330 * scaleY, treeW, treeH);
  image(img_tree_2, (270 * scaleX) + bg_offset, 360 * scaleY, treeW, treeH);
  image(img_tree_3, (150 * scaleX) + bg_offset, 390 * scaleY, treeW, treeH);
  image(img_tree_4, (230 * scaleX) + bg_offset, 410 * scaleY, treeW, treeH);
  image(img_tree_1, (70 * scaleX) + bg_offset, 450 * scaleY, treeW, treeH);
  image(img_tree_1, (400 * scaleX) + bg_offset, 450 * scaleY, treeW, treeH);
  image(img_tree_4, (500 * scaleX) + bg_offset, 450 * scaleY, treeW, treeH);
  image(img_tree_1, (600 * scaleX) + bg_offset, 450 * scaleY, treeW, treeH);
  image(img_tree_2, (700 * scaleX) + bg_offset, 450 * scaleY, treeW, treeH);
  pop();
}

function background2(bg_offset = 0) {
  push();
  image(img_sky, width / 2 + bg_offset, height / 2, width, height);
  image(img_ground2, width / 2 + bg_offset, height / 2, width, height);
  let treeW = 150 * scaleX;
  let treeH = 270 * scaleY;
  image(img_tree_1, 0, 450 * scaleY, treeW, treeH);
  image(img_tree_1, 100 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_1, 200 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_4, 300 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_1, 400 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_4, 500 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_1, 600 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_2, 700 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_2, 800 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_1, (0 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_3, (100 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_4, (200 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (300 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_2, (400 * scaleX) + bg_offset, 170 * scaleY, treeW, treeH);
  image(img_tree_3, (500 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_4, (600 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (700 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  image(img_tree_1, (800 * scaleX) + bg_offset, 190 * scaleY, treeW, treeH);
  pop();
}

function background3() {
  push();
  image(img_sky3, width / 2, height / 2, width, height);
  image(img_ground2, width / 2, height / 2, width, height);
  image(img_factory1, 130 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);
  image(img_factory1, 600 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);

  let treeW = 150 * scaleX, treeH = 270 * scaleY;
  let cutTreeW = 120 * scaleX, cutTreeH = 120 * scaleY;

  image(img_tree_1, 0, 190 * scaleY, treeW, treeH);
  image(img_cut_tree_1, 100 * scaleX, 300 * scaleY, cutTreeW, cutTreeH);
  image(img_cut_tree_1, 200 * scaleX, 280 * scaleY, cutTreeW, cutTreeH);

  // ✂️ 클릭으로 사라지는 잎없는 나무 3그루
  if (!treeCut[0]) image(img_noleaf_tree_1, 300 * scaleX, 190 * scaleY, treeW, treeH);
  if (!treeCut[1]) image(img_noleaf_tree_3, 500 * scaleX, 190 * scaleY, treeW, treeH);
  if (!treeCut[2]) image(img_noleaf_tree_2, 600 * scaleX, 190 * scaleY, treeW, treeH);

  image(img_tree_2, 400 * scaleX, 170 * scaleY, treeW, treeH);
  image(img_tree_1, 800 * scaleX, 190 * scaleY, treeW, treeH);

  image(img_noleaf_tree_3, 0, 450 * scaleY, treeW, treeH);
  image(img_tree_1, 100 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_noleaf_tree_1, 300 * scaleX, 430 * scaleY, treeW, treeH);
  image(img_noleaf_tree_2, 400 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_tree_4, 500 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_noleaf_tree_3, 600 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_cut_tree_1, 700 * scaleX, 430 * scaleY, cutTreeW, cutTreeH);
  image(img_tree_2, 800 * scaleX, 450 * scaleY, treeW, treeH);
  pop();
}


function background4() {
  push();
  image(img_sky4, width / 2, height / 2, width, height);
  image(img_ground2, width / 2, height / 2, width, height);
  image(img_factory1, 130 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);
  image(img_factory1, 600 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);
  making_smoke(370 * scaleX, 110 * scaleY);
  image(img_factory2, 370 * scaleX, 183 * scaleY, 150 * scaleX, 150 * scaleY);
  let treeW = 150 * scaleX, treeH = 270 * scaleY;
  let cutTreeW = 120 * scaleX, cutTreeH = 120 * scaleY;
  image(img_noleaf_tree_3, 0, 190 * scaleY, treeW, treeH);
  image(img_cut_tree_1, 100 * scaleX, 300 * scaleY, cutTreeW, cutTreeH);
  image(img_cut_tree_1, 200 * scaleX, 280 * scaleY, cutTreeW, cutTreeH);
  image(img_noleaf_tree_1, 300 * scaleX, 190 * scaleY, treeW, treeH);
  image(img_noleaf_tree_3, 500 * scaleX, 190 * scaleY, treeW, treeH);
  image(img_noleaf_tree_2, 600 * scaleX, 190 * scaleY, treeW, treeH);
  image(img_noleaf_tree_1, 800 * scaleX, 190 * scaleY, treeW, treeH);
  image(img_noleaf_tree_3, 0, 450 * scaleY, treeW, treeH);
  image(img_noleaf_tree_3, 100 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_noleaf_tree_1, 300 * scaleX, 430 * scaleY, treeW, treeH);
  image(img_noleaf_tree_2, 400 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_noleaf_tree_3, 600 * scaleX, 450 * scaleY, treeW, treeH);
  image(img_cut_tree_1, 700 * scaleX, 430 * scaleY, cutTreeW, cutTreeH);
  image(img_noleaf_tree_2, 800 * scaleX, 450 * scaleY, treeW, treeH);
  pop();
}

function background5() {
  push();
  image(img_sky5, width / 2, height / 2, width, height);
  image(img_ground5, width / 2, height / 2, width, height);
  image(img_factory1, 130 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);
  image(img_factory1, 600 * scaleX, 204 * scaleY, 200 * scaleX, 200 * scaleY);
  making_smoke(370 * scaleX, 110 * scaleY);
  image(img_factory2, 370 * scaleX, 183 * scaleY, 150 * scaleX, 150 * scaleY);
  let cutTreeSize = 100 * ((scaleX + scaleY) / 2);
  image(img_cut_tree_1, 200 * scaleX, 400 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 400 * scaleX, 280 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 500 * scaleX, 400 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 700 * scaleX, 280 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 600 * scaleX, 400 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 500 * scaleX, 280 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 600 * scaleX, 280 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 700 * scaleX, 400 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 550 * scaleX, 340 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 650 * scaleX, 340 * scaleY, cutTreeSize, cutTreeSize);
  image(img_cut_tree_1, 750 * scaleX, 340 * scaleY, cutTreeSize, cutTreeSize);
  pop();
}

function making_smoke(x_position, y_position) {
  push();
  let size = 60 * ((scaleX + scaleY) / 2);
  image(img_smoke1, x_position - smoke_move1 * scaleX, y_position - smoke_move1 * scaleY, size, size);
  smoke_move1 += 0.1;
  if (smoke_move1 >= 120) smoke_move1 = -6;
  image(img_smoke2, x_position - (40 * scaleX) - smoke_move2 * scaleX, y_position - (40 * scaleY) - smoke_move2 * scaleY, size, size);
  smoke_move2 += 0.1;
  if (smoke_move2 >= 80) smoke_move2 = -46;
  image(img_smoke1, x_position - (80 * scaleX) - smoke_move3 * scaleX, y_position - (80 * scaleY) - smoke_move3 * scaleY, size, size);
  smoke_move3 += 0.1;
  if (smoke_move3 >= 50) smoke_move3 = -86;
  pop();
}

function treeClicked() {
  if (sence !== 3) return;

  if (!treeCut[0] &&
      mouseX > 300 * scaleX && mouseX < 450 * scaleX &&
      mouseY > 190 * scaleY && mouseY < 460 * scaleY) {
    treeCut[0] = true;
  }

  if (!treeCut[1] &&
      mouseX > 500 * scaleX && mouseX < 650 * scaleX &&
      mouseY > 190 * scaleY && mouseY < 460 * scaleY) {
    treeCut[1] = true;
  }

  if (!treeCut[2] &&
      mouseX > 600 * scaleX && mouseX < 750 * scaleX &&
      mouseY > 190 * scaleY && mouseY < 460 * scaleY) {
    treeCut[2] = true;
  }
}