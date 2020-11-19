// GET запрос

const https = require('https');

https.get('https://jsonplaceholder.type.com/todos/1', (response) => {
	let todo = ''

	//вызывается при получении фрагмента данных
	response.on('data', chunk => todo += chunk)

	//вызывается при получении полного ответа
	response.on('end', () => console.log(JSON.parse(todo)))

}).on('error', (error) => console.log('Error: ' + error.message))


//тоже но проще 
const axios = require('axios')

axios.get('https://jsonplaceholder.type.com/todos/1',)         //делаем запрос
.then(res => console.log(res.data))