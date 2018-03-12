let scaleVal = 1

export default (s, p) => {
  s.colorMode(p.HSB)
  s.background(320, 80, 60);

  s.noFill();
  const side = 125;
  const hexagon = {};
  
  const polygon = (x, y, radius, npoints) => {
    const angle = p.TWO_PI / npoints;
    s.beginShape();
    let a;
    for(a = 0; a < p.TWO_PI;) {
      const sx = x + p.cos(a) * radius;
      const sy = y + p.sin(a) * radius;
      a += angle
      p.vertex(sx, sy);
    }
    s.endShape(p.CLOSE);
  };
  
  const triangleCust = (x, y, radius, npoints) => {
    const angle = p.TWO_PI / npoints;
    s.beginShape();
    let a;
    for(a = 0; a < 2;) {
      const sx = x + p.cos(a) * radius;
      const sy = y + p.sin(a) * radius;
      a += 1
      return  pointTrinagle ={
        x: sx,
        y: sy
      };
    }
    s.endShape(p.CLOSE);
  };
  
  
  s.push()
  s.translate(100, 100)
  s.rotate(p.frameCount / 100)

  let pointTrinagle;
  s.fill(320, 80, 40)
  s.noStroke()
  s.triangle(0, 0, 200, 0, 200, 340)
  s.triangle(0, 0, 120, -200,  -120, -200)
  s.triangle(0, 0, -200, 0, -200, 340)
  
  s.scale(scaleVal)
  scaleVal += (p.randomGaussian(0, .005))

  s.strokeWeight(6);
  s.stroke(320, 100, 800);
  s.fill(320, 100, 40)
  polygon(0, 0, 70, 6);
  
  
  s.pop()
};
