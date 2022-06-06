const escapeStr =  ' I`m \\ home / "later Ma\'am'
const arr = [4, '2']
const obj = {
    "str": "str", 
    "num": 0,
    "bool" : true,
    "undef": undefined
}

const nested = {
    "arr": [4, undefined, '2'],
    "obj": {
        "str":"str",
        "num":0,
        "bool": true,
    }
}

Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)

Object.freeze(arr)
Object.freeze(obj)







// escapeStr, that contains the following specials characters: `, \, /, ", '
// arr that is an array containing the values 4 and '2'
// obj that is an object containing a property for each primitives:
//     str for String
//     num for Number
//     bool for Boolean
//     undef for undefined
// nested that contains
//     arr: an array of the 3 values: 4, undefined, '2'
//     obj: an object with 3 property (str, num & bool)

// nested, arr and obj must be frozen to prevent changes from them.