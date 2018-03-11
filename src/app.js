import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = p => {
  let canvas;
  let scene1;
  let scene2;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB)

    scene1 = createGraphics(400, 400);
    scene2 = createGraphics(400, 400);
  };

  drawScene1 = () => {
    scene1.background(125, 125, 255)
  }

  drawScene2 = () => {
    scene2.background(125, 255, 125)
  }

  p.draw = () => {
    this.drawScene1()
    this.drawScene2()
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {};
};

new p5(sketch);
