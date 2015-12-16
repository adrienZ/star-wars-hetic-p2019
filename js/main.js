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


var index = 0;
var planets = [{
        name: "Endor",
        x: 1.8,
        y: 4.4,
        img: "http://orig11.deviantart.net/1cc1/f/2007/323/8/2/endor_by_shigimicu.jpg",
        events: [],
        events_src: [],
        pos: index++,
        id: 7,
        three_d: "../img/tatooine_3d.png",

}, {
        name: "Bespin",
        x: 1.9,
        y: 4.8,
        img: "http://www.starwars-chronicles.com/images/Locations_Large/Bespin.jpg",
        events: [],
        events_src: [],
        pos: index++,
        id: 6,
}, {
        name: "Hoth",
        x: 1.7,
        y: 5.2,
        img: "http://vignette2.wikia.nocookie.net/swtor/images/d/d1/Hoth.jpg/revision/latest?cb=20100720144834",
        events: [],
        events_src: [],
        pos: index++,
        id: 4,
}, {
        name: "Polis Massa",
        x: 2.4,
        y: 5.4,
        img: "http://vignette3.wikia.nocookie.net/starwars/images/2/22/PolisMassaNEGAS.jpg/revision/latest?cb=20061119201146",
        events: [],
        events_src: [],
        pos: index++,
        id: 15,

}, {
        name: "Mustafar",
        x: 2.5,
        y: 5.1,
        img: "http://vignette2.wikia.nocookie.net/starwars/images/4/46/Mustafar.png/revision/latest?cb=20140321174124",
        events: [],
        events_src: [],
        pos: index++,
        id: 13,

}, {
        name: "Utapau",
        x: 3.1,
        y: 5.7,
        img: "http://vignette4.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png/revision/latest?cb=20130211061602",
        events: [],
        events_src: [],
        pos: index++,
        id: 12,

}, {
        name: "Dagobah",
        x: 3.2,
        y: 5.6,
        img: "http://vignette1.wikia.nocookie.net/fr.starwars/images/1/1c/Dagobah.jpg/revision/latest?cb=20150220140000",
        events: [],
        events_src: [],
        pos: index++,
        id: 5,

}, {
        name: "Naboo",
        x: 4.1,
        y: 4.9,
        img: "http://vignette1.wikia.nocookie.net/starwars/images/2/24/NabooFull-SW.png/revision/latest?cb=20131223053139",
        events: [],
        events_src: [],
        pos: index++,
        id: 8,

}, {
        name: "Corrusant",
        x: 4.7,
        y: 2.6,
        img: "http://vignette1.wikia.nocookie.net/theforceunleashed/images/e/ec/Coruscant.jpg/revision/latest?cb=20121207232020&path-prefix=en",
        events: [],
        events_src: [],
        pos: index++,
        id: 9,


}, {
        name: "Mygeeto",
        x: 5.6,
        y: 1.4,
        img: "http://vignette3.wikia.nocookie.net/fr.starwars/images/e/ee/Mygeeto.jpg/revision/latest?cb=20150312140158",
        events: [],
        events_src: [],
        pos: index++,
        id: 16,
}, {
        name: "Alderan",
        x: 5.5,
        y: 2.8,
        img: "http://vignette1.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805",
        events: [],
        events_src: [],
        pos: index++,
        id: 2,

}, {
        name: "Cato Nemoidia",
        x: 5.5,
        y: 3.1,
        img: "http://img1.starwars-holonet.com/holonet/dictionnaire/photos/planete_cato_neimoidia.jpg",
        events: [],
        events_src: [],
        pos: index++,
        id: 18,

}, {
        name: "Kamino",
        x: 5.8,
        y: 4.7,
        img: "http://vignette2.wikia.nocookie.net/swfanon/images/6/6b/Kamino_planet.jpg/revision/20070218002840",
        events: [],
        events_src: [],
        pos: index++,
        id: 10,
        three_d: "../img/tatooine_3d.png",

}, {
        name: "Tatooine",
        x: 5,
        y: 5.2,
        img: "http://vignette2.wikia.nocookie.net/starwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131019121937",
        events: [],
        events_src: [],
        pos: index++,
        id: 1,

}, {
        name: "Geonosis",
        x: 5.1,
        y: 5.5,
        img: "http://41.media.tumblr.com/d57f1cdcd9a17ea97c35023784dae89b/tumblr_no39yl40x51utlj9oo1_1280.jpg",
        events: [],
        events_src: [],
        pos: index++,
        id: 11,

}, {
        name: "Yavin IV",
        x: 6.5,
        y: 1.8,
        img: "http://vignette4.wikia.nocookie.net/fr.starwars/images/5/5f/Yavin_4.jpg/revision/latest?cb=20150613152619",
        events: [],
        events_src: [],
        pos: index++,
        id: 3,

}, {
        name: "Kashyyyk",
        x: 6.4,
        y: 3.5,
        img: "http://vignette3.wikia.nocookie.net/sw1mush/images/8/88/Planet_kashyyyk.jpg/revision/latest?cb=20060228194831",
        events: [],
        events_src: [],
        pos: index++,
        id: 14,

}, {
        name: "Felucia",
        x: 7.2,
        y: 2.3,
        img: "http://img2.wikia.nocookie.net/__cb20090904232410/starwars/images/thumb/d/dc/Felucia_tcw.jpg/500px-Felucia_tcw.jpg",
        events: [],
        events_src: [],
        pos: index++,
        id: 17,

    },
    {
        name: "Saleucami",
        x: 3.7,
        y: 7,
        img: "http://vignette2.wikia.nocookie.net/fr.starwars/images/7/75/Saleucami.jpg/revision/latest?cb=20150206135412",
        events: [],
        events_src: [],
        pos: index++,
        id: 19,
    }];

