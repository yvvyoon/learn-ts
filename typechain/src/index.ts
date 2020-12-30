// argument 끝의 물음표는 any 타입
// Python에서 kwargs=None과 유사
const sayHi = (name: string, age: number, gender: string): void => {
	console.log(`Hello ${name}, you are ${age} years old ${gender}`);
};

sayHi('Yoon', 25, 'male');

export {};
