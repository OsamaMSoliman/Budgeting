
import './App.css'
import ListComponent from './components/ListComponent';

const data = [
  { number: 1, text: 'Item A', quantity: 5, category: 'Category A', price: 10.99 },
  { number: 2, text: 'Item B', quantity: 3, category: 'Category B', price: 15.99 },
  { number: 3, text: 'Item C', quantity: 2, category: 'Category C', price: 8.49 },
  { number: 4, text: 'Item D', quantity: 7, category: 'Category A', price: 12.99 },
  { number: 5, text: 'Item E', quantity: 4, category: 'Category B', price: 18.99 },
  { number: 6, text: 'Item F', quantity: 6, category: 'Category C', price: 9.99 },
  { number: 7, text: 'Item G', quantity: 1, category: 'Category A', price: 14.49 },
  { number: 8, text: 'Item H', quantity: 8, category: 'Category B', price: 22.99 },
  { number: 9, text: 'Item I', quantity: 3, category: 'Category C', price: 11.49 },
  { number: 10, text: 'Item J', quantity: 5, category: 'Category A', price: 16.99 },
];


function App() {

  return (
    <ListComponent />
  )
}

export default App
