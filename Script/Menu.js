function TButtonCheckAnswer() {
  const pos = new TPosition(
    MastermindBoard.ButtonCheckAnswer.x,
    MastermindBoard.ButtonCheckAnswer.y
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
    // Checks if currentGuess is filled, if not, let the player know
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

    /* Add answer to a temporary answer variable */
    tempAnswer.length = 0;
    tempAnswer = { ...colorButtonAnswer };

    for (let i = 0; i < 4; i++) {
      /* Only true if tempAnswer is NOT null, and guess/answer is the same (color and position) */
      if (
        tempAnswer[i] !== null &&
        colorButtonGuess[roundCounter][i].getIndex() ===
          tempAnswer[i].getIndex()
      ) {
        perfect++;
        /* Removes the correct answer from the temporary answer variable */
        tempAnswer[i] = null;
      } else {
        for (let j = 0; j < 4; j++) {
          /* Check if tempAnswer is NOT null. Check if guess can be found in any other answer position */
          if (
            tempAnswer[j] !== null &&
            colorButtonGuess[roundCounter][i].getIndex() ===
              tempAnswer[j].getIndex()
          ) {
            /* If guess can be found in any other answer position, check is said answer is a perfect match with its corresponding guess */
            if (
              colorButtonGuess[roundCounter][j].getIndex() ===
              tempAnswer[j].getIndex()
            ) {
              /* If a match is found, add it as perfect, and not correct. Set the answer to null */
              perfect++;
              tempAnswer[j] = null;
              break;
            } else {
              /* If no perfect match is found, increase correct by one. */
              correct++;
              tempAnswer[j] = null;
              break;
            }
          }
        }
      }
      /* Explanation:
         1: If guess 1 match answer 1, perfect++ and remove said answer from tempAnswer. 
         2: If guess 1 dont match answer 1, check if guess 1 match answer 2, 3 or 4
         3: If guess 1 match answer 3, check if answer 3 match guess 3.
         4: If guess 3 match answer 3, perfect++ and set answer 3 to null.
         5: If guess 3 don't match answer 3, correct++ and set answer 3 to null. */
    }

    /* Push a black pin into hintPin array for every perfect guess */
    for (let i = 0; i < perfect; i++) {
      hintPin[roundCounter].push(
        new THintPin(
          new TPosition(
            hintPinPos[roundCounter][index].x,
            hintPinPos[roundCounter][index].y
          ),
          1
        )
      );

      index++;
    }

    /* Same as above, but pushed a white pin in.
    Wrong answer will result in a shorter hintPin array */
    for (let i = 0; i < correct; i++) {
      hintPin[roundCounter].push(
        new THintPin(
          new TPosition(
            hintPinPos[roundCounter][index].x,
            hintPinPos[roundCounter][index].y
          ),
          0
        )
      );

      index++;
    }

    for (let i = 0; i < hintPin[roundCounter].length; i++) {
      hintPin[roundCounter][i].draw();
    }

    /* If all 4 guesses are correct, WIN! */
    if (perfect === 4) {
      alert('WINNER');
    }

    index = 0;
    perfect = 0;
    correct = 0;
  }
}

function TButtonNewGame() {
  const pos = new TPosition(
    MastermindBoard.ButtonNewGame.x,
    MastermindBoard.ButtonNewGame.y
  );
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
  const pos = new TPosition(
    MastermindBoard.ButtonCheat.x,
    MastermindBoard.ButtonCheat.y
  );
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
  let pos = new TPosition(pinPos[roundCounter].x, pinPos[roundCounter].y);
  const spi = MastermindSheet.RoundPin;
  let sp = new TSprite(imgSheet, spi, pos);

  this.draw = function () {
    sp.draw();
  };

  this.changePos = function (aPos) {
    sp.setPos(new TPosition(aPos));
  };

  this.nextRound = function () {
    pos = new TPosition(pinPos[roundCounter].x, pinPos[roundCounter].y);
    sp.setPos(pos);
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
    MastermindBoard.PanelHideAnswer.y
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
