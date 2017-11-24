function breakOut (array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    var j = i
    if (array[j] !== stopValue) {
      array[j] = changeValue
    }
    else if (array[j] === stopValue) {
      break
    }
  }
  return array
}
