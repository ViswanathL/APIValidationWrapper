module.exports = {
    aName: function(name) {
        return name && typeof name === 'string' && name.length >= 2;
    },
    isOrder: function(value) {
        return value === 1 || value === -1;
    },
    isBoolean: function(value) {
        return (typeof value == 'boolean');
    },
    isArray: function(value) {
           return Array.isArray(value);
     },
     eachIsEmpty: function(values, prop) {
          return values.every(function(val) {
             return val[prop] && val[prop] !== '';
          });
    }
 }