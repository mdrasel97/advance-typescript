interface Developer<T, X = null> {
    name: string,
    salary: number,
    device: {
        brand: string,
        releasedYear: string,
        model: string,
    },
    smartWatch: T,
    bike?: X

}

type NoBrandWatch = {
   heartRate: string,
    stopWatch: boolean,
}

const poorDeveloper: Developer<NoBrandWatch, {brand: 'yamaha', engine: '200cc', }> = {
    name: 'mr Poor',
    salary: 20,
    device: {
        brand: 'lenovo', 
        model: 'A21', 
        releasedYear: '2021'
    },
    smartWatch:{
        heartRate: '200',
        stopWatch: true,
    }
}


interface AppleWatch {
 heartRate: string,
    stopWatch: boolean,
    callSupport: boolean,
    aiSupport: boolean,
    calculator: boolean,
}
const richDeveloper: Developer<AppleWatch > = {
    name: 'mr Poor',
    salary: 20,
    device: {
        brand: 'lenovo', 
        model: 'A21', 
        releasedYear: '2021'
    },
    smartWatch:{
        heartRate: '200',
        stopWatch: true,
        callSupport: true,
        aiSupport: true,
        calculator: true,
    }
}