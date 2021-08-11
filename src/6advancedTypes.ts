interface Lobisomi {
  name: string;
  attack(): void;
}

interface Monster {
  name: number;
  strength: number;
}

//Algebraic DataTypes

type LobiMonster = Lobisomi & Monster;
function testLobiMonster(lm: LobiMonster) {
  return lm.strength;
}

function testLobiOrMonster(LobiOrMonster: Lobisomi | Monster) {
  return LobiOrMonster.name;
}

//Type indexing

type LobiName = Lobisomi["name"];

//Parametric types
type Monofunc<T> = (x: T) => T;
type NumFunc = Monofunc<number>;
export function testMono(fn: Monofunc<string>) {
  return fn("hello");
}

//Conditional types

type IsLobisomi<T> = T extends Lobisomi ? true : false;
type LobiIs = IsLobisomi<{ name: 10 }>;
export type NotFunction<T> = T extends Function ? never : T;
type NotFn = NotFunction<() => 10>;

// Infer

type Returns<T> = T extends (...args: any[]) => infer A ? A : never;
type FromTestMono = Returns<typeof testMono>;
type WhatName<T> = T extends { name: infer A } ? A : never;
type TheName = WhatName<{ name: string }>;

//Mapped types

export type GenericMap<T> = { [key: string]: T };
const objMap: GenericMap<number> = { a: 10, b: 5 };
objMap.hello = 15;
const value = objMap.asdfhjka;
const arrValue = [10][10];

type Lobimap = { [Key in keyof Lobisomi]: number };

type Filter<T, Keys extends keyof T> = { [Key in Keys]: T[Key] };

type OnlyName = Filter<Lobisomi, "name" | "attack">;
//Roubei
