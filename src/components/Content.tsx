import { useState } from "react"
import '../styling/state.css'

export default function Content() {

    const [ingredients, setIngredients] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
    }

    const ingredientElements = ingredients.map(ingredient => {
        return <li key={ ingredient }>{ ingredient }</li>
    })
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" name="ingredient" />
                <button></button>
            </form>

            <ul>
                { ingredientElements }
            </ul>
        </main>
    )
}