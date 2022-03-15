import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [catFacts, setCatFacts] = useState([])

  const getCatFacts = async () => {
    const { data } = await axios.get('http://localhost:3001/api/getCatFacts')
    setCatFacts(data.data)
  }

  useEffect(() => {
    getCatFacts()
  }, [])

  return (
    <div className="App">
      <h2>CAT FACTS!!!</h2>
      {catFacts.length && catFacts.map(catFact => 
        (<div>Fact: {catFact.fact}</div>)
      )}
    </div>
  );
}

export default App;
