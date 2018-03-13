let bounce = 1;
let speed = .5

export default (s, p) => {
  // s.colorMode(p.HSB);

  s.background(45, 0, 40);
  s.stroke(165, 60, 160);

  s.strokeWeight(.5);
  s.noFill();

  // s.rotate(p.frameCount / 100)

  const deviation = p.randomGaussian(p.min(100, p.frameCount / 4), 20);

  // const curve = 
  const arc = 80;
  let direction = 1

  if (bounce < 0) {
    speed = .5 
  } else if (bounce > arc) {
    speed = -.5
  }
  console.log(speed)
  bounce += speed
  console.log(bounce)

  
  const points = {
    a: {
      x: 160 - bounce,
      y: 160,
    },
    c1: {
      x: 300 + bounce,
      y: 300 + bounce,
    },
    c2: {
      x: 300 + bounce,
      y: -300 - bounce,
    },
    b: {
      x: 20,
      y: 100 + bounce,
    },
  };

  
  let i;
  const steps = 60;
  for (i = 0; i <= steps; i++) {
    const t = i / steps;
    
    let j;
    const meridians = 60;
    for (j = 0; j <= meridians; j++) {
      const defaultWidth = 200;
      const spaceBetween = 6 * j;
      let x = s.curvePoint(
        points.c1.x,
        points.a.x - spaceBetween,
        points.b.x + spaceBetween,
        points.c2.x,
        t
      );

      let y = s.curvePoint(
        points.c1.y,
        points.a.y - spaceBetween,
        points.b.y, 
        points.c2.y, 
        t);

      s.ellipse(x, y, .5, .5);
    }
  }
};
