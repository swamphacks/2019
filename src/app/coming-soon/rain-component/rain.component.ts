import { Component, OnInit } from '@angular/core';
import { RainGenerator } from './rainGenerator';

@Component({
  selector: 'rain-component',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.css'],
})
export class RainComponent implements OnInit {

	rainGenerator: RainGenerator;

	constructor() {
		let speed = 1;
		// let color = {
		// 	r: '80',
		// 	g: '175',
		// 	b: '255',
		// 	a: '0.5'
		// };
		let color = {
			r: '47',
			g: '80',
			b: '132',
			a: '0.5'
		};
		let started = false;
		let canvas = null;
		let ctx = null;
		let width = 0;
		let height = 0;
		let dpr = window.devicePixelRatio || 1;
		let drop_time = 0;
		let drop_delay = 25;
		let wind = 4;
		let rain_color = null;
		let rain_color_clear = null;
		let rain = [];
		let rain_pool = [];
		let drops = [];
		let drop_pool = [];

		this.rainGenerator = new RainGenerator(speed, color, started, canvas, ctx, width, height,
			dpr, drop_time, drop_delay, wind, rain_color, rain_color_clear, rain, rain_pool,
			drops, drop_pool);
	}

	ngOnInit() {
	}

	ngAfterContentInit() {
		document.addEventListener("DOMContentLoaded", function() {
			setTimeout(function(){
				this.rainGenerator.init(document.getElementById('canvas'));
			}.bind(this), 2000);
			window.addEventListener('resize', this.rainGenerator.resize.bind(this.rainGenerator));
		}.bind(this));

		document.addEventListener('mousemove', this.rainGenerator.mouseHandler.bind(this.rainGenerator));
		document.addEventListener('touchstart', this.rainGenerator.touchHandler.bind(this.rainGenerator));
		document.addEventListener('touchmove', this.rainGenerator.touchHandler.bind(this.rainGenerator));
	}
}
