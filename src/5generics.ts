//Generics

class Container<T> {
  constructor(public value: T) {}
}

const containsString = new Container<"hi" | "hello">("teste");

function filterEqual<T>(arr: T[], something: T): Array<T> {
  return arr.filter((element) => element == something);
}
const no10 = filterEqual([1, 2, 3, 10], 10);
const namesFiltered = filterEqual(["Gabriel", "João"], "Gabriel");

//Keyof

type Square = {
  color: string;
  sideLength: number;
};

function returnProp<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key];
}

const redSquare: Square = { color: "red", sideLength: 5 };
const whiteSquare: Square = { color: "white", sideLength: 2 };
const blueSquare: Square = { color: "blue", sideLength: 8 };

const redSquareSideLength = returnProp(redSquare, "sideLength");
const whiteSquareColor = returnProp(whiteSquare, "color");
const blueSquareLabel = returnProp(blueSquare, "label");
