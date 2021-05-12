function TColorButtons(newPos, index) {
  let pos = { ...newPos };
  let deltaPos = new TPosition(120, 120);
  let startDrag = false;
  let initPos = pos;
  let isSnapped = false;
  let time = 100;
  let a;

  let snapOnce = true;

  const radius = 15;
  const spi = MastermindSheet.ColorPicker;
  const sp = new TSprite(imgSheet, spi, pos, index);

  this.draw = function () {
    sp.draw();
  };

  this.isSnapped = function () {
    return isSnapped;
  };

  this.getPos = function () {
    return pos;
  };

  this.getIndex = function () {
    return index;
  };

  this.isMouseOver = function (aPos) {
    const delta = Math.sqrt(
      Math.pow(aPos.x - pos.x - spi.w / 1.5, 2) +
        Math.pow(aPos.y - pos.y - spi.h / 1.5, 2)
    );
    return delta <= radius;
  };

  this.startDrag = function () {
    if (clock.paused) {
      clock.play();
    }
    startDrag = true;
  };

  this.dragging = function (aPos) {
    if (startDrag) {
      move.play();
      pos = new TPosition(aPos.x, aPos.y);
      deltaPos.x = pos.x - initPos.x;
      deltaPos.y = pos.y - initPos.y;
      startDrag = false;
    }

    pos.x = aPos.x - deltaPos.x;
    pos.y = aPos.y - deltaPos.y;
    sp.setPos(pos);
    checkSnapping();
  };

  this.setScale = function (aScale) {
    sp.setScale(aScale);
  };

  this.drop = function () {
    if (checkSnapping()) {
      initPos.x = pos.x;
      initPos.y = pos.y;
    } else {
      initPos = { ...newPos };
      deltaPos = new TPosition(0, 0);
      pos = { ...newPos };
      sp.setPos({ ...newPos });
    }
    snapOnce = true;
    drop.play();
  };

  function checkSnapping() {
    /* Snaps into place if within 25px */
    const snap = 25;

    // Only snap guess position for current round
    for (let i = 0; i < snapPos[roundCounter].length; i++) {
      const snapPoss = snapPos[roundCounter][i];

      const delta = Math.sqrt(
        Math.pow(snapPoss.x - pos.x, 2) + Math.pow(snapPoss.y - pos.y, 2)
      );

      // If button is within 25px, snap into position

      if (delta <= snap) {
        a = new Date().getTime() + time;

        pos.x = snapPoss.x;
        pos.y = snapPoss.y;
        isSnapped = true;
        return true;
      } else {
        isSnapped = false;
      }
    }
  }
}
