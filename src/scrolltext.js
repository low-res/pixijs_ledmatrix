import * as PIXI  from 'pixi.js';

class Scrolltext extends PIXI.Sprite {

    constructor() {
        super();
        this.textholder     = new PIXI.Container();
        this.scrolltext     = new PIXI.Text('low-res temporarely offline.',{fontFamily : 'Arial', fontSize: 42, fill : 0xddcece, align : 'left'});
        this.textholder.addChild(this.scrolltext);
        this.scrollerWidth  = this.scrolltext.width;
        this.scrollSpeed    = 0.35;

        this.mask = new PIXI.Graphics();
        this.mask.beginFill(0xFF3300);
        this.mask.drawRect(0, 0, 100, this.scrolltext.height);
        this.mask.endFill();
        this.textholder.mask = this.mask;


        this.bg = new PIXI.Graphics();
        this.bg.beginFill(0x000000);
        this.bg.drawRect(0, 0, this.scrollerWidth, this.scrolltext.height);
        this.bg.endFill();
        this.textholder.x = this.mask.width ;

        this.addChild(this.bg);
        this.addChild(this.textholder);

        this.displaceSprite    = PIXI.Sprite.from("assets/texture_led.png");
    }

    move() {
        this.textholder.x -= this.scrollSpeed;
        if(this.textholder.x < -this.scrollerWidth) this.textholder.x = this.mask.width ;

        // this.displaceSprite.position.set(this.textholder.x, this.displaceSprite.position.y);
        // this.displaceSprite.x += this.scrollSpeed;
        // if(this.displaceSprite.position.x < +this.mask.width) this.displaceSprite.position.set(0, this.displaceSprite.position.y);

    }


    activateDisplacement() {
        let df          = new PIXI.filters.DisplacementFilter(this.displaceSprite,9);
        this.scrolltext.filters = [df];
    }
}

export { Scrolltext }



