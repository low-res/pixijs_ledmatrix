import * as PIXI  from 'pixi.js';

class LEDmatrix {

    constructor( width, height, resolution_x, inputsrc ) {
        this.screenbuffer           = new PIXI.Container();

        this.renderer               = PIXI.autoDetectRenderer();
        this.inputsrc               = inputsrc;
        this.texture_led            = PIXI.Texture.from('assets/texture_led.png');
        this.leds                   = [];
        this.useSwappingOffset      = false;
        this.channelRedActive       = true;
        this.channelBlueActive      = true;
        this.channelGreenActive     = true;

        this.resolution_x           = Math.floor( resolution_x );
        this.resolution_y           = Math.floor( this.resolution_x / (width/height) );
        this.ledCellSize	        = width / this.resolution_x;
        this.dotSizeRatio           = 1.3;
        this.dotDistance	        = 0.73;

        this.tintRed                = 0x9f0000;
        this.tintGreen              = 0x009f00;
        this.tintBlue               = 0x00009f;

        // Helper canvases
        this.scaledInputSrc         = document.createElement('canvas');
        this.scaledInputSrc.width   = this.resolution_x;
        this.scaledInputSrc.height  = this.resolution_y;
        this.scaledInputSrcCtx      = this.scaledInputSrc.getContext('2d');

        this.unscaledInputSrc         = document.createElement('canvas');
        this.unscaledInputSrcCtx      = this.unscaledInputSrc.getContext('2d');

        this._initLEDs();
    }

    render() {
        let color;
        let r;
        let g;
        let b;

        let x;
        let y;

        let rPercent;
        let gPercent;
        let bPercent;

        let inputImageData = this.getInputImageData().data;
        //console.log( inputImageData.length, this.leds.length );
        let ledidx  = 0;
        let idx     = 0;
        let sprite_r, sprite_g, sprite_b;

        for(idx=0; idx < inputImageData.length; idx+=4) {
            rPercent 	= inputImageData[idx];
            gPercent 	= inputImageData[idx+1];
            bPercent 	= inputImageData[idx+2];

            r = (rPercent << 16);
            g = (gPercent << 8);
            b = (bPercent);

            sprite_r = this.leds[ledidx];
            sprite_g = this.leds[ledidx+1];
            sprite_b = this.leds[ledidx+2];

            sprite_r.alpha = this.channelRedActive ? rPercent/255 : 0;
            sprite_g.alpha = this.channelGreenActive ? gPercent/255 : 0;
            sprite_b.alpha = this.channelBlueActive ? bPercent/255 : 0;
            this._setLedGeometry(ledidx);
            ledidx += 3;
        }
    }


    _setLedGeometry( red_led_index ) {
        let sprite_r, sprite_g, sprite_b;

        sprite_r = this.leds[red_led_index];
        sprite_g = this.leds[red_led_index+1];
        sprite_b = this.leds[red_led_index+2];

        let dotRadius = this.ledCellSize / this.dotSizeRatio;

        // coords - position of middle of cell
        let i       = (red_led_index/3) % this.resolution_x;
        let j       = Math.floor( red_led_index / 3 / this.resolution_x );

        let x       = i * this.ledCellSize;
        let y       = j * this.ledCellSize;

        let offset  = (dotRadius * this.dotDistance);
        if( this.useSwappingOffset && j % 2 == 0 ) offset *= -1; // swap led orientation each line

        sprite_r.x      = x;
        sprite_r.y      = y - offset;
        sprite_r.width  = dotRadius;
        sprite_r.height = dotRadius;
        sprite_r.tint   = this.tintRed;

        sprite_g.x      = x - offset;
        sprite_g.y      = y + offset;
        sprite_g.width  = dotRadius;
        sprite_g.height = dotRadius;
        sprite_g.tint   = this.tintGreen;

        sprite_b.x      = x + offset;
        sprite_b.y      = y + offset;
        sprite_b.width  = dotRadius;
        sprite_b.height = dotRadius;
        sprite_b.tint   = this.tintBlue;
    }


    getInputImageData() {
        let origBounds      = this.inputsrc.getBounds();
        if(this.inputsrc._mask) {
            origBounds      = this.inputsrc._mask.getBounds();
        }

        // clear img
        this._clearHelperCanvases();

        // store dimensions and aspect tratio
        let origimg_width   = origBounds.width;
        let origimg_height  = origBounds.height;
        let destHeight      = this.resolution_x / (origimg_width / origimg_height); // keep aspect ratio of original pic

        // get a snapshot of the input src
        let tmpCanvas       = this.renderer.plugins.extract.canvas(this.inputsrc);

        // draw input source object to unscaled canvas (it may be, that the extracted canvas has differenz dimensions (if a lot of white space is around the motive))
        this.unscaledInputSrc.width   = origimg_width;
        this.unscaledInputSrc.height  = origimg_height;
        this.unscaledInputSrcCtx.drawImage(tmpCanvas,0,0);

        // now draw into the canvas that represents the single leds
        this.scaledInputSrcCtx.drawImage(
            this.unscaledInputSrc,
            0, 0, this.unscaledInputSrc.width, this.unscaledInputSrc.height,
            0, 0, this.resolution_x, destHeight
        );

        let imageData  = this.scaledInputSrcCtx.getImageData(0, 0, this.resolution_x, this.resolution_y);

        return imageData;
    }


    showHelpercanvases() {
        document.body.appendChild( this.scaledInputSrc );
        document.body.appendChild( this.unscaledInputSrc );
        this.scaledInputSrc.style.cssText = "position: fixed; top: 0px; left: 150px; cursor: pointer; opacity: 0.9; z-index: 10000;"
        this.unscaledInputSrc.style.cssText = "position: fixed; top: 0px; left: 350px; cursor: pointer; opacity: 0.9; z-index: 10000;"
    }


    getScreenbuffer() {
        return this.screenbuffer;
    }


    _initLEDs() {
        let tmpSprite_r, tmpSprite_g, tmpSprite_b;
        for (let j = 0; j < this.resolution_y ; j++) {
            for (let i = 0; i < this.resolution_x ; i++) {

                tmpSprite_r = new PIXI.Sprite(this.texture_led);
                tmpSprite_r.blendMode = PIXI.BLEND_MODES.ADD;

                tmpSprite_g = new PIXI.Sprite(this.texture_led);
                tmpSprite_g.blendMode = PIXI.BLEND_MODES.ADD;

                tmpSprite_b = new PIXI.Sprite(this.texture_led);
                tmpSprite_b.blendMode = PIXI.BLEND_MODES.ADD;

                this.screenbuffer.addChild( tmpSprite_r );
                this.screenbuffer.addChild( tmpSprite_g );
                this.screenbuffer.addChild( tmpSprite_b );

                this.leds.push( tmpSprite_r );
                this.leds.push( tmpSprite_g );
                this.leds.push( tmpSprite_b );

            }
        }
    }


    _clearHelperCanvases() {
        this.scaledInputSrcCtx.clearRect(0, 0, this.scaledInputSrc.width, this.scaledInputSrc.height);
        this.unscaledInputSrcCtx.clearRect(0, 0, this.unscaledInputSrc.width, this.unscaledInputSrc.height);
    }


}

export { LEDmatrix }