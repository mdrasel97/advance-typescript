// generic Function 

const createArrayWithString = (value: string)=> [value]


const createArrayWithNumber = (value: number)=> [value]
const createArrayWithBoolean = (value: boolean)=> [value]
const createArrayWithObject = (value: {
    id: number, name: string, 
})=> {
    return [value]
}


const createArrayWithGeneric= <T> (value: T)=>{
    return [value]
}

const arrString = createArrayWithGeneric('Apple')
const arrNumber = createArrayWithGeneric(333)
const arrObj = createArrayWithGeneric({
    id: 123,
    name: 'Next level'
})

// tuple
const createArrayWithTuple= (param1: string, param2:string)=>{
    return [param1, param2]
}

const createArrayTupleWithGeneric = <X, Y> (param1: X, param2:Y)=>{
    return [param1, param2]
}

const res1 = createArrayTupleWithGeneric('Rasel', false)
const res2 = createArrayTupleWithGeneric(222, {
    name: 'rasel',
})

// const

const addStudentToCourse = <T> (studentInfo: T) =>{
    return {
        couse: 'next level',
        ...studentInfo
    }
}

const student = {
    id: 123, 
    name: 'mezba',
    hasPen: true
}
const student2 = {
    id: 323, 
    name: 'rasel',
    hasCar: true
}

const result = addStudentToCourse(student2)
console.log(result)