/*
	SET UP
*/

var canvas = document.querySelector('.canvas'),
    context = canvas.getContext('2d'),
    w = canvas.width,
    h = canvas.height,
    center = {
        x: w / 2,
        y: h / 2
    },
    particles = [],
    total = w;


context.lineWidth = 10;
context.lineCap = 'round';

var bgColor = "rgba(0,0,0,0.4)";

/*
	CREATE PARTICLES
*/

function create_particle() {
    var particle = {};
    particle.x = center.x;
    particle.y = center.y;
    particle.speed = {};
    particle.speed.x = Math.random() - 0.5;
    particle.speed.y = Math.random() - 0.5;
    particle.style = 'white';
    particle.frame = 1;
    particle.radius = 20;

    particles.push(particle);
}

/*
	DRAW
*/
var click_report = '';

function draw() {
    window.addEventListener('mousedown', function () {
        click_report = true;
    });

    window.addEventListener('mouseup', function () {
        click_report = false;
    });

    if (!click_report)
        context.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {

        var particle = particles[i];

        particle.frame += 0.00000001;
        particle.speed.x *= particle.frame;
        particle.speed.y *= particle.frame;
        particle.x += particle.speed.x;
        particle.y += particle.speed.y;

        context.beginPath();
        context.rect(particle.x, particle.y, 1.5 * 2, 1.5 * 2);
        context.fillStyle = particle.style;
        context.fill();
        context.beginPath();
        context.arc(center.x, center.y, 25, 0, Math.PI * 2);
        context.fillStyle = 'black';
        context.fill();
    }
}

/*
	LOOP
*/

function loop() {
    window.requestAnimationFrame(loop);

    for (var i = 0; i < particles.length; ++i) {
        draw();
        if (particles[i].y < 0 || particles[i].y > h || particles[i].x < 0 || particles[i].x > w) {
            particles.splice(i, 1);
        }
    }
    if (particles.length < total)
        create_particle();
    context.fillStyle = bgColor;
    context.fillRect(0, 0, w, h);
}

loop();