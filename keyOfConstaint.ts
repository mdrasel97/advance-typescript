// keyof : type operator
type RichPeoplesVehicle = {
    car: string,
    bike: string,
    cng: string
}

type MyVehicle = 'bike' | 'car' | 'cng';

type MyVehicle2 = keyof RichPeoplesVehicle;

const MyVehicle: MyVehicle2 = 'bike'

type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}
const user = {
    id: 123,
    name: 'rasel',
    address: {
        city: 'cm'
    }
}
// const myId = user ['id']
// const address = user['address']


const getPropertyFromObj = (obj: User, key: keyof User)=>{
    return obj[key]
}

const result = getPropertyFromObj(user, 'name')

console.log(result)