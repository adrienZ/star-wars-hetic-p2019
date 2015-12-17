//Multiple Variable Declaration
// DOM selector shortener method
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
    },
    //setting index of planets's array
    index = 0,
    // kinda json on client slide; x & y stand for coords
    planets = [{
        name: "Endor",
        x: 1.7,
        y: 4.3,
        img: "../star-wars/img/2d/endor.png",
        pos: index++,
        id: 7,
        three_d: "../star-wars/img/3d/endor.png",
}, {
        name: "Bespin",
        x: 1.9,
        y: 4.8,
        img: "../star-wars/img/2d/bespin.png",
        three_d: "../star-wars/img/3d/bespin.png",
        pos: index++,
        id: 6,
}, {
        name: "Hoth",
        x: 1.6,
        y: 5.3,
        img: "../star-wars/img/2d/hoth.png",
        three_d: "../star-wars/img/3d/hoth.png",
        pos: index++,
        id: 4,
}, {
        name: "Polis Massa",
        x: 2.3,
        y: 5.5,
        img: "../star-wars/img/2d/polis_massa.png",
        three_d: "../star-wars/img/3d/polis_massa.png",
        pos: index++,
        id: 15,
}, {
        name: "Mustafar",
        x: 2.6,
        y: 5.0,
        img: "../star-wars/img/2d/mustafar.png",
        three_d: "../star-wars/img/3d/mustafar.png",
        pos: index++,
        id: 13,
}, {
        name: "Utapau",
        x: 3.1,
        y: 5.7,
        img: "../star-wars/img/2d/utapau.png",
        three_d: "../star-wars/img/3d/utapau.png",
        pos: index++,
        id: 12,
}, {
        name: "Dagobah",
        x: 3.2,
        y: 5.6,
        img: "../star-wars/img/2d/dagobah.png",
        three_d: "../star-wars/img/3d/dagobah.png",
        pos: index++,
        id: 5,
}, {
        name: "Naboo",
        x: 4.1,
        y: 4.9,
        img: "../star-wars/img/2d/naboo.png",
        three_d: "../star-wars/img/3d/naboo.png",
        pos: index++,
        id: 8,
}, {
        name: "Corusant",
        x: 4.7,
        y: 2.6,
        img: "../star-wars/img/2d/corusant.png",
        three_d: "../star-wars/img/3d/corusant.png",
        pos: index++,
        id: 9,
}, {
        name: "Mygeeto",
        x: 5.6,
        y: 1.4,
        img: "../star-wars/img/2d/mygeeto.png",
        three_d: "../star-wars/img/3d/mygeeto.png",
        pos: index++,
        id: 16,
}, {
        name: "Aldeeran",
        x: 5.5,
        y: 2.8,
        img: "../star-wars/img/2d/alderaan.png",
        three_d: "../star-wars/img/3d/aldeeran.png",
        pos: index++,
        id: 2,
}, {
        name: "Cato Neimoidia",
        x: 5.5,
        y: 3.1,
        img: "../star-wars/img/2d/cato_neimoidia.png",
        three_d: "../star-wars/img/3d/cato_neimoidia.png",
        pos: index++,
        id: 18,
}, {
        name: "Kamino",
        x: 5.8,
        y: 4.7,
        img: "../star-wars/img/2d/kamino.png",
        three_d: "../star-wars/img/3d/kamino.png",
        pos: index++,
        id: 10,
        three_d: "../star-wars/img/tatooine_3d.png",
}, {
        name: "Tatooine",
        x: 5,
        y: 5.2,
        img: "../star-wars/img/2d/tatooine.png",
        three_d: "../star-wars/img/3d/tatooine.png",
        pos: index++,
        id: 1,
}, {
        name: "Geonosis",
        x: 5.1,
        y: 5.5,
        img: "../star-wars/img/2d/geonosis.png",
        three_d: "../star-wars/img/3d/geonosis.png",
        pos: index++,
        id: 11,
}, {
        name: "Yavin IV",
        x: 6.5,
        y: 1.8,
        img: "../star-wars/img/2d/yavin_iv.png",
        three_d: "../star-wars/img/3d/yavin°iv.png",


        pos: index++,
        id: 3,
}, {
        name: "Kashyyyk",
        x: 6.4,
        y: 3.5,
        img: "../star-wars/img/2d/kashyyyk.png",
        three_d: "../star-wars/img/3d/kashyyyk.png",
        pos: index++,
        id: 14,
}, {
        name: "Felucia",
        x: 7.2,
        y: 2.3,
        img: "../star-wars/img/2d/felucia.png",
        three_d: "../star-wars/img/3d/felucia.png",
        pos: index++,
        id: 17,
}, {
        name: "Saleucami",
        x: 3.7,
        y: 7,
        img: "../star-wars/img/2d/saleucami.png",
        three_d: "../star-wars/img/3d/saleucami.png",
        pos: index++,
        id: 19,
}],
    //interactions
    to_ui = ["translateX(-100%) translateZ(0) translate3d(0, 0, 0)", "translateX(-0%) translateY(-100%) translateZ(0) translate3d(0, 0, 0)"],
    to_map = ["translateX(-0%) translateZ(0) translate3d(0, 0, 0)", "translateX(-0%) translateY(0%) translateZ(0) translate3d(0, 0, 0)"];


