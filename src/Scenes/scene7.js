
let bounce = 1;
let acc = 10
let speed = acc

export default (s, p) => {
  s.colorMode(p.HSB);
  
  const arc = 200;
  let direction = 1
  
  if (bounce < -arc) {
    speed = +acc 
  } else if (bounce > arc) {
    speed = -acc
  }
  
  bounce += speed
  
  const hue = 280;
  s.background(hue + bounce, 100, 2);
  s.stroke(hue - bounce / 4, 100, 100);
  s.strokeWeight(.5);
  s.noFill();

  const points = {
    a: {
      x: 40,
      y: 40,
    },
    c1: {
      x: 200 + bounce,
      y: 0 + bounce
      // x: 200,
      // y: 0,
    },
    c2: {
      // x: 0,
      // y: 200,
      x: 0 + bounce,
      y: 200 + bounce
    },
    b: {
      x: 160,
      y: 160,
    },
  };

  
  let i;
  const steps = p.randomGaussian(60, 10);
  for (i = 0; i <= steps; i++) {
    const t = i / steps;
    
    let j;
    const meridians = 6;
    for (j = 0; j <= meridians; j++) {
      const defaultWidth = 200;
      const spaceBetween = 20 * j;
      
      let x = s.curvePoint(
        points.c1.x,
        points.a.x + spaceBetween,
        points.b.x - spaceBetween,
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

      x = s.curvePoint(
        Math.abs(points.c1.x - defaultWidth + spaceBetween),
        Math.abs(points.a.x - defaultWidth + spaceBetween),
        Math.abs(points.b.x - defaultWidth - spaceBetween),
        Math.abs(points.c2.x - defaultWidth - spaceBetween) * -1,
        t
      );

      y = s.curvePoint(
        Math.abs(points.c1.y),
        Math.abs(points.a.y),
        Math.abs(points.b.y),
        Math.abs(points.c2.y) * -1,
        t
      );

      s.ellipse(x, y, .5, .5);
    }
  }
};
