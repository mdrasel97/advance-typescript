// dynamic generalize

type GenericArray<T> = Array<T>

// const friends : string[] = ['m', 'y', 'z']
const friends : GenericArray<string> = ['m', 'y', 'z']


// const rollNumbers: number[] = [2,6,5,]
const rollNumbers: GenericArray<number> = [2,6,5,]


const sqrFunc = (value: number)=>{
    return value * value;
}

type Coordinates<X, Y> = [X, Y]
const coordinates1: Coordinates<number, number> = [20,30]
const coordinates2: Coordinates<string, string> = ['kdjk', 'dfj']

const userList: GenericArray<{name: string, age: number}> = [
    {
        name: 'mr. rasel',
        age: 22
    },
    {
        name: 'mr. rasel',
        age: 22
    }
]