
class ColorUtils {

    static getHex(cr = 0, cg = 0, cb = 0, ca = 0)  {
        cr  = ( cr > 1 ) ? 1 : cr;
        cg  = ( cg > 1 ) ? 1 : cg;
        cb  = ( cb > 1 ) ? 1 : cb;
        ca  = ( ca > 1 ) ? 1 : ca;

        return Math.round( ca * 255 ) << 24 ^ Math.round( cr * 255 ) << 16 ^ Math.round( cg * 255 ) << 8 ^ Math.round( cb * 255 );
    }

    /**
     * Returns an Object with the r, g and b values from 0 to 1
     * @param        hexColor        Hexadecimal value
     */
    static getRGB(hexColor) {
        var rgbColor = {};
        rgbColor.r = ( ( 0xFF0000 & hexColor ) >> 16 ) / 0xff;
        rgbColor.g = ( ( 0x00FF00 & hexColor ) >> 8 ) / 0xff;
        rgbColor.b = ( 0x0000FF & hexColor ) / 0xff;

        return rgbColor;
    }

    static getHSBColor(hue, sat, bri) {
        var rgb = HSB2RGB(hue, sat, bri);
        return ( (rgb.r*255)<<16 | (rgb.g*255)<<8 | (rgb.b*255) );
    }



    static HSB2RGB(hue, sat, val) {
        var red;
        var grn;
        var blu;
        var i;
        var f;
        var p;
        var q;
        var t;

        hue %= 360;

        if (val == 0)  return( { r:0, g:0, b:0 } );

        sat /= 100;
        val /= 100;
        hue /= 60;
        i = Math.floor( hue );
        f = hue - i;
        p = val * (1 - sat);
        q = val * (1 - (sat * f));
        t = val * (1 - (sat * (1 - f)));

        switch(i) {
            case 0:
                red = val;
                grn = t;
                blu = p;
                break;
            case 1:
                red = q;
                grn = val;
                blu = p;
                break;
            case 2:
                red = p;
                grn = val;
                blu = t;
                break;
            case 3:
                red = p;
                grn = q;
                blu = val;
                break;
            case 4:
                red = t;
                grn = p;
                blu = val;
                break;
            case 5:
                red = val;
                grn = p;
                blu = q;
                break;
        }

        return ( { r:red, g:grn, b:blu } );
    }

    static RGB2HSB(red, grn, blu) {
        var x;
        var val;
        var f;
        var i;
        var hue;
        var sat;

        x = Math.min( Math.min( red, grn ), blu );
        val = Math.max( Math.max( red, grn ), blu );

        if (x == val)return({h:undefined, s:0, v:val * 100});

        f = (red == x) ? grn - blu : ((grn == x) ? blu - red : red - grn);
        i = (red == x) ? 3 : ((grn == x) ? 5 : 1);
        hue = Math.floor( (i - f / (val - x)) * 60 ) % 360;
        sat = Math.floor( ((val - x) / val) * 100 );
        val = Math.floor( val * 100 );
        return( { h:hue, s:sat, b:val } );
    }

}

export { ColorUtils }