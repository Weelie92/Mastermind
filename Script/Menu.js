function TButtonCheckAnswer() {
  const pos = new TPosition(
    MastermindBoard.ButtonCheckAnswer.x,
    MastermindBoard.ButtonCheckAnswer.y,
  );
  const spi = MastermindSheet.ButtonCheckAnswer;
  const sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.isMouseOver = function (aEvent) {
    if (
      aEvent.x > pos.x + 6 &&
      aEvent.x < pos.x + 6 + spi.w &&
      aEvent.y > pos.y + 6 &&
      aEvent.y < pos.y + spi.h + 6
    ) {
      return true;
    }
  };

  this.down = function () {
    sp.setIndex(1);
  };

  this.up = function () {
    if (colorButtonGuess[roundCounter].includes(null)) {
      let missingGuesses = 0;
      colorButtonGuess[roundCounter].forEach((e) => {
        if (!e) {
          missingGuesses++;
        }
      });

      if (missingGuesses === 1) {
        addLogText(`Please fill in ${missingGuesses} more button.`);
      } else {
        addLogText(`Please fill in ${missingGuesses} more buttons.`);
      }
      sp.setIndex(0);
    } else {
      checkGuess();
      drawGame();
      roundCounter++;
      addLogText(`Answer checked! Round ${roundCounter + 1}`);
      sp.setIndex(0);
    }
  };

  function checkGuess() {
    /* Keep track of perfect (correct color and position),
    and correct (correct color but wrong position),
    Index to keep track of the pin order */
    let perfect = 0;
    let correct = 0;
    let index = 0;

    /* Check if guess and answer is perfect or correct, based on roundCounter */
    for (let i = 0; i < 4; i++) {
      const guess = colorButtonGuess[roundCounter][i].getIndex();
      const answer = colorButtonAnswer;
      if (guess === answer[i].getIndex()) {
        perfect++;
      } else if (
        guess === answer[0].getIndex() ||
        guess === answer[1].getIndex() ||
        guess === answer[2].getIndex() ||
        guess === answer[3].getIndex()
      ) {
        correct++;
      }
    }

    /* Push a black pin into hintPin array for every perfect guess */
    for (let i = 0; i < perfect; i++) {
      hintPin[roundCounter].push(
        new THintPin(
          new TPosition(hintPinPos[roundCounter][index].x, hintPinPos[roundCounter][index].y),
          1,
        ),
      );
      index++;
    }

    /* Same as above, but pushed a white pin in.
    Wrong answer will result in a shorter hintPin array */
    for (let i = 0; i < correct; i++) {
      hintPin[roundCounter].push(
        new THintPin(
          new TPosition(hintPinPos[roundCounter][index].x, hintPinPos[roundCounter][index].y),
          0,
        ),
      );
      index++;
    }

    index = 0;

    for (let i = 0; i < hintPin[roundCounter].length; i++) {
      hintPin[roundCounter][i].draw();
    }

    /* If all 4 guesses are correct, WIN! */
    if (perfect === 4) {
      alert('WINNER');
    }
  }
}

function TButtonNewGame() {
  const pos = new TPosition(MastermindBoard.ButtonNewGame.x, MastermindBoard.ButtonNewGame.y);
  const spi = MastermindSheet.ButtonNewGame;
  const sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.isMouseOver = function (aEvent) {
    if (
      aEvent.x > pos.x + 6 &&
      aEvent.x < pos.x + 6 + spi.w &&
      aEvent.y > pos.y + 6 &&
      aEvent.y < pos.y + spi.h + 6
    ) {
      cvs.style.cursor = 'pointer';
      return true;
    }
  };

  this.down = function () {
    sp.setIndex(1);
  };

  this.up = function () {
    hideAnswerPanel.setVisible(true);
    newGame();
    sp.setIndex(0);
  };
}

function TButtonCheat() {
  const pos = new TPosition(MastermindBoard.ButtonCheat.x, MastermindBoard.ButtonCheat.y);
  const spi = MastermindSheet.ButtonCheat;
  const sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.isMouseOver = function (aEvent) {
    if (
      aEvent.x > pos.x + 6 &&
      aEvent.x < pos.x + 6 + spi.w &&
      aEvent.y > pos.y + 6 &&
      aEvent.y < pos.y + spi.h + 6
    ) {
      cvs.style.cursor = 'pointer';
      return true;
    }
  };

  this.down = function () {
    sp.setIndex(1);
  };

  this.up = function () {
    sp.setIndex(0);
    hideAnswerPanel.setVisible(false);
  };
}

function TRoundPin() {
  const pinPos = Object.values(MastermindBoard.RoundPin);
  const pos = new TPosition(pinPos[roundCounter].x, pinPos[roundCounter].y);
  const spi = MastermindSheet.RoundPin;
  let sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.changePos = function (aPos) {
    sp.setPos(new TPosition(aPos));
  };

  this.nextRound = function () {
    const pinPos = Object.values(MastermindBoard.RoundPin);
    const pos = new TPosition(pinPos[roundCounter].x, pinPos[roundCounter].y);
    const spi = MastermindSheet.RoundPin;
    sp = new TSprite(imgSheet, spi, pos);

    drawGame();
  };
}

function THintPin(aPos, index) {
  const pos = aPos;
  const spi = MastermindSheet.ColorHint;
  const sp = new TSprite(imgSheet, spi, pos, index);

  this.draw = function () {
    sp.draw();
  };
}

function TPanelHideAnswer() {
  const pos = new TPosition(
    MastermindBoard.PanelHideAnswer.x,
    MastermindBoard.PanelHideAnswer.y,
  );
  const spi = MastermindSheet.PanelHideAnswer;
  const sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.setVisible = function (boolean) {
    sp.setVisible(boolean);
    drawGame();
  };
}
