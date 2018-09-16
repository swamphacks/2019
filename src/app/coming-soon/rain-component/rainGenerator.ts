// Credit goes to Caleb Millerfor creating the original rain
// Falling rain simulation using 2D canvas
// - vanilla JS, no frameworks
// - framerate independent physics
// - slow-mo / fast-forward support via generator.speed
// - supports high-DPI screens
// - falling rain particles are drawn as vector lines
// - splash particles are lazily pre-rendered so gradients aren't computed each frame
// - all particles make use of object pooling to further boost performance
export class RainGenerator {
	// CUSTOMIZABLE PROPERTIES
	// - physics speed multiplier: allows slowing down or speeding up simulation
	speed: number;
	// - color of particles
	color: {};

	// END CUSTOMIZATION
	// whether generator is running
	started: boolean;
	// canvas and associated context references
	canvas: any;
	ctx: any;
	// viewport dimensions (DIPs)
	width: number;
	height: number;
	// devicePixelRatio alias (should only be used for rendering, physics shouldn't care)
	dpr: number;
	// time since last drop
	drop_time: number;
	// ideal time between drops (changed with mouse/finger)
	drop_delay: number;
	// wind applied to rain (changed with mouse/finger)
	wind: number;
	// color of rain (set in init)
	rain_color: any;
	rain_color_clear: any;
	// rain particles
	rain: Array<any>;
	rain_pool: Array<any>;
	// rain droplet (splash) particles
	drops: Array<any>;
    drop_pool: Array<any>;

	constructor(speed, color, started, canvas, ctx, width, height, dpr, drop_time,
		drop_delay, wind, rain_color, rain_color_clear, rain, rain_pool, drops, drop_pool) {
		this.speed = speed;
		this.color = color;
		this.started = started;
		this.canvas = canvas;
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.dpr = dpr;
		this.drop_time = drop_time;
		this.drop_delay = drop_delay;
		this.wind = wind;
		this.rain_color = rain_color;
		this.rain_color_clear = rain_color_clear;
		this.rain = rain;
		this.rain_pool = rain_pool;
		this.drops = drops;
		this.drop_pool = drop_pool;
	}

	init(canvas) {
		if (!this.started) {
			this.started = true;
			this.canvas = canvas;
			this.ctx = this.canvas.getContext('2d');
			var c = this.color;
			this.rain_color = 'rgba(' + c['r'] + ',' + c['g'] + ',' + c['b'] + ',' + c['a'] + ')';
			this.rain_color_clear = 'rgba(' + c['r'] + ',' + c['g'] + ',' + c['b'] + ',0)';
            this.resize();
			this.Ticker['addListener'](this.step.bind(this));
		}
	}

	stop() {
		if (this.started) {
			this.Ticker['listeners'] = [];
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.started = false;
		}
	}

	restart() {
		if (!this.started) {
			this.started = true;
			this.resize();
			this.Ticker['addListener'](this.step.bind(this));
		}
	}

	draw() {
		// localize common references
		var width = this.width;
		var height = this.height;
		var dpr = this.dpr;
		var rain = this.rain;
		var drops = this.drops;
		var ctx = this.ctx;

		// start fresh
		ctx.clearRect(0, 0, width*dpr, height*dpr);

		// draw rain (trace all paths first, then stroke once)
		ctx.beginPath();
		var rain_height = Rain.height * dpr;
		for (var i = rain.length - 1; i >= 0; i--) {
			var r = rain[i];
			var real_x = r.x * dpr;
			var real_y = r.y * dpr;
			ctx.moveTo(real_x, real_y);
			// magic number 1.5 compensates for lack of trig in drawing angled rain
			ctx.lineTo(real_x - this.wind * r.z * dpr * 1.5, real_y - rain_height * r.z);
		}
		ctx.lineWidth = Rain.width * dpr;
		ctx.strokeStyle = this.rain_color;
		ctx.stroke();

		// draw splash drops (just copy pre-rendered canvas)
		for (var i = drops.length - 1; i >= 0; i--) {
			var d = drops[i];
			var real_x = d.x * dpr - d.radius;
			var real_y = d.y * dpr - d.radius;
			ctx.drawImage(d.canvas, real_x, real_y);
		}
	}

	step(time, lag) {
	// localize common references
	var speed = this.speed;
	var width = this.width;
	var height = this.height;
	var wind = this.wind;
	var rain = this.rain;
	var rain_pool = this.rain_pool;
	var drops = this.drops;
	var drop_pool = this.drop_pool;

	// multiplier for physics
	var multiplier = speed * lag;

	// spawn drops
	this.drop_time += time * speed;
	while (this.drop_time > this.drop_delay) {
		this.drop_time -= this.drop_delay;
		var new_rain = rain_pool.pop() || new Rain(this, 25, false);
		new_rain.init();
		var wind_expand = Math.abs(height / new_rain.speed * wind); // expand spawn width as wind increases
		var spawn_x = Math.random() * (width + wind_expand);
		if (wind > 0) spawn_x -= wind_expand;
		new_rain.x = spawn_x;
		rain.push(new_rain);
	}

	// rain physics
	for (var i = rain.length - 1; i >= 0; i--) {
		var r = rain[i];
		r.y += r.speed * r.z * multiplier;
		r.x += r.z * wind * multiplier;
		// remove rain when out of view
		if (r.y > height) {
			// if rain reached bottom of view, show a splash
			r.splash();
		}
		// recycle rain
		if (r.y > height + Rain.height * r.z || (wind < 0 && r.x < wind) || (wind > 0 && r.x > width + wind)) {
			r.recycle();
			rain.splice(i, 1);
		}
	}

	// splash drop physics
	var drop_max_speed = Drop.max_speed;
	for (var i = drops.length - 1; i >= 0; i--) {
		var d = drops[i];
		d.x += d.speed_x * multiplier;
		d.y += d.speed_y * multiplier;
		// apply gravity - magic number 0.3 represents a faked gravity constant
		d.speed_y += 0.3 * multiplier;
		// apply wind (but scale back the force)
		d.speed_x += wind / 25 * multiplier;
		if (d.speed_x < -drop_max_speed) {
			d.speed_x = -drop_max_speed;
		}else if (d.speed_x > drop_max_speed) {
			d.speed_x = drop_max_speed;
		}
		// recycle
		if (d.y > height + d.radius) {
			d.recycle();
			drops.splice(i, 1);
		}
	}

	this.draw();
	}

