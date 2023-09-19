var array1 = ['010101', '101010'];
var array2 = ['101010', '010101'];


function intercale(array1, array2) {
  var arrayResult = [];
  var total = 0;
  if (array1.length > array2.length) {
    total = array1.length;
  } else {
    total = array2.length;
  }

  for (var i = 0; i < total; i++) {
    if (array1[i]) {
      arrayResult.push(array1[i]);
    }
    if (array2[i]) {
      arrayResult.push(array2[i]);
    }
  }

  return arrayResult;
  
}
document.body.innerHTML = JSON.stringify(intercale(array1, array2));
