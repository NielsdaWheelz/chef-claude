import { useState } from "react"
import '../styling/state.css'

export default function Content() {

    const [ingredients, setIngredients] = useState([]);

    function addIngredient(formData: FormData) {
        const newIngredient = formData.get("ingredient")
        setIngredients([...ingredients, newIngredient])
    }

    const ingredientElements = ingredients.map(ingredient => {
        return <li key={ ingredient }>{ ingredient }</li>
    })
    return (
        <main>
            <form className="add-ingredient-form" action={ addIngredient }>
                <input type="text" name="ingredient" />
                <button></button>
            </form>

            <ul>
                { ingredientElements }
            </ul>
        </main>
    )
}