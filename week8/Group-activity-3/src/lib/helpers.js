function yell(msg) {
  return msg.toUpperCase();
}
const x = 5;
const addX = function (value) {
  return value + x;
};

module.exports.x = x;
module.exports.addX = addX;
module.exports.yell = yell;
