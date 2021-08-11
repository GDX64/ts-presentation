//Generics

function filter<ArrType>(arr: ArrType[], x: ArrType) {
  return arr.filter((item) => item !== x);
}

const result = filter(["b"], "a");

class Container<T extends { name: string }> {
  constructor(public value: T) {}
}

//Keyof
