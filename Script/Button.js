function TColorButtons(newPos, index) {
  let pos = newPos;
  let deltaPos = new TPosition(100, 100);
  const initPos = pos;
  const radius = 15;
  const spi = MastermindSheet.ColorPicker;
  const sp = new TSprite(imgSheet, spi, pos, index);

  this.clearButtonGuess = function () {
    colorButtonGuess.length = 0;

    for (let i = 0; i < 10; i++) {
      const row = [];

      for (let j = 0; j < 4; j++) {
        row.push(null);
      }
      colorButtonGuess.push(row);
    }
  };

  this.draw = function () {
    sp.draw();
  };

  this.getPos = function () {
    return pos;
  };

  this.isMouseOver = function (aPos) {
    const delta = Math.sqrt(
      Math.pow(aPos.x - pos.x - spi.w / 1.5, 2) + Math.pow(aPos.y - pos.y - spi.h / 1.5, 2),
    );
    return delta <= radius;
  };

  this.startDrag = function (aPos) {
    pos = new TPosition(aPos.x, aPos.y);
    deltaPos.x = pos.x - initPos.x;
    deltaPos.y = pos.y - initPos.y;
  };

  this.dragging = function (aPos) {
    pos.x = aPos.x - deltaPos.x;
    pos.y = aPos.y - deltaPos.y;
    sp.setPos(pos);
    checkSnapping();
  };

  this.drop = function () {
    if (checkSnapping()) {
      initPos.x = pos.x;
      initPos.y = pos.y;
    }
  };

  function checkSnapping() {
    const snap = 25;

    for (let i = 0; i < snapPositions.length; i++) {
      for (let j = 0; j < 4; j++) {
        const snapPos = snapPositions[i][j];

        const delta = Math.sqrt(
          Math.pow(snapPos.x - pos.x, 2) + Math.pow(snapPos.y - pos.y, 2),
        );

        if (delta <= snap) {
          pos.x = snapPos.x;
          pos.y = snapPos.y;
          return true;
        }
      }
    }
  }
}
