interface Monster {
  hp: number;
  attack(enemy: Monster): void;
}

interface Human {
  talk(word: string): void;
}

interface LobiSomi extends Monster, Human {}

class WereWof implements LobiSomi {
  hp = 10;
  constructor(public name: string) {}
  attack(enemy: Monster) {}
  talk(word: string) {
    console.log(word);
  }
}

type NameOf<T extends { name: any }> = T["name"];
type LobiName = NameOf<WereWof>;

type HasName<T> = T extends { name: infer A } ? A : never;
type WereWolfHasName = HasName<WereWof>;
type LobiSomiHasName = HasName<LobiSomi>;

const wereWofName: WereWolfHasName = "Wof :3";
const lobiSomiName: LobiSomiHasName = "Lobi :(";

//Mapped types

const objMap: { [key: string]: number } = { x: 10, y: 10 };
type LobiMap = { [key in keyof LobiSomi]: key };
type LobiMapString = {
  [key in keyof LobiSomi as LobiSomi[key] extends number ? key : never]: string;
};

function mapLobi(lobiSomi: LobiSomi): LobiMap {
  const lobiEntries = Object.keys(lobiSomi).map((key) => [key, key]);
  return Object.fromEntries(lobiEntries);
}

function mapStringLobiProps(lobiSomi: LobiSomi): LobiMapString {
  const lobiEntries = Object.entries(lobiSomi)
    .filter(([key, value]) => typeof value === "number")
    .map(([key, value]) => [key, `${value}`]);

  return Object.fromEntries(lobiEntries);
}

const lobi: LobiSomi = {
  hp: 90,
  talk() {
    console.log("Howl");
  },
  attack() {
    console.log("Attacc");
  },
};
const lobiMap = mapLobi(lobi);
const lobiMapString = mapStringLobiProps(lobi);
