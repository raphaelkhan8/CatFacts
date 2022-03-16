import Button from "../components/Button"

const saveFact = (fact) => {
    const savedFacts = JSON.parse(localStorage.getItem('savedFacts')) || []
    savedFacts.push(fact)
    localStorage.setItem('savedFacts', JSON.stringify(savedFacts))
    window.alert('Fact saved. Click the "Show Saved Facts" button to see your saved facts.')
}

const CatFact = ({ catFact, afterSave }) => {
    return (
        <tr>
            <td>{catFact.fact}</td>
            <td>
                <Button 
                    action={() => {
                        saveFact(catFact.fact)
                        afterSave()
                    }}
                    text='Save Fact' />
            </td>
        </tr>
    )
}

export default CatFact