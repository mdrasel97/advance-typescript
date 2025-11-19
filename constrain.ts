// constrain : strict rules


type Student = {id: number, name: string}

const addStudentToCourse = <T extends Student> (studentInfo: T) =>{
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
const student3 = {
    id: 323, 
    name: 'rasel',
    hasCar: true
}

const result = addStudentToCourse(student3)
console.log(result)