const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
	id: 10
}

let token = jwt.sign(data, '123abc');
let result = jwt.verify(token, '123abccc');

console.log(token);
console.log('Decoded', result);

// jwt.verify();

// let message = 'I am light upon your path';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
// 	id: 4
// };

// let token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'mysecret').toString()
// }

// token.data.id = 5;

// let result = SHA256(JSON.stringify(token.data) + 'mysecret').toString();

// if(token.hash == result)
// 	console.log('Data was not changed');
// else
// 	console.log('Data was changed. Authentication error!');