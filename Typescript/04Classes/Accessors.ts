class Accessor {
    private _firstName: string;
    private _lastName:string;

    public get firstName():string{
        return this._firstName;
 }
 public set firstName(value:string){
      this._firstName;
}
}

//lets now to use

let access=new Accessor("suvi",'berlin');
access.firstName='swetha';
console.log(access.firstName);
