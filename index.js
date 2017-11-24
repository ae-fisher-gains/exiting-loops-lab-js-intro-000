function breakOut (array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    }
    else if (array[i] === stopValue) {
      break
    }
  }
  return array
}

function keepGoing (array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
      array[i] = changeValue
    }
    else if (array[i] === skipValue) {
      continue
    }
  }
  return array
}

function findBy (array, findFn) {
  var x = findFn()
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === x) {
      return array[i]
    }
     else if (array[i] !== x && i < array.length) {
    }
    else {
      return null
    }
  }
}
