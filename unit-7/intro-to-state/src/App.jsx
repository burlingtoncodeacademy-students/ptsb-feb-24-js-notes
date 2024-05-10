import { useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';

function App() {

  // const name = "Sam"
  const [names, setNames] = useState([
    'Frodo', 'Sam', "Pippin", "Merry"
  ]);

  const [ count, setCount ] = useState(0);

  const displayWelcome = () => {
    return (
      names.map((name, index) => {
        return (
          <Welcome
            key={index}
            name={name}
            names={names} // obtaining our full array of our state
            setNames={setNames} // passing ability to invoke our updateState
          />
        )
      })
    )
  }

  return (
    <div className="App">
      <Nav />
      {displayWelcome()}
      <Counter 
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
