var obj = {
  property1: "muskan",
  property2: "bajaj",
  array: ["1", "2", "3"],
};
//string converted to string
var s = JSON.stringify(obj);
//string converted to object
var r = JSON.parse(s);

console.log(s);
console.log(r);
console.log(typeof s);
console.log(typeof obj);
console.log(typeof r);
//r is an object and hence we can access each of its property
console.log(r.array[2]);
