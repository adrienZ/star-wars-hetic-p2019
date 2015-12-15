$.getJSON("http://swapi.co/api/planets/1/?format=json", function (data) {
    //    var keys = [];
    //    var values = [];
    var planet_data = data;
    $.each(data, function (key, val) {
        planet_data[key] = key + " : " + val;
    });
    templating($('.planet-weather'), $('#data_planet_template'), planet_data)

});

var eventTest = {
    0: {
        name: "Name of the event",
        link: "https://www.youtube.com/embed/MMiXk34GjqE",
    },
    1: {
        name: "Name of the event",
        link: "https://www.youtube.com/embed/_xP3fI7yn5s",
    },
    2: {
        name: "Name of the event",
        link: "https://www.youtube.com/embed/MMiXk34GjqE",
    },
}

for (i = 0; i < 3; i++) {
    templating($(".three"), $('#data_event_template'), eventTest[i]);
}

$(".round_btn").click(function () {
    console.log(this.getAttribute("data-src"));
    $("body").append('<iframe width="560" height="315" src="' + this.getAttribute("data-src") + '?modestbranding=1&autoplay=1&controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen class=" animated slideInLeft "></iframe>');
    $(".info-panel, .visual-panel").addClass("animated slideOutLeft");
    $("iframe").hover(function (e) {
        e.preventDefault();
    })
})




function templating(parent, source, object) {
    var template = Handlebars.compile(source.html());
    parent.append(template(object));
    console.log(object);
}