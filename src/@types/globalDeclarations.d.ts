//Declaring global Variables
declare namespace HelloName {
  export const hi: number;
}

//working with loaders
declare module "*.html" {
  const exp: string;
  export default exp;
}

interface ObjectConstructor {
  keys<T>(value: T): (keyof T)[];
}
