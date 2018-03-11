import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = p => {
  let canvas;
  let scene1;
  let scene2;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    // p.colorMode(p.HSB)

    scene1 = p.createGraphics(400, 400);
    scene2 = p.createGraphics(400, 400);

    p.background(100)
  };
  
  const drawScene1 = () => {
    scene1.background(125, 100, 125)
  }
  
  const drawScene2 = () => {
    scene2.background(125, 255, 125)
  }
  
  p.draw = () => {
    drawScene1()
    p.image(scene1, 0, 0);
    
    drawScene2()
    p.image(scene2, 400, 0);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {};
};

new p5(sketch);
