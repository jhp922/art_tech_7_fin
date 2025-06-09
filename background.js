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

function background1(){
  push();
  fill(150,200,255);
  image(img_sky,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_ground,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,400 * scaleX + background_move_n * scaleX,170 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,500 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,600 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,700 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,100 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,200 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);

  image(img_tree_1,100 * scaleX + background_move_n * scaleX,200 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,30 * scaleX + background_move_n * scaleX,230 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,200 * scaleX + background_move_n * scaleX,270 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,80 * scaleX + background_move_n * scaleX,300 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,10 * scaleX + background_move_n * scaleX,330 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,270 * scaleX + background_move_n * scaleX,360 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,150 * scaleX + background_move_n * scaleX,390 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,230 * scaleX + background_move_n * scaleX,410 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,70 * scaleX + background_move_n * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);

  image(img_tree_1,400 * scaleX + background_move_n * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,500 * scaleX + background_move_n * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,600 * scaleX + background_move_n * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,700 * scaleX + background_move_n * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  pop();
}

function background2(){
  push();
  image(img_sky,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_ground2,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);

  image(img_tree_1,0 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,100 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,200 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,300 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,400 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,500 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,600 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,700 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,800 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);

  image(img_tree_1,0 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_2,400 * scaleX + background_move_n * scaleX,170 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,500 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,600 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,700 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_3,100 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,200 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,800 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);

  pop();
}

function background3(){
  push();
  image(img_sky3,400 * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_ground3,400 * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);

  image(img_factory1,130 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);
  image(img_factory1,600 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);

  image(img_tree_1,0 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_cut_tree_1,100 * scaleX + background_move_n * scaleX,300 * scaleY,120 * scaleX,120 * scaleY);
  image(img_cut_tree_1,200 * scaleX + background_move_n * scaleX,280 * scaleY,120 * scaleX,120 * scaleY);  
  image(img_tree_2,400 * scaleX + background_move_n * scaleX,170 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_3,500 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_2,600 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,800 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);

  image(img_noleaf_tree_3,0 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_1,100 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_1,300 * scaleX,430 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_2,400 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_tree_4,500 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_3,600 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_cut_tree_1,700 * scaleX + background_move_n * scaleX,430 * scaleY,120 * scaleX,120 * scaleY);  
  image(img_tree_2,800 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);

  pop();
}

function background4(){
  push();
  image(img_sky4,400 * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_ground4,400 * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);

  image(img_factory1,130 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);
  image(img_factory1,600 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);
  making_smoke(370 * scaleX,110 * scaleY);
  image(img_factory2,370 * scaleX,183 * scaleY,150 * scaleX,150 * scaleY);

  image(img_noleaf_tree_3,0 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_cut_tree_1,100 * scaleX + background_move_n * scaleX,300 * scaleY,120 * scaleX,120 * scaleY);
  image(img_cut_tree_1,200 * scaleX + background_move_n * scaleX,280 * scaleY,120 * scaleX,120 * scaleY);  
  image(img_noleaf_tree_3,500 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_2,600 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_1,300 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_1,800 * scaleX + background_move_n * scaleX,190 * scaleY,150 * scaleX,270 * scaleY);

  image(img_noleaf_tree_3,0 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_3,100 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_1,300 * scaleX,430 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_2,400 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_noleaf_tree_3,600 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);
  image(img_cut_tree_1,700 * scaleX + background_move_n * scaleX,430 * scaleY,120 * scaleX,120 * scaleY);  
  image(img_noleaf_tree_2,800 * scaleX,450 * scaleY,150 * scaleX,270 * scaleY);

  pop();
}

function making_smoke(x_position,y_position){
  push();
  image(img_smoke1 ,x_position - smoke_move1 * scaleX, y_position - smoke_move1 * scaleY, 60 * scaleX, 60 * scaleY);
  smoke_move1 += 0.1 * scaleX;
  if(smoke_move1 >= 120 * scaleX){
    smoke_move1 = -6 * scaleX;
  }
  image(img_smoke2 ,x_position - 40 * scaleX - smoke_move2 * scaleX, y_position - 40 * scaleY - smoke_move2 * scaleY, 60 * scaleX, 60 * scaleY);
  smoke_move2 += 0.1 * scaleX;
  if(smoke_move2 >= 80 * scaleX){
    smoke_move2 = -46 * scaleX;
  }
  image(img_smoke1 ,x_position - 80 * scaleX - smoke_move3 * scaleX, y_position - 80 * scaleY - smoke_move3 * scaleY, 60 * scaleX, 60 * scaleY);
  smoke_move3 += 0.1 * scaleX;
  if(smoke_move3 >= 50 * scaleX){
    smoke_move3 = -86 * scaleX;
  }
  pop();
}

function background5(){
  push();
  fill(0,0,255);
  image(img_sky5,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_ground5,400 * scaleX + background_move_n * scaleX,225 * scaleY,800 * scaleX,450 * scaleY);
  image(img_factory1,130 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);
  image(img_factory1,600 * scaleX,204 * scaleY,200 * scaleX,200 * scaleY);
  making_smoke(365 * scaleX,98 * scaleY);
  image(img_factory2,370 * scaleX,183 * scaleY,150 * scaleX,150 * scaleY);

  image(img_cut_tree_1,200 * scaleX + background_move_n * scaleX,400 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,400 * scaleX + background_move_n * scaleX,280 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,500 * scaleX + background_move_n * scaleX,400 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,700 * scaleX + background_move_n * scaleX,280 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,600 * scaleX + background_move_n * scaleX,400 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,500 * scaleX + background_move_n * scaleX,280 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,600 * scaleX + background_move_n * scaleX,280 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,700 * scaleX + background_move_n * scaleX,400 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,550 * scaleX + background_move_n * scaleX,340 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,650 * scaleX + background_move_n * scaleX,340 * scaleY,100 * scaleX,100 * scaleY);
  image(img_cut_tree_1,750 * scaleX + background_move_n * scaleX,340 * scaleY,100 * scaleX,100 * scaleY);
  pop();
}

// background1 ~ background5 함수는 원본 구조에 따라 유지되며 각 장면에 맞는
// 나무, 공장, 땅, 하늘 등의 이미지 배치 포함
