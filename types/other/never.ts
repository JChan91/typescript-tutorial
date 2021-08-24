// 일반적으로 반환에 사용된다

function error(msg: string): never {
  throw new Error(msg);
}

function fail() {
  return error("Failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let str: string = "hi";

if (typeof str !== "string") {
  str; // str: never
}
