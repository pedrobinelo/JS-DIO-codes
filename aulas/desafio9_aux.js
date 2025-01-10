const input = [5, 3, 4, -15, 800, 8];
let i = 0;

function gets () {
    const value = input[i];
    i++;
    return value;
}

function print (text) {
    console.log(text);
}

module.exports = { gets, print};
