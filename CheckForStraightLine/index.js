/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var getSlope = function (x, y) {
  const rise = y[1] - x[1];
  const run = y[0] - x[0];
  return rise / run;
};

// it is a straight line if any 2 point a line have the same slope.
var checkStraightLine = function (coordinates) {
  const slope = getSlope(coordinates[0], coordinates[1]);
  for (i = 2; i < coordinates.length; i++) {
    if (getSlope(coordinates[i - 1], coordinates[i]) !== slope) return false;
  }
  return true;
};
