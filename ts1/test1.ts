function greeter(person){
    return "hello, " + person;
}
let user = "username";

// console.log(greeter(user));
document.body.innerHTML = greeter(user);