// Inject Planets in DOM with their coords (not responsive)
planets.forEach(function (position) {
    position.name = position.name.toLowerCase().replace(/\s/, "_");
    position.x *= 110;
    position.y *= 110;
    position.y -= 100;
    templating(ø.el(".galaxy"), ø.id("template-planets"), position);
});


//shortener for handlebars.js
function templating(parent, source, object) {
    var template = Handlebars.compile(source.innerHTML);
    parent.innerHTML += template(object);
}



//reboot planet's ui
ø.id("return").addEventListener("click", function () {
    ø.el(".galaxy").style.transform = to_map[0];
    ø.el(".zoom").style.transform = to_map[1];
    ø.el(".planet-weather").innerHTML = "";
    ø.el(".planet-name").innerHTML = "<span></span><span></span>";
    ø.el(".event-panel").innerHTML = "";
    ø.el(".visual-panel").innerHTML = "";

});

//when you click on a planet
for (var t = 0; t < ø.all(".planets img").length; t++) {
    ø.all(".planets img")[t].addEventListener("click", function (e) {


        // i need theses datas for later
        var array_index = this.getAttribute("data-index");
        var data_viz = this.getAttribute("data-viz");
        var api_call = this.getAttribute("id");


        // first API call, getting data of the planet from swapi.com 
        $.getJSON("http://swapi.co/api/planets/" + this.getAttribute("data-id") + "/?format=json", function (data) {
            var planet_data = data;
            ø.el(".planet-name").innerHTML += "<p>" + data.name + "</p>";
            for (var key in planet_data) {
                planet_data[key] = key + " : " + planet_data[key];
            }
            // using handlebars.js : from data to DOM
            templating(ø.el('.planet-weather'), ø.id('data_planet_template'), planet_data);



            // Second API Call from our own API and get the best moment on the current planet
            $.getJSON("http://adrienzaganelli.com/star-wars/api/" + api_call + ".json", function (data) {
                var x = 0; //debug

                //the following code is not very good, i could use one data to read all the events if i had more time
                // first formating
                var events = {};
                for (var i in data[api_call]) {
                    //console.log(data[api_call][i], Object.keys(data[api_call])[x]);
                    events[x] = data[api_call][i] + "XXX" + Object.keys(data[api_call])[x];
                    events[x] = events[x].split("XXX");
                    x++;
                    //console.log(events);
                }
                x = 0; //debug



                //console.log(Object.keys(events).length, events);
                // second data formating
                var events_all = {};
                for (var j = 0; j < Object.keys(events).length; j++) {
                    events_all[j] = {
                        link: events[j][0],
                        name: events[j][1],
                    };
                }
                //templating each events with handlebars.js
                for (i = 0; i < Object.keys(events).length; i++) {
                    templating(ø.el(".event-panel"), ø.id('data_event_template'), events_all[i]);
                }





                // THREE JS PART, Thanks to this demo : http://www.alsacreations.com/tuto/lire/1572-webgl-3d-three-canvas-threejs.html
                var renderer, scene, camera, mesh;

                init();
                animate();

                function init() {
                    // boot WebGL
                    renderer = new THREE.WebGLRenderer();
                    // else make canvas
                    // renderer = new THREE.CanvasRenderer();


                    // set size of canvas and parent node
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    document.querySelector('.visual-panel').appendChild(renderer.domElement);

                    // create scene
                    scene = new THREE.Scene();

                    // camera
                    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
                    camera.position.set(0, 0, 1000);
                    scene.add(camera);

                    // create 3D Sphere with planet texture 
                    var geometry = new THREE.SphereGeometry(200, 32, 32);
                    console.log(data_viz);
                    var material = new THREE.MeshBasicMaterial({
                        map: THREE.ImageUtils.loadTexture(data_viz, new THREE.SphericalReflectionMapping()),
                        overdraw: true
                    });
                    mesh = new THREE.Mesh(geometry, material);
                    scene.add(mesh);

                }

                //rotating animation
                function animate() {
                    requestAnimationFrame(animate);
                    mesh.rotation.y += 0.01;
                    renderer.render(scene, camera);
                }





                for (var i = 0; i < ø.all(".round_btn").length; i++) {

                    ø.all(".round_btn")[i].addEventListener("click", function () {
                        console.clear();
                        ø.el(".video").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.getAttribute("data-src") + '?modestbranding=1&autoplay=1&controls=1&showinfo=0&rel=0" frameborder="0" allowfullscreen class=" animated slideInLeft "></iframe>';
                        ø.el(".video").style.visibility = "visible";
                        ø.el(".close").style.visibility = "visible";
                        ø.el("#return").style.visibility = "hidden";


                        ø.el(".close").addEventListener("click", function () {
                            ø.el("iframe").remove();
                            ø.el(".video").style.visibility = "hidden";
                            ø.el(".close").style.visibility = "hidden";
                            ø.el("#return").style.visibility = "visible";


                        });
                    });
                }
            });


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