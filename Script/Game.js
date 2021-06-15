/* Sprite details */
const MastermindSheet = {
  Board: { x: 320, y: 0, w: 441, h: 640, count: 1 },
  ButtonNewGame: { x: 0, y: 45, w: 160, h: 45, count: 2 },
  ButtonCheckAnswer: { x: 0, y: 0, w: 160, h: 45, count: 2 },
  ButtonCheat: { x: 0, y: 139, w: 75, h: 49, count: 2 },
  PanelHideAnswer: { x: 0, y: 90, w: 186, h: 49, count: 1 },
  ColorPicker: { x: 0, y: 200, w: 34, h: 34, count: 8 },
  ColorHint: { x: 0, y: 250, w: 19, h: 18, count: 2 },
  RoundPin: { x: 38, y: 250, w: 19, h: 18, count: 1 },
};

/* Coordinates on the actual board! */
const MastermindBoard = {
  ButtonNewGame: { x: 275, y: 5 },
  ButtonCheckAnswer: { x: 275, y: 53 },
  ButtonCheat: { x: 5, y: 45 },
  PanelHideAnswer: { x: 84, y: 45 },
  RoundPin: {
    Row1: { x: 10, y: 597 },
    Row2: { x: 10, y: 544 },
    Row3: { x: 10, y: 491 },
    Row4: { x: 10, y: 438 },
    Row5: { x: 10, y: 385 },
    Row6: { x: 10, y: 332 },
    Row7: { x: 10, y: 279 },
    Row8: { x: 10, y: 226 },
    Row9: { x: 10, y: 173 },
    Row10: { x: 10, y: 120 },
  },
  HintPin: {
    Row1: [
      { x: 300, y: 586 },
      { x: 322, y: 586 },
      { x: 300, y: 606 },
      { x: 322, y: 606 },
    ],
    Row2: [
      { x: 300, y: 533 },
      { x: 322, y: 533 },
      { x: 300, y: 553 },
      { x: 322, y: 553 },
    ],
    Row3: [
      { x: 300, y: 479 },
      { x: 322, y: 479 },
      { x: 300, y: 499 },
      { x: 322, y: 499 },
    ],
    Row4: [
      { x: 300, y: 425 },
      { x: 322, y: 425 },
      { x: 300, y: 445 },
      { x: 322, y: 445 },
    ],
    Row5: [
      { x: 300, y: 372 },
      { x: 322, y: 372 },
      { x: 300, y: 392 },
      { x: 322, y: 392 },
    ],
    Row6: [
      { x: 300, y: 318 },
      { x: 322, y: 318 },
      { x: 300, y: 338 },
      { x: 322, y: 338 },
    ],
    Row7: [
      { x: 300, y: 265 },
      { x: 322, y: 265 },
      { x: 300, y: 285 },
      { x: 322, y: 285 },
    ],
    Row8: [
      { x: 300, y: 211 },
      { x: 322, y: 211 },
      { x: 300, y: 231 },
      { x: 322, y: 231 },
    ],
    Row9: [
      { x: 300, y: 158 },
      { x: 322, y: 158 },
      { x: 300, y: 178 },
      { x: 322, y: 178 },
    ],
    Row10: [
      { x: 300, y: 105 },
      { x: 322, y: 105 },
      { x: 300, y: 125 },
      { x: 322, y: 125 },
    ],
  },
  ColorPicker: {
    Black: { x: 380, y: 113 },
    Blue: { x: 380, y: 179 },
    Brown: { x: 380, y: 248 },
    Green: { x: 380, y: 314 },
    Orange: { x: 379, y: 379 },
    Red: { x: 380, y: 448 },
    White: { x: 380, y: 513 },
    Yellow: { x: 380, y: 581 },
  },
  ColorAnswer: {
    Row1: [
      { x: 93, y: 587 },
      { x: 138, y: 587 },
      { x: 183, y: 587 },
      { x: 228, y: 587 },
    ],
    Row2: [
      { x: 93, y: 534 },
      { x: 138, y: 534 },
      { x: 183, y: 534 },
      { x: 228, y: 534 },
    ],
    Row3: [
      { x: 93, y: 481 },
      { x: 138, y: 481 },
      { x: 183, y: 481 },
      { x: 228, y: 481 },
    ],
    Row4: [
      { x: 93, y: 428 },
      { x: 138, y: 428 },
      { x: 183, y: 428 },
      { x: 228, y: 428 },
    ],
    Row5: [
      { x: 93, y: 375 },
      { x: 138, y: 375 },
      { x: 183, y: 375 },
      { x: 228, y: 375 },
    ],
    Row6: [
      { x: 93, y: 322 },
      { x: 138, y: 322 },
      { x: 183, y: 322 },
      { x: 228, y: 322 },
    ],
    Row7: [
      { x: 93, y: 269 },
      { x: 138, y: 269 },
      { x: 183, y: 269 },
      { x: 228, y: 269 },
    ],
    Row8: [
      { x: 93, y: 216 },
      { x: 138, y: 216 },
      { x: 183, y: 216 },
      { x: 228, y: 216 },
    ],
    Row9: [
      { x: 93, y: 163 },
      { x: 138, y: 163 },
      { x: 183, y: 163 },
      { x: 228, y: 163 },
    ],
    Row10: [
      { x: 93, y: 110 },
      { x: 138, y: 110 },
      { x: 183, y: 110 },
      { x: 228, y: 110 },
    ],
  },
  ComputerAnswer: [
    { x: 93, y: 52 },
    { x: 138, y: 52 },
    { x: 183, y: 52 },
    { x: 228, y: 52 },
  ],
};

