//Basic types

import { cloneDeep } from "./migration";

let hi: string = "hi";
let hello: number = 10;
let foo = true;
// hello = hi
const arr = [1, 2, 3, 4];
const tuple = [10, 10] as [number, number];
const obj = { x: 10, y: "10" };

let fnHi: Function = () => "hi";

// fnHi = true

//===Any====
let anyType = 5 as any; //same as 'let anyType: any = 5'
anyType = foo;
//anyType()
foo = anyType;

//Literal types
const juan = "juan";
const ten = 10;
const rock = "rock" as string;
hi = juan;

//Algebraic types

let juanOrTen: "juan" | 10;
juanOrTen = 10;
// juanOrTen = 'julia';
let product: [10 | 5, 1 | "str"];
product = [10, "str"];

//===Type aliases====
type HiHello = { hi: number; hello: number };
type Pixel = number;
type Ten = 10;

//====Functions====

function sayHi(obj: HiHello, repeat: number): number {
  return obj.hello * repeat;
}

//Interfaces

interface Monster {
  hp: number;
  attack(enemy: Monster): void;
}

interface Human {
  talk(word: string): void;
}

interface LobiSomi extends Monster, Human {}

class WereWof implements LobiSomi {
  hp = 10;
  constructor(public name: string) {}
  attack(enemy: Monster) {}
  talk(word: string) {
    console.log(word);
  }
}

// Type parameters

type NameOf<T extends { name: any }> = T["name"];

type LobiName = NameOf<WereWof>;

//Generics

class Container<T> {
  constructor(public value: T) {}
}

const containsString = new Container("hi");

function filterEqual<T>(arr: T[], something: T): Array<T> {
  return arr.filter((element) => element == something);
}
const no10 = filterEqual([1, 2, 3, 10], 10);

//Keyof

function returnProp<T, Key extends keyof T>(obj: T, key: Key) {
  return obj[key];
}

//Conditional types

type HasName<T> = T extends { name: infer A } ? A : never;
type LobiSomiHasName = HasName<LobiSomi>;
type WereWolfHasName = HasName<WereWof>;

//Mapped types

const objMap: { [key: string]: number } = { x: 10, y: 10 };
type LobiMap = { [key in keyof LobiSomi]: key };
type LobiMapString = {
  [key in keyof LobiSomi as LobiSomi[key] extends number ? key : never]: number;
};

//structural type system

type Point = { x: number; y: number };
interface AnotherPoint {
  x: number;
  y: number;
}

declare function takePoint(p: Point): number;

const p = { x: 10, y: 10 } as AnotherPoint;
// takePoint(p);

//Migration

const objCloned = cloneDeep({ a: [1, 2, 3] });
