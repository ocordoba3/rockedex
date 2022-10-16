export class PokemonData {
    height: number;
    id: number;
    name: string;
    order: number;
    sprites: Sprites;
    types: Types[];
    weight: number;
    checked: boolean;

    constructor() {
        this.checked = false;
        this.height = 0;
        this.id = 0;
        this.name = '';
        this.order = 0;
        this.sprites = {front_default: ''};
        this.types = [];
        this.weight = 0;
    }
}

interface Sprites {
    front_default: string;
}

interface Types {
    type: {
        name: string,
        url: string
    }
}