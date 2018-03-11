export  default (s, p) => {
  const points = {
    a: {
      x: 75, 
      y: 100
    }, 
    b: {
      x: 125, 
      y: 100
    }, 
    c: {
      x: 100, 
      y: 58
    }
  }
  s.background(0)
  s.stroke(255)
  s.strokeWeight(1)
  s.noFill()
  s.ellipse(points.a.x, points.a.y, 100, 100)
  s.ellipse(points.b.x, points.b.y, 100, 100)
  
  s.stroke(255, 255, 125)
  s.strokeWeight(2)
  s.ellipse(points.a.x, points.a.y, 2, 2)
  s.ellipse(points.b.x, points.b.y, 2, 2)
  s.ellipse(points.c.x, points.c.y, 2, 2)
  
  s.strokeWeight(1)
  s.stroke(255, 100, 100)
  s.triangle(
    points.a.x,
    points.a.y,
    points.b.x,
    points.b.y,
    points.c.x,
    points.c.y,
  )
}