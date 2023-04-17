class names {
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }
}

//now lets use it

let namess=new names('suvi','manikandan');
console.log(namess.firstName);
console.log(namess.lastName)