const GameStatus = { gameRunning: 0, gameOver: 1, gameWin: 2 };
const FireworkType = { rocket: 0, fire: 1, effects: 2 };

const NewLine = '<br />';
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
const txtLog = document.getElementById('txtLog');
const imgSheet = new Image();
const mousePos = new TPosition(0, 0);

imgSheet.addEventListener('load', loadGame);
imgSheet.src = 'SpriteSheet_MM.png';
cvs.addEventListener('mousemove', cvsMouseMove);
cvs.addEventListener('mousedown', cvsMouseDown);
cvs.addEventListener('mouseup', cvsMouseUp);
document.addEventListener('contextmenu', (e) => e.preventDefault());

const colorButtons = [];
const colorButtonGuess = [];
const colorButtonAnswer = [];
const hintPin = [];
const firework = [];
const fireworkFire = [];
const fireworkEffects = [];

let board = null;
let buttonCheckAnswer = null;
let buttonNewGame = null;
let buttonCheat = null;
let roundPin = null;
let hideAnswerPanel = null;
let rocket = null;

/* Timer, when used with await, will cause the code to wait for x amount of milliseconds */
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

/* Sounds */
const clock = new Audio('Sounds/clock.mp3');
const move = new Audio('Sounds/move1.mp3');
const drop = new Audio('Sounds/chessDrop.mp3');
const woosh = new Audio('Sounds/woosh.mp3');
const explosion = new Audio('Sounds/explosion.mp3');

drop.volume = 0.5;
clock.loop = true;

/* Adds different positions */
const snapPos = Object.values(MastermindBoard.ColorAnswer);
const pinPos = Object.values(MastermindBoard.RoundPin);
const hintPinPos = Object.values(MastermindBoard.HintPin);

let isDragging = false;
let gameMode = GameStatus.gameWin;
let currentButton = null;
let roundCounter = 0;
let newGameCounter = 1;
let tempAnswer = [];

function addLogText(aText) {
  txtLog.innerHTML = aText + NewLine + txtLog.innerHTML;
}

function newGame() {
  document
    .getElementById('fireworkButton')
    .setAttribute('style', 'display: none');
  document
    .getElementById('fireworkWarning')
    .setAttribute('style', 'display: none');
  addLogText(`New Game! Attempt ${newGameCounter}.`);
  colorButtonAnswer.length = 0;
  roundCounter = 0;
  newGameCounter++;

  gameMode = GameStatus.gameRunning;

  /* Using Object.values to add every ComputerAnswer x.y value to an array. */
  const colorButtonAnswerPos = Object.values(MastermindBoard.ComputerAnswer);

  /* Clear the guess array.
  push 10 new arrays containing 4 nulls (for future guesses) */
  colorButtonGuess.length = 0;

  for (let i = 0; i < 10; i++) {
    const row = [];

    for (let j = 0; j < 4; j++) {
      row.push(null);
    }

    colorButtonGuess.push(row);
  }

  hintPin.forEach((e) => {
    e.length = 0;
  });

  for (let i = 0; i < 4; i++) {
    /* Using for loop to push a new instance of TColorButton into the answer array */
    colorButtonAnswer.push(
      new TColorButtons(
        new TPosition(colorButtonAnswerPos[i].x, colorButtonAnswerPos[i].y),
        Math.floor(Math.random() * 8)
      )
    );
  }

  drawGame();
}

