import type { GenericMap, NotFunction } from "./6advancedTypes";

export function cloneDeep<T extends GenericMap<any>>(obj: NotFunction<T>): T;
export function cloneDeep<T extends []>(obj: T): T;

type GetMapValues<T> = T extends GenericMap<infer A> ? A : never;

export function mapObj<T extends GenericMap<any>, K>(
  obj: T,
  fnDo: (x: GetMapValues<T>) => K
): { [Key in keyof T]: K };

class SomeManager {
  name: "hello";
}

declare const expDefault: SomeManager;
export default expDefault;
