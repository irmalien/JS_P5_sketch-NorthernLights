
let initialized = false;
let quantity = 2;
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
    for(let i = 0; i < quantity; i++ ){
      objArr.push(new Rose())
    }
    canvasOffset = -width/4;
    
}

function draw() {
  translate(0, height / 2);


  frameRate(scene.fps)

  //Remove objects if out of range
  for(let i = objArr.length-1; i >= 0; i-- ){
    if(objArr[i].NewTranslatePosition>width*1.5){
      objArr.splice(i, 1);
      initialized = true;
    }
  }

  //restart when all objects are removed
  if(objArr.length==0 && initialized){
    saveCanvas(this.titleShort, 'png')
    scene.pause(1000)
    clear();
    quantity = random(1,3);
    for(let i = 0; i <= quantity; i++ ){
      objArr.push(new Rose())
    }
  }

  // if(saving){
  //   saveCanvas(this.titleShort, 'png')
  //   clear();
  //   saving=false;
  // }

  // addRemoveObj(objArr, quantity, new Rose())

  for(let i = objArr.length-1; i >= 0; i-- ){
    push();
    translate(objArr[i].NewTranslatePosition, 0)
    objArr[i].newAlfa = objArr.length;
    objArr[i].move();
    objArr[i].draw();
    pop();
  }
    // scene.download(scene.countDraw, 2, 1250)
    // scene.countDraw++;
    // console.log(scene.countDraw)
    // scene.reloadPage(scene.countDraw, 1500)
  // scene.fadeIn()
}
