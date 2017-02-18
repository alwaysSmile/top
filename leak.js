//Это встроенное средство для борьбы с утечками памяти
//*****
// function Request() {
//     var self = this;
//     //В this.bigData находится что-то, чтобы было видно сколько памяти съедается
//     this.bigData = new Array(1e6).join('*');
//
//     this.send = function (data) {
//         console.log(data);
//     };
//
//     this.onError = function () {
//         self.send("извините у нас проблема")
//     }
// }
// //Каждые 200млс выводится объект типа request и выводится текушее поедание памяти
// setInterval(function () {
//     var request = new Request();
//     console.log(process.memoryUsage().heapUsed)
// }, 200);
//*****
//*****
//В данном примере db объект источника данных, который может посылать какую-то информацию,
//которую request, в свою очередь, может пересылать клиенту
var EventEmitter = require('events').EventEmitter;
var db = new EventEmitter();

function Request() {
    var self = this;
    //В this.bigData находится что-то, чтобы было видно сколько памяти съедается
    this.bigData = new Array(1e6).join('*');

    this.send = function (data) {
        console.log(data);
    };

    function onData () {
        self.send(info);
    }

    this.end = function () {
        db.removeListener('data', onData)
    };

    db.on('data', onData)
}
//Каждые 200млс выводится объект типа request и выводится текушее поедание памяти
setInterval(function () {
    var request = new Request();
    request.end();
    console.log(process.memoryUsage().heapUsed)
    console.log(db)
}, 200);
//*****
