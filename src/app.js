import * as PIXI  from 'pixi.js';
import { LEDmatrix } from "./ledmatrix.js";
import { Scrolltext } from "./scrolltext.js";
import { Plasma } from "./plasma.js";
import {AdvancedBloomFilter} from '@pixi/filter-advanced-bloom';
import Stats from 'stats.js'
import * as dat from 'dat.gui';

let scale           = 100;
let w               = 16 * scale;
let h               = 9 * scale;
let res_x           = 64;
let bloomOptions    = {threshold:0.07, bloomScale:3.3, blur:8, brightness:1.3};
let stats = null;

// pixi app
let app = new PIXI.Application({width: w, height: h});

// input sources
let scrolltext  = new Scrolltext();
scrolltext.activateDisplacement();

let plasma = new Plasma(res_x, (h/w) * res_x);


// LED Matrix
let leds                = new LEDmatrix( w, h, res_x, plasma );
leds.showHelpercanvases();
app.stage.addChild( leds.getScreenbuffer() );
let bloomfilter = new AdvancedBloomFilter( bloomOptions )
app.stage.filters = [ bloomfilter ];

setUpDebugTools();

// renderloop
app.ticker.add( function(delta) {
    scrolltext.move();
    plasma.tick();
    leds.render();
    stats.update()
} );

//Add the canvas that Pixi automatically created for you to the HTML document.
var appHolder = document.createElement('div');
appHolder.className = 'app';
document.getElementsByTagName('body')[0].appendChild(appHolder);

appHolder.appendChild( app.view );



function setUpDebugTools() {
    // Dat.GUI
    let gui = new dat.GUI();
    gui.add(bloomfilter,    'threshold', 0.0, 1.0);
    gui.add(bloomfilter,    'bloomScale', 0, 5);
    gui.add(bloomfilter,    'blur', 0, 30);
    gui.add(bloomfilter,    'brightness', 0, 3);
    gui.add(leds,           'dotDistance', -2, 2);
    gui.add(leds,           'dotSizeRatio', 0, 2);
    gui.add(leds,           'useSwappingOffset', false, true);
    gui.add(leds,           'channelRedActive', false, true);
    gui.add(leds,           'channelBlueActive', false, true);
    gui.add(leds,           'channelGreenActive', false, true);
    gui.addColor(leds,      'tintRed');
    gui.addColor(leds,      'tintBlue');
    gui.addColor(leds,      'tintGreen');
    gui.add(plasma,      'divider', 8, 265);


// FPS Meter
    stats = Stats()
    document.body.appendChild(stats.dom)
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild( stats.dom );
    stats.dom.style.left = "0px";
    stats.dom.style.right = "auto";
}