planets.forEach(function (position) {
    position.x *= 110;

    position.y *= 110;
    position.y -= 100;

    templating(ø.el(".galaxy"), ø.id("template-planets"), position)
});



function templating(parent, source, object) {
    var template = Handlebars.compile(source.innerHTML);
    parent.innerHTML += template(object);
}
var to_ui = ["translateX(-100%) translateZ(0) translate3d(0, 0, 0)", "translateX(-0%) translateY(-100%) translateZ(0) translate3d(0, 0, 0)"];
var to_map = ["translateX(-0%) translateZ(0) translate3d(0, 0, 0)", "translateX(-0%) translateY(0%) translateZ(0) translate3d(0, 0, 0)"];

ø.id("return").addEventListener("click", function () {
    ø.el(".galaxy").style.transform = to_map[0];
    ø.el(".zoom").style.transform = to_map[1];
    ø.el(".planet-weather").innerHTML = "";
    ø.el(".planet-name").innerHTML = "<span></span><span></span>";
});

for (var t = 0; t < ø.all("img").length; t++) {

    ø.all("img")[t].addEventListener("click", function (e) {
        console.log(this.getAttribute("data-index"));
        var array_index = this.getAttribute("data-index");
        $.getJSON("http://swapi.co/api/planets/" + this.getAttribute("data-id") + "/?format=json", function (data) {
            var planet_data = data;
            ø.el(".planet-name").innerHTML += "<p>" + data.name + "</p>";

            for (var key in planet_data) {
                planet_data[key] = key + " : " + planet_data[key];
            }
            templating(ø.el('.planet-weather'), ø.id('data_planet_template'), planet_data);


            var renderer, scene, camera, mesh;

            init();
            animate();

            function init() {
                // on initialise le moteur de rendu
                renderer = new THREE.WebGLRenderer();

                // si WebGL ne fonctionne pas sur votre navigateur vous pouvez utiliser le moteur de rendu Canvas à la place
                // renderer = new THREE.CanvasRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                ø.el('.visual-panel').appendChild(renderer.domElement);

                // on initialise la scène
                scene = new THREE.Scene();

                // on initialise la camera que l’on place ensuite sur la scène
                camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
                camera.position.set(0, 0, 1000);
                scene.add(camera);

                // on créé la sphère et on lui applique une texture sous forme d’image
                var three_src = planets[array_index].three_d;
                var geometry = new THREE.SphereGeometry(200, 32, 32);
                var material = new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture(three_src, new THREE.SphericalReflectionMapping()),
                    overdraw: true,

                });
                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                // on ajoute une lumière blanche
                var lumiere = new THREE.DirectionalLight(0xffffff, 1.0);
                lumiere.position.set(0, 0, 400);
                scene.add(lumiere);

            }

            function animate() {
                requestAnimationFrame(animate);
                mesh.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
        });
        ø.el(".galaxy").style.transform = to_ui[0];
        ø.el(".zoom").style.transform = to_ui[1];
        ø.el(".galaxy").style.webkitTransform = to_ui[0];
        ø.el(".zoom").style.webkitTransform = to_ui[1];
    });




}
ø.el(".info-panel").addEventListener("click", function () {
    ø.el(".info-panel").classList.toggle("hide");
});