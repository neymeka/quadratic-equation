module.exports = function solveEquation(equation) {

  var pos1 = equation.indexOf(" * x^2 ");
  var a = equation.slice (0, pos1);
  a = + a;
  var strA = equation.slice (pos1+7);
  var pos2 = strA.indexOf(" * x ");
  var strB = strA.slice (strA[0], pos2);
  var b = +(strB[0] + strB.substr(2));
  var strC = strA.substr (pos2+5);
  var c = +(strC[0] + strC.substr(2));
  var D = b*b - 4 * a * c;
  var x1 = Math.round(((-b + Math.sqrt(D)) / (2 * a)));
  var x2 = Math.round(((-b - Math.sqrt(D)) / (2 * a)));
  var solutions = [];
  for (i = 0; i < 2; i++){
    solutions.push (x1,x2);
    function sort (a, b) {
        if (a > b) return 1;
        if (a < b) return -1
      }
    return solutions.sort(sort);
  }
}
