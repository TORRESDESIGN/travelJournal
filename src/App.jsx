import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header.jsx';
import Card from './Card.jsx';
import data from './data';

function App() {
  const cardElements = data.map((item) => {
    return (
        <Card 
          id= {item.id}
          item= {item}
        />
      )
  });

  return (
    <div>
      <Header />
      {cardElements}
    </div>
  )
}

export default App
