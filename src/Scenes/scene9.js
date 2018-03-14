let bounce = 1;
const acc = 20
let speed = acc
let ease = .05

export default (s, p) => {
  s.colorMode(p.HSB);

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
    speed += acc
  } else if (bounce > arc) {
    speed -= acc
  }
  console.log(speed)
  bounce += speed * ease
  console.log(bounce)

  
  const points = {
    a: {
      x: 0 - bounce,
      y: 0 + bounce,
    },
    c1: {
      x: 0 - bounce,
      y: 0 + bounce / 100,
    },
    c2: {
      x: 200 - bounce,
      y: 0 + bounce / 100,
    },
    b: {
      x: 200 - bounce,
      y: 0 + bounce,
    },
  };

  
  let i;
  const steps = 60;
  for (i = 0; i <= steps; i++) {
    const t = i / steps;
    
    let j;
    const meridians = 100;
    for (j = 0; j <= meridians; j++) {
      const defaultWidth = 200;
      const spaceBetween = 6 * j;
      const wave = 5 * j
      let x = s.curvePoint(
        points.c1.x + wave,
        points.a.x - spaceBetween + (bounce * 2),
        points.b.x + spaceBetween,
        points.c2.x + (bounce * 2) + wave,
        t
      );

      let y = s.curvePoint(
        points.c1.y - wave,
        points.a.y - spaceBetween + (bounce * 2),
        points.b.y + (bounce * 2), 
        points.c2.y - wave, 
        t);
        
        s.ellipse(x, y + bounce - wave, .5 + wave / 10, .5);
        s.ellipse(-x, -y + bounce, .5 + wave / 10, .5);
    }
  }
};
