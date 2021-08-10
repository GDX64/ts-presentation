import { GenericMap } from "./6advancedTypes";

export function cloneDeep<T>(obj: T): T;
export function cloneDeep(obj: any) {
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key];
      return acc;
    },
    Array.isArray(obj) ? [] : ({} as any)
  );
}

export function mapObj1(obj: any, fnDo: (element: any) => any): any {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

function mapObj2<T, K>(
  obj: { [key: string]: T }, //Mapped types
  fnDo: (element: T) => K
): { [key: string]: K } {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

type GetValues<T> = T extends { [key: string]: infer K } ? K : never; //Conditional types

function mapObj3<T extends GenericMap<any>, K>(
  obj: T, //Mapped types
  fnDo: (element: GetValues<T>) => K
): { [Key in keyof T]: K } {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

const result = mapObj3({ a: 10 }, (a) => a + "hello");
