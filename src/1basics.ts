function toString(num: number): string {
  return num.toString();
}

toString(10);
toString(20);
toString("teste");
toString(true);
toString(undefined);
toString(null);
toString({ num: 10 });

const numberAsAny: any = 10;
const stringAsAny: any = "10";
const numberAsNever: never = 20;
const stringAsNever: never = "20";

toString(numberAsAny);
toString(stringAsAny);
toString(numberAsNever);
toString(stringAsNever);
