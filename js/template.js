var ø = {
    id: function (id) {
        return document.getElementById(id);
    },
    el: function (el) {
        return document.querySelector(el);
    },
    class: function (el) {
        return document.getElementsByClassName(elClass);
    },
    tag: function (el) {
        return document.getElementsByTagName(tag);
    },
    all: function (el) {
        return document.querySelectorAll(el);
    },
};
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
    templating(ø.el(".event-panel"), ø.id('data_event_template'), eventTest[i]);
}

ø.el(".round_btn").addEventListener("click", function () {
    ø.el("body").innerHTML += '<iframe width="560" height="315" src="' + this.getAttribute("data-src") + '?modestbranding=1&autoplay=1&controls=0&showinfo=0&rel=0" frameborder="0" allowfullscreen class=" animated slideInLeft "></iframe>';
    ø.el(".info-panel").classList.add("animated", "slideOutLeft");
    ø.el(" .visual-panel").classList.add("animated", "slideOutLeft");


});




function templating(parent, source, object) {
    var template = Handlebars.compile(source.innerHTML);
    parent.innerHTML += template(object);
}


ø.el(".info-panel").addEventListener("click", function () {
    ø.el(".info-panel").classList.toggle("hide");
});