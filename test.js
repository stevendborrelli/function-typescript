const message = "hello world";
console.log(message);
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("hello", new Date());
