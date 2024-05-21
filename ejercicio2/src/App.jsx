import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'

function App() {
const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  
  return (
    <div>
      <Header/>
      {dishes.map((dish)=>{
       return <Home name={dish.name} number={dish.id} description={dish.description} price={dish.price}/>
      })}
      
    </div>
  )
}

export default App
