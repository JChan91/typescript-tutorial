/**
 * 어떤 타입이라도 상관없는 타입
 * 컴파일할 때 타입 체크가 정상적으로 이뤄지지 않기에
 * 최대한 안쓰는게 Best!!
 *
 */

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d; //  빈 객체이지만 에러가 나지 않음