function drawGame() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  board.draw();
  buttonCheckAnswer.draw();
  buttonNewGame.draw();
  buttonCheat.draw();
  roundPin.draw();

  /* Loop through guesses, draw every button guess made */
  colorButtonGuess.forEach((e) => {
    e.forEach((a) => {
      if (a) {
        a.draw();
      }
    });
  });

  colorButtons.forEach((e) => {
    e.draw();
  });

  /* Draw every white/black pin, only if needed */
  for (let i = 0; i < hintPin.length; i++) {
    for (let j = 0; j < hintPin[i].length; j++) {
      hintPin[i][j].draw();
    }
  }

  colorButtonAnswer.forEach((e) => {
    e.draw();
  });

  hideAnswerPanel.draw();

  if (currentButton) currentButton.draw();

  for (let i = 0; i < fireworkFire.length; i++) {
    fireworkFire[i].draw();
  }

  for (let i = 0; i < firework.length; i++) {
    firework[i].draw();
  }

  for (let i = 0; i < fireworkEffects.length; i++) {
    fireworkEffects[i].draw();
  }
}

function setMousePos(aEvent) {
  const bounds = cvs.getBoundingClientRect();
  mousePos.x = aEvent.clientX - bounds.left;
  mousePos.y = aEvent.clientY - bounds.top;
}

function cvsMouseMove(aEvent) {
  setMousePos(aEvent);

  /* If you're dragging a button */
  if (isDragging) {
    currentButton.dragging(mousePos);
    drawGame();
    return;
  }

  /* If you're not dragging a button */
  if (buttonNewGame.isMouseOver(mousePos)) cvs.style.cursor = 'pointer';

  if (gameMode === GameStatus.gameRunning) {
    if (
      buttonNewGame.isMouseOver(mousePos) ||
      buttonCheckAnswer.isMouseOver(mousePos) ||
      buttonCheat.isMouseOver(mousePos)
    ) {
      cvs.style.cursor = 'pointer';
    } else {
      cvs.style.cursor = '';
    }

    currentButton = null;

    /* Checks if there is a button in snap position (guesses) on said round */
    colorButtonGuess[roundCounter].forEach((a) => {
      /* If snap position is not null, and mouse is over a button, make current button said button */
      if (a !== null && a.isMouseOver(mousePos)) {
        currentButton = a;
        cvs.style.cursor = 'grab';
      }
    });

    /* Checks which color button the mouse is over, and change currentButton to said button */
    for (let i = 0; i < colorButtons.length; i++) {
      if (colorButtons[i].isMouseOver(mousePos)) {
        cvs.style.cursor = 'grab';
        currentButton = colorButtons[i];
      }
    }
  }
}

function cvsMouseDown() {
  /* Check which menu button mouse is over */
  if (buttonNewGame.isMouseOver(mousePos)) {
    buttonNewGame.down();
  }

  /* Check if currentButton is on the right of canvas (only true on colorButtons) */
  if (gameMode === GameStatus.gameRunning) {
    if (buttonCheckAnswer.isMouseOver(mousePos)) buttonCheckAnswer.down();
    if (buttonCheat.isMouseOver(mousePos)) buttonCheat.down();

    if (currentButton && mousePos.x > cvs.width - 100) {
      /* Set the scale of currentButton to 0, making it disappear */
      currentButton.setScale({ x: 0, y: 0 });

      /* Create a NEW button on top of the old one, and start dragging new button */
      currentButton = new TColorButtons(
        currentButton.getPos(),
        currentButton.getIndex()
      );

      currentButton.startDrag();
      cvs.style.cursor = 'grabbing';
      isDragging = true;
      return;
    }

    if (currentButton) {
      /* Check which button guess the mouse is over, replace snap position with null */

      for (let j = 0; j < 4; j += 1) {
        if (
          currentButton.getPos().x <
            snapPos[roundCounter][j].x + MastermindSheet.ColorPicker.w &&
          currentButton.getPos().x >
            snapPos[roundCounter][j].x - MastermindSheet.ColorPicker.w &&
          currentButton.getPos().y <
            snapPos[roundCounter][j].y + MastermindSheet.ColorPicker.h &&
          currentButton.getPos().y >
            snapPos[roundCounter][j].y - MastermindSheet.ColorPicker.h
        ) {
          colorButtonGuess[roundCounter][j] = null;
        }
      }

      currentButton.startDrag();
      cvs.style.cursor = 'grabbing';
      isDragging = true;
      return;
    }
  }

  drawGame();
}

