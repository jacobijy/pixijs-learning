import { Sprite as PixiSprite, loader, Texture, Container } from 'pixi.js';

export default class Sprite extends PixiSprite {

    public set parent(node : Container) {
        node.addChild(this);
    }

    constructor(texture: Texture) {
        super(texture);
    }

    setImage(path: string, image: string) {
        let resoure = `${path}/${image.endsWith('.png') ? image.replace('.png', '') : image}.png`;
        let texture = loader.resources[resoure].texture;
        if (texture) {
            this.texture = texture;
        }
    }
}
