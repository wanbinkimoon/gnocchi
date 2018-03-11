import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

let canvas;
let scene1;
let scene2;
const sketch = p => {

  p.setup = () => {
    p.createCanvas(800, 800);
    // p.colorMode(p.HSB)

    scene1 = p.createGraphics(400, 400);
    scene2 = p.createGraphics(400, 400);

    p.background(255)
  };
  
  const drawScene1 = (s) => {
    s.background(0)
    s.stroke(255, 100, 255)
    s.strokeWeight(4)
    s.noFill()
    s.ellipse(p.mouseX / 2, p.mouseY / 2, 30, 30)
  }
  
  const drawScene2 = (s) => {
    s.background(125, 255, 125)
    s.stroke(100, 255, 255)
    s.strokeWeight(4)
    s.noFill()
    s.ellipse((p.mouseX / 2) - 200 , p.mouseY / 2, 30, 30)
  }
  
  p.draw = () => {
    drawScene1(scene1)
    drawScene2(scene2)

    p.image(scene1, 0, 0);
    p.image(scene2, 400, 0);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {};
};

new p5(sketch);
