import "./Home.css"
const Home = (props) => {
  return (
    <div className="card">
        <h2>Product: {props.name}</h2>
        <p>Number: {props.number}</p>
        <p>Description: {props.description}</p>
        <p className="price">{props.price} €</p>
    </div>
  )
}

export default Home