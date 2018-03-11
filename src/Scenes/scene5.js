export default  (s, p) => {
  const side = 125
  const trianglePoint = {
    x1: 100, 
    y1: (Math.sqrt(3) / 3 * side * - 1) + 100, 
    x2: (side / 2  * -1) + 100, 
    y2: (Math.sqrt(3) / 6 * side) + 100, 
    x3: (side / 2) + 100, 
    y3: (Math.sqrt(3) / 6 * side) + 100, 
  }

  const rectPoint = {
    x: 100,
    y: 100,
    w: 100,
    h: 100,
  }
  
  s.background(0)
  s.noFill()
  s.strokeWeight(1)
  
  s.stroke(255)
  s.ellipse(100, 100, (side / Math.sqrt(3)) * 2, (side / Math.sqrt(3)) * 2)
  // s.rect()


  s.stroke(255, 100, 100)
  s.triangle(
    trianglePoint.x1, 
    trianglePoint.y1, 
    trianglePoint.x2, 
    trianglePoint.y2, 
    trianglePoint.x3, 
    trianglePoint.y3);


}