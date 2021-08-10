// Motivação
// Type system
// Compilador
// Melhoria estrutura de código

// Integração com editores

const num: number = 10;
const str: string = "teste";
const bool: boolean = true;
const und: undefined = undefined;
const nil: null = null;
const obj: object = { num: 10 };
const arr1: number[] = [10];
const arr2: Array<number> = [10];

function toString(num: number): string {
  return num.toString();
}

toString(num);
toString(str);
toString(bool);
toString(und);
toString(nil);
toString(obj);
toString(arr1);
toString(arr2);

const numberAsAny: any = 10;
const stringAsAny: any = "10";
const numberAsUnknown: unknown = 10;
const stringAsUnknown: unknown = "20";
const numberAsNever: never = 20;
const stringAsNever: never = "20";

toString(numberAsAny);
toString(stringAsAny);
toString(numberAsUnknown);
toString(stringAsUnknown);
toString(numberAsNever);
toString(stringAsNever);

if (typeof numberAsAny === "number") {
  toString(numberAsAny);
}
if (typeof numberAsUnknown === "number") {
  toString(numberAsUnknown);
}

function throwError(): never {
  throw new Error("teste");
}

throwError();
console.log("teste");

export default {};
