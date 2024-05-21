import './App.css'
import Person from './components/Person/Person.jsx'

function App() {
  
  const People=[
    {name : "Pepito", 
    surname: "Garcia",
    age:"25"
    }, 
    {
      name: "Juan",
      surname: "Martinez",
      age: "30"
  }, 
  {
      name: "Maria",
      surname: "Rodriguez",
      age: "28"
  }
  ]
  return (
    <div>
      <Person name="Bruno" surname="Malfi" age="33"/>
      {People.map((person)=>{
        return <Person name={person.name} surname={person.surname} age={person.age}/>
      })}
    </div>
  )
}

export default App
