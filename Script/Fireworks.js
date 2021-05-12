function FireWorks(newPos, index, aType = false) {
  let pos = { ...newPos };
  let currentScale = { x: 1, y: 1 };
  let currentScaleGrowth = 0;
  let type = aType;
  let dir;

  const spi = MastermindSheet.ColorPicker;
  const sp = new TSprite(imgSheet, spi, pos, index);
  const explodeHeight = Math.floor(Math.random() * 300) + 100;

  const fireIndex = [4, 5, 7];

  this.draw = function () {
    sp.draw();
  };

  this.setScale = function (aScale) {
    currentScale = aScale;
    sp.setScale(currentScale);
  };

  this.grow = async function () {
    pos.x += 17;
    pos.y += 17;

    currentScaleGrowth = 0;

    switch (type) {
      case FireworkType.effects:
        for (let i = 0; i < 20; i++) {
          /* += 0.1 did not work, as every button would grow back when i moved one, +=10 and / 100 works as intended. */

          if (i < 10) {
            currentScaleGrowth += 10;
            currentScale = {
              x: currentScaleGrowth / 100,
              y: currentScaleGrowth / 100,
            };
          } else {
            currentScaleGrowth -= 10;
            currentScale = {
              x: currentScaleGrowth / 100,
              y: currentScaleGrowth / 100,
            };
          }

          this.setScale(currentScale);
          drawGame();
          await timer(65);
        }
        fireworkEffects.splice(0, 1);
        break;
      case FireworkType.fire:
        for (let i = 0; i < 20; i++) {
          /* += 0.1 did not work, as every button would grow back when i moved one, +=10 and / 100 works as intended. */

          if (i < 10) {
            currentScaleGrowth += 10;
            currentScale = {
              x: currentScaleGrowth / 100,
              y: currentScaleGrowth / 100,
            };
          } else {
            currentScaleGrowth -= 10;
            currentScale = {
              x: currentScaleGrowth / 100,
              y: currentScaleGrowth / 100,
            };
          }

          this.setScale(currentScale);
          drawGame();
          await timer(10);
        }
        fireworkFire.splice(0, 1);
        break;
      case FireworkType.rocket:
        break;

      default:
        break;
    }
  };

  this.getIndex = function () {
    return index;
  };

  this.explode = function () {
    woosh.pause();
    woosh.currentTime = 0;
    explosion.pause();
    explosion.currentTime = 0;
    explosion.play();
    for (let i = 0; i < 100; i++) {
      let effect = new FireWorks(
        pos,
        Math.floor(Math.random() * 8) + 1,
        FireworkType.effects
      );

      effect.move();
      effect.grow();
      fireworkEffects.push(effect);
    }

    firework.length -= 1;
  };

  this.move = function () {
    switch (type) {
      case FireworkType.rocket:
        let a = new FireWorks(
          pos,
          fireIndex[Math.floor(Math.random() * 3)],
          FireworkType.fire
        );
        a.move();
        a.grow();
        fireworkFire.push(a);

        if (pos.y >= explodeHeight) {
          pos.y -= 7;

          sp.setPos(pos);
          drawGame();
        } else {
          this.explode();
        }

        break;

      case FireworkType.fire:
        dir = Math.floor(Math.random() * 5);

        switch (dir) {
          case 1:
            pos.x -= 2;
            pos.y -= 2;
            break;
          case 2:
            pos.x += 2;
            pos.y += 2;
            break;
          case 3:
            pos.x += 2;
            pos.y -= 2;
            break;
          case 4:
            pos.x -= 2;
            pos.y += 2;
            break;
          default:
            break;
        }

        sp.setPos(pos);
        drawGame();
        break;

      case FireworkType.effects:
        dir = Math.floor(Math.random() * 5);

        switch (dir) {
          case 1:
            pos.x -= 12;
            pos.y -= 12;
            break;
          case 2:
            pos.x += 12;
            pos.y += 12;
            break;
          case 3:
            pos.x += 12;
            pos.y -= 12;
            break;
          case 4:
            pos.x -= 12;
            pos.y += 12;
            break;
          default:
            break;
        }

        sp.setPos(pos);
        drawGame();
        break;

      default:
        break;
    }
  };
}
