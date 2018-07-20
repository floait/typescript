function greeter(person) {
    return "hello, " + person;
}
var user = "username";
console.log(greeter(user));
document.body.innerHTML = greeter(user);