function cvsMouseUp() {
  if (buttonNewGame.isMouseOver(mousePos)) {
    buttonNewGame.up();
    roundPin.nextRound();
    return;
  }

  if (gameMode === GameStatus.gameRunning) {
    if (buttonCheckAnswer.isMouseOver(mousePos)) {
      buttonCheckAnswer.up();
      roundPin.nextRound();
      return;
    }
    if (buttonCheat.isMouseOver(mousePos)) {
      buttonCheat.up();
      return;
    }

    currentButton.drop();

    /* Place currentButton in snap position if snapping is true */
    for (let j = 0; j < 4; j += 1) {
      if (
        currentButton.getPos().x <
          snapPos[roundCounter][j].x + MastermindSheet.ColorPicker.w &&
        currentButton.getPos().x >
          snapPos[roundCounter][j].x - MastermindSheet.ColorPicker.w &&
        currentButton.getPos().y <
          snapPos[roundCounter][j].y + MastermindSheet.ColorPicker.h &&
        currentButton.getPos().y >
          snapPos[roundCounter][j].y - MastermindSheet.ColorPicker.h &&
        currentButton.isSnapped()
      ) {
        colorButtonGuess[roundCounter][j] = currentButton;
      }
    }

    /* Set the scale of every color button back to 1 */
    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].grow();
    }

    currentButton = null;

    cvs.style.cursor = '';
    isDragging = false;
    drawGame();
  }

  buttonCheckAnswer.setIndex(0);
  buttonNewGame.setIndex(0);
  buttonCheat.setIndex(0);
  drawGame();
}

async function startFirework() {
  if (firework.length > 0) {
    document
      .getElementById('fireworkWarning')
      .setAttribute('style', 'display: show');
  } else {
    rocket = new FireWorks(
      new TPosition(Math.random() * 400, 610),
      0,
      FireworkType.rocket
    );
    woosh.play();
    rocket.move();

    firework.push(rocket);
  }
}

function loadGame() {
  cvs.width = MastermindSheet.Board.w;
  cvs.height = MastermindSheet.Board.h;
  board = new TSprite(imgSheet, MastermindSheet.Board, { x: 0, y: 0 });
  buttonCheckAnswer = new TButtonCheckAnswer();
  buttonNewGame = new TButtonNewGame();
  buttonCheat = new TButtonCheat();
  roundPin = new TRoundPin();

  hideAnswerPanel = new TPanelHideAnswer();

  newGame();
}

function test() {
  setInterval(() => {
    for (let i = 0; i < fireworkEffects.length; i++) {
      fireworkEffects[i].move();
    }
    for (let i = 0; i < firework.length; i++) {
      firework[i].move();
    }
    for (let i = 0; i < fireworkFire.length; i++) {
      fireworkFire[i].move();
    }
  }, 10);
}

test();

/* Add the 8 different color buttons */
for (let i = 0; i < 8; i++) {
  /* Object.values adds the coordinates in MastermindBoard.ColorPicker to an array, allowing a loop to run through */
  const colorPickerPos = Object.values(MastermindBoard.ColorPicker);

  colorButtons[i] = new TColorButtons(colorPickerPos[i], i);
}

/* Prepare 10 rows of hint pins */
for (let i = 0; i < 10; i++) {
  hintPin.push([]);
}

/* add 10 (rounds) arrays with 4 (guesses) nulls in each */
for (let i = 0; i < 10; i++) {
  colorButtonGuess.push([]);
  for (let j = 0; j < 4; j++) {
    colorButtonGuess[i].push(null);
  }
}
