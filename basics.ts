let userName: string = "Joe Tester";
let hasLoggedIn:boolean = true;

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ")
const myArray: Array<number> = [1, 2, 3,];

interface Person {
    first: string;
    last: string;
}

const myPerson:Person = {
    first: "Joe",
    last: "Tester"
}

// utility type
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}
ids[30] = "c"

// conditionals

if(ids[30]==="c") {
    console.log("d")
}

// loops (letting typescript infer the type)
for (let i =0; i < 10; i++) {
    console.log(i)
}

[1, 2, 3].forEach(i => console.log(i))

const out = [4, 5, 6].map(v=>v*10)

