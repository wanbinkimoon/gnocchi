let scaleVal = 1;

export default (s, p) => {
  s.colorMode(p.HSB);
  const hue = 280;
  s.background(hue, 100, 100);

  s.stroke(255);
  s.strokeWeight(.5);
  s.noFill();

  const deviation = p.randomGaussian(p.min(100, p.frameCount / 4), 20);

  const points = {
    a: {
      x: 160,
      y: 160,
    },
    c1: {
      x: 200,
      y: 0,
    },
    c2: {
      x: 0,
      y: 200,
    },
    b: {
      x: 40,
      y: 40,
    },
  };

  
  let i;
  const steps = 80;
  for (i = 0; i <= steps; i++) {
    const t = i / steps;
    
    let j;
    const meridians = p.frameCount;
    for (j = 0; j <= meridians; j++) {
      const defaultWidth = 200;
      const spaceBetween = 2 * j;
      let x = s.curvePoint(
        points.c1.x,
        points.a.x - spaceBetween,
        points.b.x + spaceBetween,
        points.c2.x,
        t
      );

      let y = s.curvePoint(
        points.c1.y,
        points.a.y,
        points.b.y, 
        points.c2.y, 
        t);

      s.ellipse(x, y, .5, .5);
    }
  }
};
