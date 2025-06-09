// hand.js - 손 인식 및 물건 잡기 관련 로직

function gotHands(results) {
  hands = results;
}

function getMappedHandPoint(p) {
  return {
    x: map(p.x, 0, video.width, width, 0),
    y: map(p.y, 0, video.height, 0, height),
  };
}

function updateHandState() {
  for (let hand of hands) {
    let thumbTip = hand.keypoints.find((k) => k.name === "thumb_tip");
    let indexTip = hand.keypoints.find((k) => k.name === "index_finger_tip");

    if (thumbTip && indexTip) {
      let mappedThumb = getMappedHandPoint(thumbTip);
      let mappedIndex = getMappedHandPoint(indexTip);
      let d = dist(mappedThumb.x, mappedThumb.y, mappedIndex.x, mappedIndex.y);
      let grabThreshold = 40 * ((scaleX + scaleY) / 2);

      if (d < grabThreshold) {
        if (!isGrabbing && objectVisible && isNearObject(mappedIndex.x, mappedIndex.y)) {
          isGrabbing = true;
          offsetX = objectX - mappedIndex.x;
          offsetY = objectY - mappedIndex.y;
        }
      } else {
        isGrabbing = false;
      }
    }
  }
}

function updateObjectPosition() {
  if (!isGrabbing || !objectVisible) return;

  if (hands.length > 0) {
    let indexTip = hands[0].keypoints.find((k) => k.name === "index_finger_tip");
    if (indexTip) {
      let mappedIndex = getMappedHandPoint(indexTip);
      objectX = mappedIndex.x + offsetX;
      objectY = mappedIndex.y + offsetY;
    }
  }
}

function drawHands() {
  for (let hand of hands) {
    let indexTip = hand.keypoints.find((k) => k.name === "index_finger_tip");
    if (indexTip) {
      let mappedTip = getMappedHandPoint(indexTip);
      let handSize = 60 * ((scaleX + scaleY) / 2);
      image(isGrabbing ? closedHandImg : openHandImg, mappedTip.x, mappedTip.y, handSize, handSize);
    }
  }
}
