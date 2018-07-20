interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person){
    return "hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jack", lastName: "bone"};

document.body.innerHTML = greeter(user);