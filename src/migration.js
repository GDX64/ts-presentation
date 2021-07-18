export function cloneDeep(obj) {
  return Object.keys(obj).reduce(
    (acc, key) => {
      acc[key] = typeof obj[key] === "object" ? cloneDeep(obj[key]) : obj[key];
      return acc;
    },
    Array.isArray(obj) ? [] : {}
  );
}

export function mapObj(obj, fnDo) {
  const arrMapped = Object.keys(obj).map((key) => [key, fnDo(obj[key])]);
  return Object.fromEntries(arrMapped);
}
