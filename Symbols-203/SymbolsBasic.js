const mySymbol = Symbol("mySymbol");
var assert=require('assert');
assert.equal(typeof mySymbol, 'symbol');
console.log(Symbol()==Symbol());
const COLOR_BLUE=Symbol('Blue');
const MOOD_BLUE=Symbol('Blue');
assert.notEqual(COLOR_BLUE,MOOD_BLUE);
console.log(COLOR_BLUE==MOOD_BLUE);
const point={
    x:7,
    y:4,
    toString(){
        return `(${this.x},${this.y})`;
    }
};
assert.equal(String(point),`(7,4)`);
const point2={
    x:7,
    y:4,
    toJSON(){
        return[this.x,this.y];
    }
};
assert.equal(JSON.stringify(point2),`[7,4]`);
//Meta Level Method
const specialMethod = Symbol('specialMethod');
const obj={
    _id:'kf12oi',
    [specialMethod](){
        return this._id;
    }
};
assert.equal(obj[specialMethod](),'kf12oi');

