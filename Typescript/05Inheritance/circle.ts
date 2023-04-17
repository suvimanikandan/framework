import { Shape} from './Shape';

export class Circle extends Shape{
    constructor(theX:number,theY:number,private radius:number){
        super(theX,theY);
    }
    //get/set accessors
    getInfo():string{
        return super.getInfo() + `,radis=${this.radius}`;
    }
}