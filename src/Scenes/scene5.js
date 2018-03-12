export default (s, p) => {
  const side = 125;
  const trianglePoint = {
    x1: 100,
    y1: Math.sqrt(3) / 3 * side * -1 + 100,
    x2: side / 2 * -1 + 100,
    y2: Math.sqrt(3) / 6 * side + 100,
    x3: side / 2 + 100,
    y3: Math.sqrt(3) / 6 * side + 100,
  };

  const radius = side / Math.sqrt(3);

  const trianglePoint2 = {
    x1: trianglePoint.x2,
    y1:
      trianglePoint.y1 + Math.sqrt(Math.pow(radius, 2) - Math.pow(side / 2, 2)),
    x2: trianglePoint.x3,
    y2:
      trianglePoint.y1 + Math.sqrt(Math.pow(radius, 2) - Math.pow(side / 2, 2)),
    x3: trianglePoint.x1,
    y3:
      trianglePoint.y2 + Math.sqrt(Math.pow(radius, 2) - Math.pow(side / 2, 2)),
  };

  s.background(0);
  s.noFill();

  s.strokeWeight(0.5);
  s.stroke(255);
  s.ellipse(100, 100, radius * 2, radius * 2);
  s.triangle(
    trianglePoint2.x1,
    trianglePoint2.y1,
    trianglePoint2.x2,
    trianglePoint2.y2,
    trianglePoint2.x3,
    trianglePoint2.y3
  );

  // exagon
  s.line(
    trianglePoint2.x1,
    trianglePoint2.y1,
    trianglePoint.x2,
    trianglePoint.y2
  );

  s.line(
    trianglePoint2.x2,
    trianglePoint2.y2,
    trianglePoint.x3,
    trianglePoint.y3
  );

  s.line(
    trianglePoint2.x2,
    trianglePoint2.y2,
    trianglePoint.x1,
    trianglePoint.y1
  );

  s.line(
    trianglePoint2.x1,
    trianglePoint2.y1,
    trianglePoint.x1,
    trianglePoint.y1
  );

  s.line(
    trianglePoint2.x3,
    trianglePoint2.y3,
    trianglePoint.x2,
    trianglePoint.y2
  );

  s.line(
    trianglePoint2.x3,
    trianglePoint2.y3,
    trianglePoint.x3,
    trianglePoint.y3
  );

  //inner diagonals
  s.line(
    trianglePoint2.x1,
    trianglePoint2.y1,
    trianglePoint.x3,
    trianglePoint.y3
  );

  s.line(
    trianglePoint2.x2,
    trianglePoint2.y2,
    trianglePoint.x2,
    trianglePoint.y2
  );

  //inner vertical
  const innerRectHeight = (trianglePoint2.y1 - trianglePoint.y3) / 2 * -1;
  s.line(
    trianglePoint.x1,
    innerRectHeight * -1 + trianglePoint.y3,
    trianglePoint.x1,
    trianglePoint.y2
  );

  const innerRectPont = {
    x: trianglePoint2.x1 + side / 4,
    y: trianglePoint2.y1 + innerRectHeight / 2,
    w: trianglePoint2.x2 - side / 4 - (trianglePoint2.x1 + side / 4),
    h: innerRectHeight,
  };
  //inner rect
  s.rect(innerRectPont.x, innerRectPont.y, innerRectPont.w, innerRectPont.h);

  // innercircl
  s.ellipse(100, 100, innerRectHeight, innerRectHeight);
  s.ellipse(innerRectPont.x, innerRectPont.y, innerRectHeight, innerRectHeight);

  s.ellipse(
    trianglePoint2.x1,
    trianglePoint2.y1,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    trianglePoint.x2,
    trianglePoint.y2,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    trianglePoint2.x2,
    trianglePoint2.y2,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    trianglePoint.x3,
    trianglePoint.y3,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    innerRectPont.x,
    innerRectPont.y + innerRectHeight,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    innerRectPont.x + innerRectPont.w,
    innerRectPont.y,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    innerRectPont.x,
    innerRectPont.y + innerRectHeight,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    innerRectPont.x + innerRectPont.w,
    innerRectPont.y + innerRectHeight,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(100, trianglePoint2.y1, innerRectHeight, innerRectHeight);

  s.ellipse(100, trianglePoint.y2, innerRectHeight, innerRectHeight);

  s.ellipse(
    trianglePoint.x1,
    trianglePoint.y1,
    innerRectHeight,
    innerRectHeight
  );

  s.ellipse(
    trianglePoint2.x3,
    trianglePoint2.y3,
    innerRectHeight,
    innerRectHeight
  );

  s.line(
    100,
    trianglePoint.y2,
    innerRectPont.x,
    innerRectPont.y + innerRectHeight
  );

  s.line(
    100,
    trianglePoint.y2,
    innerRectPont.x + innerRectPont.w,
    innerRectPont.y + innerRectHeight
  );

  s.line(
    100,
    trianglePoint2.y1,
    innerRectPont.x,
    innerRectPont.y + innerRectHeight
  );

  s.line(
    100,
    trianglePoint2.y1,
    innerRectPont.x + innerRectPont.w,
    innerRectPont.y,
  );

  s.line(
    100,
    trianglePoint2.y2,
    innerRectPont.x,
    innerRectPont.y,
  );

  s.line(
    100,
    trianglePoint2.y2,
    innerRectPont.x + innerRectPont.w,
    innerRectPont.y + innerRectHeight
  );

  s.strokeWeight(1);
  s.stroke(255, 100, 100);
  s.triangle(
    trianglePoint.x1,
    trianglePoint.y1,
    trianglePoint.x2,
    trianglePoint.y2,
    trianglePoint.x3,
    trianglePoint.y3
  );
};
