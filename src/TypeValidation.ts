// type GuardType<T> = T extends (value: unknown) => value is infer A ? A : never;

export type RecursiveValidator<T> = T extends (value: unknown) => value is infer A
  ? A
  : { [Key in keyof T]: RecursiveValidator<T[Key]> };

export function recursiveValidation<K>(
  value: unknown,
  objValidator: K
): value is RecursiveValidator<K> {
  const arrKeys = Object.keys(objValidator);
  if (!arrKeys.length) return false;
  return arrKeys.every((key) => {
    if (value == null) return false;
    const nonNullValue: any = value;
    const fnValidateOrObjValidate = objValidator[key];
    return typeof fnValidateOrObjValidate === "function"
      ? fnValidateOrObjValidate(nonNullValue[key])
      : recursiveValidation(nonNullValue[key], fnValidateOrObjValidate);
  });
}
