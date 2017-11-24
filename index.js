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
  for (var i = 0; i <= array.length; i++) {
    var j = findFn
    if (array[i] === j) {
      return array[i]
    }
     else if (array[i] !== j && i < array.length) {
      continue
    }
    else if (array[i] !== j && i === array.length) {
      return null
    }
  }
}
