enum Event {
  mouse,
  keyBoard,
}

interface CustomEvent {
  target: string;
  offset: number;
}

interface CustomMouseEvent extends CustomEvent {
  x: number;
  y: number;
}

const listenEvent = (eventType: Event, handler: (e: CustomEvent) => void) => {
  return handler({ target: "hello", offset: 10 });
};

//listenEvent(Event.mouse, (e: CustomMouseEvent) => console.log(e.target));

type ObjTypes = CustomMouseEvent["x" | "target"];

const objEvent: CustomEvent = { target: "hi", offset: 10 };

function validateIndexing(key: string) {
  if (key in objEvent) {
    return objEvent[key as keyof CustomEvent];
  }
  throw Error("No prop");
}

//======Mapped Types=============

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

function mapObj3<T extends GenericMap, K>(
  obj: T,
  fnDo: (element: GetValues<T>) => K
): { [key in keyof T]: K } {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}

const mapped = mapObj3({ x: 10, y: 5 }, (element) => [element]);

//CloneDeep

function cloneDeep<T>(obj: T): T;
function cloneDeep(obj: any): any {
  if (typeof obj !== "object") return obj;
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key];
      return acc;
    },
    Array.isArray(obj) ? [] : ({} as any)
  );
}

const cloned = cloneDeep([1, 2, 3, 4]);
