
const typewriter = function() {
    const sentence = "hello there from lighthouse labs";
    let counterI =0;
    for (const char of sentence) {       
        setTimeout(() => process.stdout.write(char), counterI) // <= 1s delay to make it noticeable. Can dial it down later.
        counterI +=1000;
      }
};
typewriter();