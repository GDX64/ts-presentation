type GetValues<T> = T extends { [key: string]: infer K } ? K : never; //Conditional types
type GenericMap = { [key: string]: any }; //Type alias
type Mapped<T, K> = T extends GenericMap ? { [Key in keyof T]: K } : never;

export function cloneDeep<T>(obj: T): T;

export function mapObj<T extends GenericMap, K>(
  obj: T,
  fnDo: (el: GetValues<T>) => K
): Mapped<T, K>;
