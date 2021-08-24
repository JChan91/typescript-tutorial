// primitive type가 아닌 경우에 object를 사용 가능하다
let user: object = {
  userName: "Chan",
  userAge: 5,
};

let user2: object = 1; // error
let nums: object = [{ nums: [1, 2, 3] }];
