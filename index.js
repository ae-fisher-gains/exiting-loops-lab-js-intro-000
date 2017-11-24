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
    if (array[i] === findFn) {
      return array[i]
    }
     else if (array[i] !== findFn && i < array.length) {
    }
    else if (array[i] !== findFn && i === array.length) {
      return null
    }
  }
}
