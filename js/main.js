var yavin = {
    x: 1,
    y: 1,
    color: "green",
};


var naboo = {
    x: 9,
    y: 8,
}

var mustafar = {
    x: 2,
    y: 8,
}


for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 40; j++) {

        if (i == yavin.y && j === yavin.x) {
            $(".map").append('<div class="yavin" id="col_' + yavin.x + 'line_' + yavin.y + '"></div>');

        } else if (i == naboo.y && j === naboo.x) {
            $(".map").append('<div class="naboo" id="col_' + naboo.x + 'line_' + naboo.y + '"></div>');

        } else if (i == mustafar.y && j === mustafar.x) {
            $(".map").append('<div class="mustafar" id="col_' + mustafar.x + 'line_' + mustafar.y + '"></div>');

        } else {
            $(".map").append('<div class="case" id="col_' + j + 'line_' + i + '"></div>');

        }
    }
    $(".map").append('<br>');

}