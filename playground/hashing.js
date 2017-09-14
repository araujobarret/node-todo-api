const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});

let hashedPassword = '$2a$10$qEzsir1CJzHgQveBQR7B1eaZP8nhZ61fshd7JUJKxIBw2Edph5eyW';

bcrypt.compare(password, hashedPassword, (err, result) => {
	console.log('Result', result);
});

// let data = {
// 	id: 10
// }

// let token = jwt.sign(data, '123abc');
// let result = jwt.verify(token, '123abccc');

// console.log(token);
// console.log('Decoded', result);

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