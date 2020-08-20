// Object property shorthand

const name = 'Julia'
const userAge = 34

const user = {
  name,
  age: userAge,
  location: "Austin"
}

console.log(user)

// Object desctructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)