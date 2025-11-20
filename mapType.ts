// map

const arrayOfNum: number[] = [1,4,6]
const arrayOfString: string[] = ['1','4','6']


const arrayOfStringUsingMap : string[]= arrayOfNum.map((num)=> num.toString())

// console.log(arrayOfStringUsingMap)


type AreaOfNum = {
    height: number,
    width: number,
}


type height = AreaOfNum

type AreaOfString = {
    [key in keyof AreaOfNum]: string
}




