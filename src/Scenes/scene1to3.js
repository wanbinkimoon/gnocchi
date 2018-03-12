export const drawScene1 = (s, p) => {
  s.background(255, 175, 0)
  s.stroke(100, 0, 255)
  s.strokeWeight(4)
  s.noFill()
  s.ellipse(p.mouseX / 2, p.mouseY / 2, 30, 30)
}

export const drawScene2 = (s, p) => {
  s.background(125, 255, 125)
  s.stroke(255, 100, 255)
  s.strokeWeight(4)
  s.noFill()
  s.ellipse((p.mouseX / 2) - 200 , p.mouseY / 2, 30, 30)
}

export const drawScene3 = (s, p) => {
  s.background(125, 125, 255)
  s.stroke(255, 200, 0)
  s.strokeWeight(4)
  s.noFill()
  s.ellipse((p.mouseX / 2) - 400 , p.mouseY / 2, 30, 30)
}