// typeAssertion 
let anything : any;

anything = 'rasel';

(anything as string)

const kgToGMConverter = (input: string | number ): string | number | undefined =>{
if(typeof input === 'number'){
    return input * 1000;
}
else if(typeof input === 'string'){
    const [value] = input.split(' ')
    return `output is ${Number(value) * 1000} `

}
}

const result = kgToGMConverter(2) as number;
const result2 = kgToGMConverter('2 kg') as string;

// console.log(result)
// console.log(result2)


type CustomerError = {
    message: string
}

try{

}catch(err){
console.log((err as CustomerError).message)
}