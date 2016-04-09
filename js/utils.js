var randomGrey = function () {
    var ran = Math.floor(Math.random() * 100) + 50;
    return color(ran, ran, ran);
}

var randomColour = function () {
    return color(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
}