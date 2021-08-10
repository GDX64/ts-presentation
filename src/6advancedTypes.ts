interface Lobisomi {
  name: string;
  attack(): void;
}

//Parametric types

type MonoFunc<T> = (x: T) => T;
type MyMonoFunc = MonoFunc<number>;
function helloMono(fn: MonoFunc<string>) {
  return fn("hello");
}

//Conditional types

type IsLobisomi<T> = T extends Lobisomi ? true : false;
type Lobitest = IsLobisomi<{ attack(): void; name: string }>;

// Infer

type NameWhat<T> = T extends { name: infer A } ? A : never;
type WhatKindOfName = NameWhat<{ name: number }>;
type WhatKindOfName2 = NameWhat<{ hello: number }>;

//Mapped types

const objMap: { [key: string]: number } = { x: 10, y: 10 };
objMap.hello = 10;
const result = objMap.askdfad;
const arrResult = [10][10];

type LobiMap = { [key in keyof Lobisomi]: key };

type Filter<T, Keys extends keyof T> = {
  [K in Keys]: T[K];
};

type LobiFiltered = Filter<Lobisomi, "attack" | "name">;

type Filtered = Filter<Lobisomi, "attack">;

export function helloThere<T extends number | string>(arg: T) {
  return arg;
}

//Roubei
type A = Pick<Lobisomi, "attack">;
