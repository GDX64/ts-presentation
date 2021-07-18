type GetValues<T> = T extends { [key: string]: infer K } ? K : never; //Conditional types
type GenericMap = { [key: string]: any }; //Type alias

export function cloneDeep<T>(obj: T): T;

export function mapObj<T extends GenericMap, K>(
  obj: T,
  fnDo: (el: GetValues<T>) => K
): { [key: string]: K };
