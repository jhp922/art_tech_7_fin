// object.js - 물건 위치, 상태, 충돌 관련 로직

const itemDescs = [
  "CAN PLAY WITH",
  "CUT TREE",
  "INDUSTRIAL DEVELOPMENT",
  "RARE MINERAL CONSUMPTION"
];

function drawObject(x, y) {
  push();
  let size1 = 100 * ((scaleX + scaleY) / 2);
  let size2 = 60 * ((scaleX + scaleY) / 2);

  if (sence === 1) {
    image(toyImg, x, y, size1, size1);
  } else if (sence === 2) {
    image(axePixel, x, y, size2, size2);
  } else if (sence === 3) {
    image(oilImg, x, y, size2, size2);
  } else if (sence === 4) {
    image(phoneImg, x, y, size2, size2);
  }
  pop();
}

function isNearObject(x, y) {
  let distanceThreshold = 50 * ((scaleX + scaleY) / 2);
  return dist(x, y, objectX, objectY) < distanceThreshold;
}

function isNearCharacter(x, y) {
  let distanceThreshold = 50 * ((scaleX + scaleY) / 2);
  return dist(x, y, characterX, characterY) < distanceThreshold;
}
