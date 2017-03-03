//***************
// Объект EventEmitter или сокращённо ee
var EventEmitter = require('events').EventEmitter;//Подключаем модуль events и берём соответствующее св-во EventEmitter
var server = new EventEmitter;

//Для генерации события используется вызов emit,
//ему передаётся название события и какие-то аргументы, данные,
//при этом он вызывает обработчики, назаначенные через on
//Событие подписка: .on - метод, request - имя события, далее функция обработчик.
//Можно указать много подписчиков и все они будут вызваны в том порядке,
//в котором назначены
//*****
//Это обработчики запроса server - сервер
//при запросе 'request',
//что-то делает -  function(request){request.approved = true;}
//server.on - Обработчик запроса
// server.on('request', function(request) {
//     request.approved = true;
// });

server.on('request', function(request) {
    console.log(request);
});
//*****
//.emit - метод, генерирует событие - 'request' и передаёт данные,
//эти данные попадают в функцию обработчик
//*****
//server.emit - Обработчик входящих соединений, который генерирует событие
server.emit('request', {from: "Клиент"});
server.emit('request', {from: "Ещё Клиент"});
//*****
//***************
//***************
// var EventEmitter = require('events').EventEmitter;
// var server = new EventEmitter;
// //server.emit('error');//В таком виде повалит весь процесс
// ////(Исключение генерируется в строенного типа type Error)
// //server.emit('error', new Error());//Объект new Error() будет использован в качестве аргумента throw
//
// //*****
// //Если есть хоть какой-то обработчик - всё работает
// server.on('error', function() {
//
// });
// server.emit('error');
// //*****
// //*****
// server.on('error', function(err) {
// // вот сюда, а здесь мы можем его разобрать
// });
// server.emit('error', new Error("Серверная ошибка"));// Если в .emit передать объект, который описывает,
// //что за ошибка была, то он будет передан в обработчик
//*****
//***************
