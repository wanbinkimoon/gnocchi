import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

import {drawScene1, drawScene2, drawScene3} from './Scenes/scene1to3'
import drawScene4 from './Scenes/scene4'
import drawScene5 from './Scenes/scene5'

let canvas;
let scene1;
let scene2;
let scene3;
let scene4;
let scene5;

const sketch = p => {

  p.setup = () => {
    p.createCanvas(1200, 800);
    // p.colorMode(p.HSB)

    scene1 = p.createGraphics(400, 400);
    scene2 = p.createGraphics(400, 400);
    scene3 = p.createGraphics(400, 400);
    scene4 = p.createGraphics(400, 400);
    scene5 = p.createGraphics(400, 400);

    p.background(255)
  };
  
  p.draw = () => {
    drawScene1(scene1, p)
    drawScene2(scene2, p)
    drawScene3(scene3, p)
    drawScene4(scene4, p)
    drawScene5(scene5, p)

    p.image(scene1, 0, 0);
    p.image(scene2, 400, 0);
    p.image(scene3, 800, 0);
    p.image(scene4, 0, 400);
    p.image(scene5, 400, 400);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {};
};

new p5(sketch);