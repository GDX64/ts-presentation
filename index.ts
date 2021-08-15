import { recursiveValidation, RecursiveValidator } from "./src/TypeValidation";

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

const objValidator = {
  data: isString,
  hello: { hello: isNumber },
};

type ToValidate2 = RecursiveValidator<typeof objValidator>;

const tovalidate = { hello: { hello: 10 }, data: "hahskdjfh" };
if (recursiveValidation(tovalidate, objValidator)) {
  console.log(tovalidate);
} else {
  console.log("deu errado");
}
