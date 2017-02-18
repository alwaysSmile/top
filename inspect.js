var util = require('util');
//***********************
//var obj = {
//    a: 5,
//    b: 6,
//    inspect: function() {
//        return 123;
//    }
//};
//obj.self = obj;
////util.inspect(obj) - позволяет "красиво" вывести любой объект,
////даже если у этого объекта есть ссылка на самого себя, при этом,
////если у этого объекта есть метод, то его результат будет возвращён
//console.log(util.inspect(obj));
////этод метод используется консолью автоматическм,
////если она хочет залогировать какой-то объект,
////пример ниже выведет тоже самое(консоль вызывает его внутри)
////console.log(obj);
//***********************
//***********************
//var str = util.format("My %s %d %j", "string", 123, {test: "obj"});
////%s - выведет "string"
////%d - выведет 123
////%j - выведет объект в формате JSON {test: "obj"}
//console.log(str);
//***********************
//***********************
//Родитель
//function Animal(name) {
//    this.name = name;
//};
//
//Animal.prototype.walk = function () {
//    console.log("Ходит " + this.name);
//};
//
////Потомок
//function Rabbit(name) {
//    this.name = name;
//};
//
//util.inherits(Rabbit, Animal);//Rabbit наследует у Animal все свойства
//
//Rabbit.prototype.jump = function () {
//    console.log("Прыгает " + this.name);
//};
//
////Использование
//var rabbit = new Rabbit("Наш кролик");
//rabbit.walk();
//rabbit.jump();
//***********************

