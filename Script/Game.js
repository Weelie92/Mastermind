//--------------------------------------------------------------------------------------------------------------------
//------ Variables, Constants and Objects
//--------------------------------------------------------------------------------------------------------------------
//Coordinates on the sprite-sheet

const MastermindSheet = {
  Board: { x: 320, y: 0, w: 441, h: 640, count: 1 },
  ButtonNewGame: { x: 0, y: 45, w: 160, h: 45, count: 2 },
  ButtonCheckAnswer: { x: 0, y: 0, w: 160, h: 45, count: 2 },
  ButtonCheat: { x: 0, y: 139, w: 75, h: 49, count: 2 },
  PanelHideAnswer: { x: 0, y: 90, w: 186, h: 49, count: 1 },
  ColorPicker: { x: 0, y: 200, w: 34, h: 34, count: 8 },
  ColorHint: { x: 0, y: 250, w: 19, h: 18, count: 2 },
};

// Coordinates on the actual board!
const MastermindBoard = {
  ButtonNewGame: { x: 275, y: 5 },
  ButtonCheckAnswer: { x: 275, y: 53 },
  ButtonCheat: { x: 5, y: 45 },
  PanelHideAnswer: { x: 84, y: 45 },
  ColorPicker: {
    Black: { x: 380, y: 113 },
    Blue: { x: 380, y: 179 },
    Brown: { x: 380, y: 248 },
    Green: { x: 380, y: 314 },
    Orange: { x: 378, y: 379 },
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

const NewLine = '<br />';
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
const txtLog = document.getElementById('txtLog');
const imgSheet = new Image();
const mousePos = new TPosition(0, 0);

let board = null;

//--------------------------------------------------------------------------------------------------------------------
//------ Classes
//--------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------
//------ Function and Events
//--------------------------------------------------------------------------------------------------------------------
function addLogText(aText) {
  if (txtLog.innerHTML.length > 0) {
    txtLog.innerHTML += NewLine;
  }
  txtLog.innerHTML += aText;
}

function newGame() {
  addLogText('New Game!');
  drawGame();
}

function drawGame() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  board.draw();

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

  if (currentButton) {
    currentButton.draw();
  }
}

function setMousePos(aEvent) {
  const bounds = cvs.getBoundingClientRect();
  mousePos.x = aEvent.clientX - bounds.left;
  mousePos.y = aEvent.clientY - bounds.top;
}

function cvsMouseMove(aEvent) {
  setMousePos(aEvent);

  if (!isDragging) {
    cvs.style.cursor = '';
    currentButton = null;

    colorButtonGuess.forEach((e) => {
      e.forEach((a) => {
        if (a !== null && a.isMouseOver(mousePos)) {
          currentButton = a;
          cvs.style.cursor = 'grab';
        }
      });
    });

    for (let i = 0; i < colorButtons.length; i++) {
      if (colorButtons[i].isMouseOver(mousePos)) {
        cvs.style.cursor = 'grab';
        currentButton = colorButtons[i];
        return;
      }
    }
  } else if (currentButton) {
    currentButton.dragging(mousePos);
    drawGame();
  }
}

function cvsMouseDown() {
  for (let i = 0; i < colorButtons.length; i++) {
    if (colorButtons[i].isMouseOver(mousePos)) {
      console.log(colorButtons[i].getPos());
    }
  }

  if (currentButton && mousePos.x > cvs.width - 100) {
    currentButton = new TColorButtons(currentButton.getPos(), currentButton.getIndex());
    currentButton.startDrag();
    cvs.style.cursor = 'grabbing';
    isDragging = true;
  } else if (currentButton !== null) {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (
          currentButton.getPos().x < snapPositions[i][j].x + MastermindSheet.ColorPicker.w &&
          currentButton.getPos().x > snapPositions[i][j].x - MastermindSheet.ColorPicker.w &&
          currentButton.getPos().y < snapPositions[i][j].y + MastermindSheet.ColorPicker.h &&
          currentButton.getPos().y > snapPositions[i][j].y - MastermindSheet.ColorPicker.h
        ) {
          console.log('YEPP');

          colorButtonGuess[i][j] = null;
        }
      }
    }
    currentButton.startDrag();
    cvs.style.cursor = 'grabbing';
    isDragging = true;
  }
}

function cvsMouseUp() {
  if (currentButton) {
    currentButton.drop();
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (
          currentButton.getPos().x < snapPositions[i][j].x + MastermindSheet.ColorPicker.w &&
          currentButton.getPos().x > snapPositions[i][j].x - MastermindSheet.ColorPicker.w &&
          currentButton.getPos().y < snapPositions[i][j].y + MastermindSheet.ColorPicker.h &&
          currentButton.getPos().y > snapPositions[i][j].y - MastermindSheet.ColorPicker.h
        ) {
          console.log('YEPP');
          colorButtonGuess[i][j] = currentButton;
        }
      }
    }
    currentButton = null;
    cvs.style.cursor = 'grab';
    isDragging = false;
    drawGame();
  }
}

function loadGame() {
  cvs.width = MastermindSheet.Board.w;
  cvs.height = MastermindSheet.Board.h;
  board = new TSprite(imgSheet, MastermindSheet.Board, { x: 0, y: 0 });
  newGame();
}

//--------------------------------------------------------------------------------------------------------------------
//------ Main Code
//--------------------------------------------------------------------------------------------------------------------
imgSheet.addEventListener('load', loadGame);
imgSheet.src = 'SpriteSheet_MM.png';
cvs.addEventListener('mousemove', cvsMouseMove);
cvs.addEventListener('mousedown', cvsMouseDown);
cvs.addEventListener('mouseup', cvsMouseUp);
document.addEventListener('contextmenu', (aEvent) => aEvent.preventDefault());

const colorButtons = [];
const colorButtonGuess = [];
const snapPositions = [];

let isDragging = false;
let currentButton = null;

for (let i = 0; i < 8; i++) {
  const colorPickerPos = Object.values(MastermindBoard.ColorPicker);

  colorButtons[i] = new TColorButtons({ ...colorPickerPos[i] }, i);
}

for (let i = 0; i < 10; i++) {
  colorButtonGuess.push([]);
  for (let j = 0; j < 4; j++) {
    colorButtonGuess[i].push(null);
  }
}

for (const [aRow, aPos] of Object.entries(MastermindBoard.ColorAnswer)) {
  snapPositions.push(aPos);
}
