let quantity = 4;
const objArr = []

let translateStep;;
let translateX;

function setup() {
    scene.canvas = createCanvas(scene.canvasWidth, scene.canvasHeight);
    scene.canvas.class("canvasClass");
    scene.canvas.id("canvasId");
    scene.wrapCanvas("canvasId");
    colorMode(HSL, 360,100,100);
    // window.addEventListener('resize', scene.fillCanvasToScreen, false);
    scene.fillCanvasToScreen();
    addRemoveObj(objArr, quantity, new Rose())
    translateStep = 10;
    translateX =-width/4;
}

function draw() {
  translateX = translateX+translateStep;
  translate(translateX, height / 2);
  // background(0);
  frameRate(scene.fps)
  addRemoveObj(objArr, quantity, new Rose())

  for(let i = objArr.length-1; i >= 0; i-- ){
    objArr[i].newAlfa = objArr.length;
    objArr[i].move();
    objArr[i].draw();
  }
    // scene.download(scene.countDraw, 2, 1250)
    // scene.countDraw++;
    // console.log(scene.countDraw)
    // scene.reloadPage(scene.countDraw, 1500)
  // scene.fadeIn()
}
