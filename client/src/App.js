import './App.css'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import SavedFact from './components/SavedFact'
import CatFact from './components/CatFact'
import Button from './components/Button'

function App() {

  const [catFacts, setCatFacts] = useState([])
  const [savedFacts, setSavedFacts] = useState([])
  const [showSavedFacts, setShowSavedFacts] = useState(false)

  const getCatFacts = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3001/api/getCatFacts')
    setCatFacts(data.data)
  }, [])

  const getSavedFacts = useCallback(() => {
    const facts = JSON.parse(localStorage.getItem('savedFacts')) || []
    if (facts) {
      setSavedFacts(facts)
    }
  }, [])

  useEffect(() => {
    getCatFacts()
  }, [getCatFacts, getSavedFacts])

  return (
    <div className="App">
      <h2>CAT FACTS!!!</h2>
      {!showSavedFacts ? 
        <Button 
          style={{ 'margin-bottom': '15px' }}
          action={() => {
            getSavedFacts()          
            setShowSavedFacts(true)
          }} 
          text='Show Saved Facts'
        /> : 
        savedFacts.length ? 
          <>
            <Button action={() => setShowSavedFacts(false)} text='Hide Saved Facts'/>
            <table className='savedFactsTable'>
              <tbody>
                <tr>
                  <td className='tableRowHeader'>Saved Cat Facts</td>
                </tr>
                {savedFacts.map((savedFact, index) => (<SavedFact key={index} catFact={savedFact} afterDelete={getSavedFacts} />))}
              </tbody>
            </table> 
          </> : <div>You do not have any saved facts :(</div>
      }
      <table className='catFactsTable'>
        <tbody>
          <tr>
            <td className='tableRowHeader'>Facts</td>
          </tr>
          {catFacts.length ? catFacts.map((catFact, index) => 
            <CatFact key={index} catFact={catFact} afterSave={getSavedFacts} />
          ) : null}
        </tbody>
      </table>
      <br />
      <Button action={getCatFacts} text='Get More Cat Facts!!!' />
    </div>
  );
}

export default App;
