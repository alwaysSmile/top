var util = require('util');
var phrases = {
    "Hello": "Привет",
    "world": "мир"
};

//message
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);//Эта команда получает текущий стек,
    //последовательность сложенных вызовов, которые привели к текущему месту кода
    //и сожраняет его в this, т.е в объекте ошибки, чтобы вывести более конкретно -
    //нужно указать второй параметр, в нашем случае PhraseError - пример: Error.captureStackTrace(this, PhraseError)
    //второй параметр, в нашем случае PhraseError - это функция, до которой будет собираться стектрейс
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
};

util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError'

function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError("Нет такой фразы: " + name);
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html') {
        throw new HttpError(404, "Нет такой страницы");
    }
    return util.format("%s, %s!", getPhrase("*****"), getPhrase("world"));
}

try {
    var page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message)
    }
    else {
        console.error("Ошибка %s\n сообщение: %s\n стек %s", e.name, e.message, e.stack);
    }
}