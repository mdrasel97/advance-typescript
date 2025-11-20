//utility type
type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    color: string

}

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>

type ProductWithoutStock = Omit<Product, 'id' | 'name' | 'price'>
type ProductWithColor = Required<Product>

const product : ProductWithColor = {
    id: 222, 
    name: 'mouse', 
    price: 25, 
    stock: 100,
    color: 'black'
}

type OptionalProduct = Partial <Product>

type ProductReadOnly = Readonly<Product>


const product1 = {
     id: 222, 
    name: 'mouse', 
    price: 25, 
    stock: 100,
    color: 'black'
}