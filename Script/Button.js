function TColorButtons(newPos, index) {
  let pos = { ...newPos };
  let deltaPos = new TPosition(120, 120);
  let startDrag = false;
  let initPos = pos;
  let isSnapped = false;

  let currentScale = { x: 1, y: 1 };
  let currentScaleGrowth = 0;

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

  this.dragging = async function (aPos) {
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
    currentScale = aScale;
    sp.setScale(currentScale);
  };

  this.grow = async function () {
    /* Only grow is button is not max scale */
    if (currentScale.x !== 1) {
      /* Move button 17 pixels to the right and down.
      Over the grow period, move the x/y position back to it's original position.
      This creates the illusion of the button growing from the middle */
      pos.x += 17;
      pos.y += 17;

      for (let i = 0; i < 10; i++) {
        pos.x -= 1.7;
        pos.y -= 1.7;

        /* += 0.1 did not work, as every button would grow back when i moved one, +=10 and / 100 works as intended. */
        currentScaleGrowth += 10;
        currentScale = {
          x: currentScaleGrowth / 100,
          y: currentScaleGrowth / 100,
        };

        this.setScale(currentScale);
        drawGame();
        await timer(20);
      }
    }

    currentScaleGrowth = 0;
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

  async function checkSnapping() {
    /* Snaps into place if within 25px */
    const snap = 25;

    /* Only snap guess position for current round */
    for (let i = 0; i < snapPos[roundCounter].length; i++) {
      const snapPoss = snapPos[roundCounter][i];

      const delta = Math.sqrt(
        Math.pow(snapPoss.x - pos.x, 2) + Math.pow(snapPoss.y - pos.y, 2)
      );

      /* If button is within 25px, snap into position */

      if (delta <= snap) {
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
