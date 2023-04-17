var names = /** @class */ (function () {
    function names(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return names;
}());
//now lets use it
var namess = new names('suvi', 'manikandan');
console.log(namess.firstName);
console.log(namess.lastName);
