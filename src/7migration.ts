import SomeManager, { mapObj, cloneDeep } from "./migration";

const result = mapObj({ a: 10, b: 3 }, () => "hello");
console.log(result, SomeManager, cloneDeep({ result }));
