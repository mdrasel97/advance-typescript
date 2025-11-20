// conditional type: 

type A = null
type B = undefined

type C = A extends null ? true: false;


type RichPeopleVehicle = {
    bike: string,
    car: string,
    ship: string
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false

type HasBike = CheckVehicle<'tractor'>


