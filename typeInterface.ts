
// type alias 
type User = {
    name: string,
    age: number,
}

type Role = {
    role: 'admin' | 'user '
}

type NewRole = User & Role

// const user1: NewRole = {
//     name: 'mr. x',
//     age: 100,
//     role: 'admin'
// }
// const user2 = {
//     name: 'mr. y',
//     age: 102
// }










// type interface: object type: array, object, function
// interface User {
//     name: string;
//     age: number
// }


// type alias 
type IsAdmin = boolean;

const isAdmin: IsAdmin  = false


interface IUserWithRole extends NewRole{
role: 'admin' | 'user'
}

// function
type Add = (num1: number, num2: number,) => number;


type Friends = string[]

interface IFriends {
    [index: number] : string
}

const friends : Friends = ['a', 'b', 'c']


// normal type alias, array and function er type alias
// object define interface or type alias