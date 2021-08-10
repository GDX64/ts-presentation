import type { GenericMap, Mapped } from "./6advancedTypes";
type GetValues<T> = T extends { [key: string]: infer K } ? K : never; //Conditional types

export function cloneDeep<T>(obj: T): T;

export function mapObj<T extends GenericMap, K>(
  obj: T,
  fnDo: (el: GetValues<T>) => K
): Mapped<T, K>;

class SomeManager {
  name: string;
}

export default {} as SomeManager;
