import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

import {drawScene1, drawScene2, drawScene3} from './Scenes/scene1to3'
import drawScene4 from './Scenes/scene4'
import drawScene5 from './Scenes/scene5'
import drawScene6 from './Scenes/scene6'
import drawScene7 from './Scenes/scene7'
import drawScene8 from './Scenes/scene8'
import drawScene9 from './Scenes/scene9'

let canvas;
let scene1;
let scene2;
let scene3;
let scene4;
let scene5;
let scene6;
let scene7;
let scene8;
let scene9;

const sketch = p => {

  p.setup = () => {
    p.createCanvas(1200, 1200);
    p.background(255)
    
    scene1 = p.createGraphics(400, 400);
    scene2 = p.createGraphics(400, 400);
    scene3 = p.createGraphics(400, 400);
    scene4 = p.createGraphics(400, 400);
    scene5 = p.createGraphics(400, 400);
    scene6 = p.createGraphics(400, 400);
    scene7 = p.createGraphics(400, 400);
    scene8 = p.createGraphics(400, 400);
    scene9 = p.createGraphics(400, 400);
  };
  
  p.draw = () => {
    drawScene1(scene1, p)
    drawScene2(scene2, p)
    drawScene3(scene3, p)
    drawScene4(scene4, p)
    drawScene5(scene5, p)
    drawScene6(scene6, p)
    drawScene7(scene7, p)
    drawScene8(scene8, p)
    drawScene9(scene9, p)
    
    p.image(scene1, 0, 0);
    p.image(scene2, 400, 0);
    p.image(scene3, 800, 0);
    p.image(scene4, 0, 400);
    p.image(scene5, 400, 400);
    p.image(scene6, 800, 400);
    p.image(scene7, 0, 800);
    p.image(scene8, 400, 800);
    p.image(scene9, 800, 800);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.mousePressed = () => {};
};

new p5(sketch);
