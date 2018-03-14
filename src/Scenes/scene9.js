let bounce = 1;
const acc = 20
let speed = acc
let ease = .03

export default (s, p) => {
  s.colorMode(p.HSB);

  s.background(45, 0, 40);
  
  s.strokeWeight(.5);
  s.noFill();
  
  const arc = 140;
  
  if (bounce < -arc) {
    speed += acc
  } else if (bounce > arc) {
    speed -= acc
  }
  bounce += speed * ease
  
  
  const points = {
    c1: {
      x: 200,
      y: 10,
    },
    a: {
      x: 200,
      y: 10,
    },
    b: {
      x: 200,
      y: 10 + bounce,
    },
    c2: {
      x: 200,
      y: 200,
    },
  };
  
  
  let i;
  const steps = 1 + bounce ;
  
  for (i = 0; i <= steps; i++) {
    const t = i / (steps / 4);
    
    let j;
    const meridians = 100;
    for (j = 0; j <= meridians; j++) {
      const space = 40 * j;
      const wave = .5 * j
      const angle = p.PI;

      let x = s.curvePoint(
        points.c1.x,
        (points.a.x + (space * p.cos(angle))),
        (points.b.x + (space * p.cos(angle))),
        points.c2.x,
        t
      );
      
      let y = s.curvePoint(
        points.c1.y,
        (points.a.y + (space * p.sin(angle))),
        (points.b.y + (space * p.sin(angle))),
        points.c2.y,  
        t);
        
        s.stroke(105 + bounce, 60, 160);
        s.ellipse(x, y, -10 + wave / 10, -10 + wave / 10);
        // s.ellipse(-x, -y , -10 + wave / 10, -10 + wave / 10);
      }
    }
  };
  