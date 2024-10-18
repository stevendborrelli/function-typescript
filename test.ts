const message = "hello world";

console.log(message)

function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("hello", new Date())