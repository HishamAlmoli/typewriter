
const hello_timeout = function() {
    let str =  "4311o th3r3 w0r1d"
    //setTimeout(() => console.log(str), 3000);
    const strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        setTimeout(() => console.log(strArr[i]), 1000);
    }
    return str;
};

hello_timeout();