	resize() {
		// localize common references
		var rain = this.rain;
        var drops = this.drops;
		// recycle particles
		for (var i = rain.length - 1; i >= 0; i--) {
				rain.pop().recycle();
		}
		for (var i = drops.length - 1; i >= 0; i--) {
				drops.pop().recycle();
		}
		// resize
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.canvas.width = this.width * this.dpr;
		this.canvas.height = this.height * this.dpr;
    }
    
    // Event Handlers
    mouseHandler(evt) {
        let x = evt.clientX;
        let y = evt.clientY;
        x /= this.width;
        // Uncomment for speed up of rain
        // y /= this.height;
        // var y_inverse = (1 - y);
    
        // this.drop_delay = y_inverse*y_inverse*y_inverse * 100 + 2;
        this.wind = (x - 0.5) * 50;
    }

    touchHandler(evt) {
        evt.preventDefault();
        var touch = evt.touches[0];
        let x = touch.clientX;
        let y = touch.clientY;
        x /= this.width;
        // Uncomment for speed up of rain
        // y /= this.height;
        // var y_inverse = (1 - y);
    
        // this.drop_delay = y_inverse*y_inverse*y_inverse * 100 + 2;
        this.wind = (x - 0.5) * 50;
    }

    // Frame ticker helper module
    Ticker = (function(){
        var PUBLIC_API = {};

        // public
        // will call function reference repeatedly once registered, passing elapsed time and a lag multiplier as parameters
		PUBLIC_API['listeners'] = [];
		
		PUBLIC_API['addListener'] = function addListener(fn) {
            if (typeof fn !== 'function') throw('Ticker.addListener() requires a function reference passed in.');

            PUBLIC_API['listeners'].push(fn);

            // start frame-loop lazily
            if (!started) {
                started = true;
                queueFrame();
            }
        };

        // private
        var started = false;
        var last_timestamp = 0;
        // var listeners = [];
        // queue up a new frame (calls frameHandler)
        function queueFrame() {
            if (window.requestAnimationFrame) {
                requestAnimationFrame(frameHandler);
            } else {
                webkitRequestAnimationFrame(frameHandler);
            }
        }
        function frameHandler(timestamp) {
            var frame_time = timestamp - last_timestamp;
            last_timestamp = timestamp;
            // make sure negative time isn't reported (first frame can be whacky)
            if (frame_time < 0) {
                frame_time = 17;
            }
            // - cap minimum framerate to 15fps[~68ms] (assuming 60fps[~17ms] as 'normal')
            else if (frame_time > 68) {
                frame_time = 68;
            }

            // fire custom listeners
            for (var i = 0, len = PUBLIC_API['listeners'].length; i < len; i++) {
                PUBLIC_API['listeners'][i].call(window, frame_time, frame_time / 16.67);
            }
            
            // always queue another frame
            queueFrame();
        }

        return PUBLIC_API;
    }());
}

export class Rain {
    x: number;
	y: number;
	z: number;
	speed: number;
    splashed: boolean;

    static width = 2;
    static height = 40;

    generator: RainGenerator;

    constructor(generator, speed, splashed) {
        this.generator = generator;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.speed = speed;
        this.splashed = splashed;
    }

    init() {
        this.y = Math.random() * -100;
        this.z = Math.random() * 0.5 + 0.5;
        this.splashed = false;
    }

    recycle() {
        this.generator.rain_pool.push(this);
    }

    splash() {
        if (!this.splashed) {
            this.splashed = true;
            var drops = this.generator.drops;
            var drop_pool = this.generator.drop_pool;
    
            for (var i=0; i<16; i++) {
                var drop = drop_pool.pop() || new Drop(this);
                drops.push(drop);
                drop.init(this.x);
            }
        }
    }
}

export class Drop {
    x = 0;
	y = 0;
	speed_x = 0;
    speed_y = 0;
    radius: number;
	canvas: any;
    ctx: any;

    static max_speed = 5;

    generator: RainGenerator;
    
    constructor(rain) {
        this.generator = rain.generator;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.radius = Math.round(Math.random() * 2 + 1) * this.generator.dpr;
        // render once and cache
        var diameter = this.radius * 2;
        this.canvas.width = diameter;
        this.canvas.height = diameter;
        var grd = this.ctx.createRadialGradient(this.radius, this.radius , 1, this.radius, this.radius, this.radius);
        grd.addColorStop(0, this.generator.rain_color);
        grd.addColorStop(1, this.generator.rain_color_clear);
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, diameter, diameter);
    }

    init(x) {
        this.x = x;
        this.y = this.generator.height;
        var angle = Math.random() * Math.PI - (Math.PI * 0.5);
        var speed = Math.random() * Drop.max_speed;
        this.speed_x = Math.sin(angle) * speed;
        this.speed_y = -Math.cos(angle) * speed;
    }

    recycle() {
        this.generator.drop_pool.push(this);
    }
}
