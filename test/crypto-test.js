var crypto = require('../pseudorandom');
main();
function main() {
  var arr = new Uint32Array(32);

  arr = crypto.randomBytes(arr);
  console.log('>>>>>>', arr);
}
