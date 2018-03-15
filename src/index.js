// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty( Object.prototype, propertyName, {
        enumerable: false,
        set: (item) => {propertyName = item},
        get: () => {return propertyName;}
    });
    return propertyName;
};
const createProtoMagicObject = () => {
    let len = {
        valueOf: () => {return 0;}
    };
    let ob = String.__proto__;
    ob.prototype = len;
    ob.__proto__ = len;
    return ob;
};
const incrementor = () => {
    let currentCount = 1;

    return () => {
        //valueOf:() => {return currentCount};
        currentCount++;
        //console.log(currentCount);
        return incrementor();
    };
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });

};
const getDeepPropertiesCount = (obj) => {
    let count = Object.keys(obj).length, i=0;
    function counter(object){
        if(i in object){
            count += Object.keys(Object.keys(object[i])).length;
            count += Object.keys(Object.keys(object[i][i])).length;
            object = object[i][i];
            i++;
            {counter(object)}
        }else{
            i=0;
            if(i in object){
                counter(object);
            }else{return 0;}
        }
    }
    counter(obj);
    return count;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    return array.sort()
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;