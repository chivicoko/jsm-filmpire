import './App.css';


const Person = (props) => {
  return (
    <>
      <h1>I am {props.fullName}</h1>
      <h2>I am from {props.country}</h2>
      <h3>I am { props.age } years old right now.</h3>
    </>
  );
}

const App = () => {

  return (
    <div className="App">
      <Person fullName={'Victor Happy'} country={'Nigeria'} age={28} />
      <br/>
      <Person fullName={'Elijah Mabumabu'} country={'Zambia'} age={30} />
    </div>
  );
}

export default App;
