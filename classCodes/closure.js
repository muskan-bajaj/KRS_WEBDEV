function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  //   y();
  return y;
}
x();
var z = x();
console.log(z);
z();
//function binded to their lexical environment is called closure
