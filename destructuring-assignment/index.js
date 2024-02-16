function getFullName(obj) {
  const { firstName, lastName } = obj;
  return `${firstName} ${lastName}`;
}
console.log(getFullName({ firstName: "Dachi", lastName: "Sapir" }));

const person = {
  name: "Dachi",
  age: 25,
};

function canVote(person) {
  const { age } = person;
  return age >= 18;
}
console.log(canVote(person));

function getFirstTwo(arr) {
  const [first, second] = arr;
  return [first, second];
}
const arr = [1, 2, 3, 4, 5];
console.log(getFirstTwo(arr));

const rectangle = {
  width: 100,
  height: 100,
};

function getArea(rectangle) {
  const { width, height } = rectangle;
  return width * height;
}
console.log(getArea(rectangle));

const z = {
  x: 1,
  y: 1,
};

function getCoordinates(z) {
  const { x = 0, y = 0 } = z;
  return [x, y];
}
console.log(getCoordinates(z));
