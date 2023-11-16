
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  // Using spread operator to create a new array and leaving the original array unchanged
  return [...cats, name];
}

function prependCat(name) {
  // Using spread operator to create a new array and leaving the original array unchanged
  return [name, ...cats];
}
function removeLastCat() {
  // Using slice to create a new array excluding the last element, leaving the original array unchanged
  return cats.slice(0, -1);
}
function removeFirstCat() {
  return cats.slice(1);
}
