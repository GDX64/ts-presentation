import type { GenericMap, NotFunction } from "./6advancedTypes";

export function cloneDeep<T extends GenericMap<any>>(obj: NotFunction<T>): T;
export function cloneDeep<T extends []>(obj: T): T;
export function cloneDeep(obj: any) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key];
    return acc;
  }, (Array.isArray(obj) ? [] : {}) as any);
}

const cloned = cloneDeep({ a: 10 });
// const cloned1 = cloneDeep(10);
// const cloned2 = cloneDeep(() => 10);

type GetMapValues<T> = T extends GenericMap<infer A> ? A : never;

export function mapObj<T extends GenericMap<any>, K>(
  obj: T,
  fnDo: (x: GetMapValues<T>) => K
): { [Key in keyof T]: K } {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

const objMapped = mapObj({ a: 10, b: "hi" }, (x) => "hello" + x); // {a: 'hello'}

class SomeManager {
  name = "hello";
}

export default new SomeManager();
