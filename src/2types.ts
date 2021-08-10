// primitivos

const abc = "abc";
let hi: string = "hi";
let hello: number = 10;
let foo = true;
let strictGreet: "hi" | "hello" = "hi";

// hello = hi;
strictGreet = "hello";
strictGreet = hello;
strictGreet = hi;
hi = strictGreet;

// arrays e objetos

const arr = [1, 2, 3, 4];
const tuple = [10, 10] as [number, number];
const obj = { x: 10, y: "10" };

arr.push("teste");
obj.y = 10;
obj.z = 50;

let fnHi: Function;
let fnStrictHi: () => "hi";

fnHi = () => "hi";
fnHi = () => "hello";
fnStrictHi = () => "hi";
fnStrictHi = () => "hello";
fnStrictHi = (num: number) => "hi";

export default {};
