// 런타임에 한정한 any를 대응하는 Type safe
// 사용 전 데이터 타입 검사를 목적으로 사용할 수 있다

let maybe: unknown;

const num: number = maybe; // error

if (typeof maybe === "number") {
  const num: number = maybe; // num: number
}
