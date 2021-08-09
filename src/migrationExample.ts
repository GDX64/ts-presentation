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
type GenericMap = { [key: string]: any }; //Type alias
type Mapped<T, K> = T extends GenericMap ? { [Key in keyof T]: K } : never;

function mapObj3<T extends GenericMap, K>(
  obj: T,
  fnDo: (element: GetValues<T>) => K
): { [key in keyof T]: K } {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

function mapObj4<T extends GenericMap, K>(
  obj: T,
  fnDo: (element: GetValues<T>) => K
): Mapped<T, K> {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}
