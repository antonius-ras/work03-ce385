function operations(type,a,b) {
     if (type === 'add'){
        return a+b;
     } else if (type === 'subtract') {
        return a - b;
     } else if (type === 'multiply') {
        return a * b;
     } else if (type === 'divide') {
        return a / b;
     } else {
        return console.log('Invalid operation type');
     }
}

module.exports = operations