class Rose {
  constructor() {

    //SECRET FORMULA
    this.n = 50               //nominator
    this.d = 10               //denominator
    this.k = this.n / this.d; //denominator/nominator
    this.c = 5;               //number or corners
    this.size = document.documentElement.clientHeight * mobileVersion(0.5, 0.4);
    
    this.lineWeight = this.size / 2500;
    this.playspeed = random(0.0002,0.00005);
    this.color = [random(0,360), 20, 50];

    this.trail = {
      sizeA:    mobileVersion(200, 100),
      distance: mobileVersion(0.0002, 0.0004),
      rotation: mobileVersion(0.005, 0.01), //random(0.001,0.005), //0.005,
      alfa: 1,
      alfastep: 10
    }
    this.randomizeDNKC();
  }

  move() {
    this.updateDNK(this.playspeed);
    this.resetDNK();
  }

  draw() {
    this.loopHue();
    this.drawTrail();
  }

  updateDNK(_increment) {
    this.n = this.n - _increment;
    this.d = this.d + _increment;
    this.k = this.n / this.d;
  }
  resetDNK(){
    if (this.n <1 || this.d <1){
      this.playspeed = -this.playspeed;
    }
  }
  randomizeDNKC(){
    this.n = random(10,15)               
    this.d = random(1,2)                  
    this.k = this.n / this.d;
    this.c = random(1,3);
  }
  randomizeHue(){
    this.color[0]=random(0,360)
  }
  loopHue(){
    this.color[0] = this.color[0]+0.1;
    if(this.color[0]>=360){
      this.color[0]=0
    }
  }



  drawTrail() {
    let tempAlfa = this.trail.alfa;
    this.trail.alfastep = this.trail.alfa/this.trail.sizeA;

    for (let i = 0; i <= this.trail.sizeA; i++) {
      let tempC = this.c + (i * (this.trail.distance));
      tempAlfa = tempAlfa - this.trail.alfastep;

      rotate(this.trail.rotation);
      noFill()
      stroke(this.color[0], this.color[1], this.color[2], tempAlfa);
      strokeWeight(this.lineWeight);

      if (i < this.trail.sizeA / 1.5) {
        blendMode(SCREEN);
      } else {
        blendMode(NORMAL);
      }

      this.drawRose(this.size, this.d, this.k, tempC)

    }
  }

  drawRose(_size, _d, _k, _c){
    beginShape();
    for (let a = TWO_PI / _c; a < TWO_PI * _d; a += TWO_PI / _c) {
      const r = _size * cos(_k * a)
      const x = r * cos(a);
      const y = r * sin(a);
      vertex(x, y);
    }
    endShape();
  }

  set newSize(value){
    this.size=this.size+value;
  }

  set newPlayspeed(value){
    if (value){
      this.playspeed = this.playspeed*2
    }
    else{
      this.playspeed = this.playspeed/2
    }
  }

  set newAlfa(value){
    this.trail.alfa = 0.2/value;
  }
}


