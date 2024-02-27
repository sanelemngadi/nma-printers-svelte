import leftIMG from "$assets/images/left.png";
import rightIMG from "$assets/images/right.png";
import frontIMG from "$assets/images/front.png";
import backIMG from "$assets/images/back.png";

export class SprotRect {
    constructor(public x: number, public y: number, public w: number, public h: number) {}

    static default(): SprotRect {
        return new SprotRect(0,0,0,0);
    }
}

export interface SprotEntitySide {
    image: string;
    side: string;
    region: SprotRect;
}

export class SprotEntity {
    public left: SprotEntitySide | null;
    public right: SprotEntitySide | null;
    public back: SprotEntitySide | null;
    public front: SprotEntitySide | null;

    constructor() {
        this.left = null;
        this.right = null;
        this.front = null;
        this.back = null;
    }
}

const left: SprotEntitySide = {
    image: leftIMG,
    region: SprotRect.default(),
    side: "left",
}

const right: SprotEntitySide = {
    image: rightIMG,
    region: SprotRect.default(),
    side: "right",
}

const back: SprotEntitySide = {
    image: backIMG,
    region: SprotRect.default(),
    side: "back",
}
const front: SprotEntitySide = {
    image: frontIMG,
    region: SprotRect.default(),
    side: "front",
}

const entity = new SprotEntity();
entity.back = back;
entity.front = front;
entity.left = left;
entity.right = right;

export default entity;
