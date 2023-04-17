var Accessor = /** @class */ (function () {
    function Accessor() {
    }
    Object.defineProperty(Accessor.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    return Accessor;
}());
//lets now to use
var access = new Accessor('suvi', 'berlin');
access.firstName = 'swetha';
console.log(access.firstName);
