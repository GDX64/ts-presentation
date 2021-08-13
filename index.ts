type APIReturn = { data: { hello: number } };

async function myAPI(url: string): Promise<unknown> {
  return { data: { hello: 10 } };
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

async function testAPI() {
  const apiResult = (await myAPI("globo.com")) as Partial<Record<keyof APIReturn, unknown>>;

  const { data } = apiResult;
  if (data == null) throw Error("incorrect data");
  const { hello } = data as Partial<Record<keyof APIReturn["data"], unknown>>;
  const strForPrinting = isString(data) ? data.toUpperCase() : "DEFAULT";
  console.log(strForPrinting);
}

type ToValidate = { data: string; hello: { hello: number } };

const objValidator = {
  data: isString,
  hello: { hello: isNumber },
};

function recursiveValidation<K>(value: Record<keyof K, unknown>, objValidator: any): value is K {
  const arrKeys = Object.keys<typeof value>(value);
  if (!arrKeys.length) return false;
  return arrKeys.every((key) =>
    typeof objValidator[key] === "function"
      ? objValidator[key](value[key])
      : recursiveValidation(value[key] as any, objValidator[key])
  );
}

const tovalidate = { hello: { hello: 10 }, data: "hahskdjfh" } as { hello: unknown; data: unknown };
if (recursiveValidation<ToValidate>(tovalidate, objValidator)) {
  console.log(tovalidate);
} else {
  console.log("deu errado");
}
