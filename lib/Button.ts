import Sprite from './Sprite';
import { Texture, interaction } from 'pixi.js';

export default class Button extends Sprite {
    private normalImage: Sprite = null;
    private selectedImage: Sprite = null;
    private touchedImage: Sprite = null;

    constructor(normal:Texture, selected: Texture, touched: Texture) {
        super();
        this.normalImage = new Sprite(normal);
        this.selectedImage = new Sprite(selected);
        this.touchedImage = new Sprite(touched);
    }

    onTouchBegan(touch: MouseEvent) {
        // if (touch.)
        // this.on(interaction.InteractionEv)
    }
}
