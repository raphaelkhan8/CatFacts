import Button from "./Button"

const deleteFact = (fact) => {
    const deleteItem = window.confirm('Are you sure you want to delete this fact?')
    if (deleteItem) {
        const savedFacts = JSON.parse(localStorage.getItem('savedFacts')) || []
        const newSavedFacts = savedFacts.filter(f => f !== fact)
        localStorage.setItem('savedFacts', JSON.stringify(newSavedFacts))
    }
}

const SavedFact = ({ catFact, afterDelete }) => {
    return (
        <tr>
            <td>{catFact}</td>
            <td>
                <Button 
                    action={() => {
                        deleteFact(catFact)
                        afterDelete()
                    }} 
                    text='Delete Fact' 
                />
            </td>
        </tr>
    )
}

export default SavedFact