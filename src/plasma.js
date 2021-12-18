import * as PIXI  from 'pixi.js';
import {ColorUtils} from "./utils/colorutils";

class Plasma extends PIXI.Sprite {

    constructor(w,h) {
        super();

        this.plasmaSizeWidth = w;
        this.plasmaSizeHeight = h;
        this.palette = [];
        this.frameCount = 0;
        this._plasmaScale = 1;
        this.divider = 16;

        this.canvas = document.createElement("canvas");
        this.canvas.className = "plasma";
        this.canvas.width = this.plasmaSizeWidth;
        this.canvas.height = this.plasmaSizeHeight;

        this.ctx = this.canvas.getContext('2d');
        this.imageData = this.ctx.getImageData(0, 0, this.plasmaSizeWidth, this.plasmaSizeHeight);
        this.texture = PIXI.Texture.from( this.canvas );
        this._createPalette();
    }


    tick() {
        let curvePointX, curvePointY;
        let t = this.frameCount / 300.0;

        curvePointX = this.plasmaSizeWidth * (Math.cos( t ) + Math.cos(3 * t)) + Math.cos(2 * t) + Math.cos(4 * t);
        // curvePointX = this.plasmaSizeWidth/2 + (this.plasmaSizeWidth/2 * (Math.cos( t )));
        curvePointY = this.plasmaSizeHeight * Math.sin(t) + 10 * Math.sin(3 * t);
        // curvePointY = this.plasmaSizeHeight/2 + (this.plasmaSizeHeight/2 * Math.sin(t));
        this._setPixel( curvePointX, curvePointY, {r:1,g:1,b:1} );

        for (var xpos = 0; xpos < this.plasmaSizeWidth; xpos++) {
            for (var ypos = 0; ypos < this.plasmaSizeHeight; ypos++) {
                var b1 = 64 + (64 * Math.sin( (this.dist(xpos,ypos, curvePointX, curvePointY) ) / (this.divider*3) ) );
                var b2 = 64 + (64 * Math.sin( (ypos+xpos) / this.divider ) );
                var b3 = 64 + (64 * Math.sin( (xpos + this.frameCount) / (this.divider + ( this.divider * Math.cos(this.divider*7) )) ) );
                 var b4 = 64 + (64 * Math.sin( this.dist(xpos, this.frameCount,this.plasmaSizeWidth/2, this.plasmaSizeHeight/2 ) / this.divider ) );
                var b = Math.floor( (b1+b2+b3+b4)/4 );
                // let b = Math.floor( (b1+b2+b4)/3 );
                this._setPixel( xpos, ypos, this.palette[b] );
            }
        }
        this.ctx.putImageData(this.imageData, 0, 0);
        this.texture.update();

        // this._cyclePalette( );
        this.frameCount++;
    }
    
    

    /**
    * dist
    * calculate distance between two points
    */
    dist(xpos, ypos, xpos2, ypos2) {
        return Math.sqrt( Math.pow(xpos-xpos2, 2) + Math.pow(ypos-ypos2, 2) );
    }

    _createPalette() {
        this.palette = [];
        for (let i = 0; i < 256; i++) {
            let step = 360 / 256;
            let tmpCol1 = ColorUtils.HSB2RGB( step*i, 100, 50 + Math.sin(i/16.0) * 50 );
            this.palette.push( tmpCol1 );

            let tmpCol2 = ColorUtils.HSB2RGB( step*i, 100, 50 + Math.sin(step*i/16.0) * 50 );
            this.palette.push( tmpCol2 );

        }
    }

    _cyclePalette() {
        if(this.frameCount%2==0) {
            this.palette.unshift( this.palette.pop() );
        }

    }

    _setPixel( xpos, ypos, rgbcolor ){
        let redidx = ypos * (this.plasmaSizeWidth * 4) + xpos * 4;
        this.imageData.data[ redidx ] = rgbcolor.r * 255;
        this.imageData.data[ redidx + 1 ] = rgbcolor.g *255 ;
        this.imageData.data[ redidx + 2 ] = rgbcolor.b * 255;
        this.imageData.data[ redidx + 3 ] = 255;
    }
}

export { Plasma }
