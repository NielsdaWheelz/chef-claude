import { useState } from "react"
import '../styling/state.css'

export default function Content() {

    const ingredients = ["Chicken", "Beef", "Pork", "Fish", "Eggs", "Milk", "Cheese", "Butter", "Bread", "Rice", "Pasta", "Tomato", "Potato", "Carrot", "Onion", "Garlic", "Pepper", "Salt", "Pepper"];

    const ingredientElements = ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Submit");
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        console.log(newIngredient)
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    const [state, setState] = useState("Awake.")

    function handleStateClick() {
        if (state === "Awake.") {
            setState("Asleep.")
        } else if (state === "Asleep.") {
            setState("Awake.")
        }
    }

    const [count, setCount] = useState(0)

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" />
                <button>Add ingredient</button>
            </form>

            <ul>
                {ingredientElements}
            </ul>

            <div className="state-switch">
                <button onClick = {() => handleStateClick()}>{ state }</button>
            </div>

            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick = { subtract }>–</button>
                <h2 className="count">{ count }</h2>
                <button className="plus" aria-label="Increase count" onClick = { add }>+</button>
            </div>

        </main>
    )
}