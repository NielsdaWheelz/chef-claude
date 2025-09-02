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

    const [status, setStatus] = useState("Asleep.")

    function switchStatus() {
        if (status === "Asleep.") {
            setStatus("Awake.")
        } else if (status === "Awake.") {
            setStatus("Asleep.")
        }
    }

    const [count, setCount] = useState(0)

    function addCount() {
        setCount(prevCount => prevCount + 1)
    }

    function subtractCount() {
        setCount(prevCount => prevCount - 1)
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
                <button onClick = { switchStatus }>{ status} </button>
            </div>

            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick = { subtractCount }>–</button>
                <h2 className="count">{ count }</h2>
                <button className="plus" aria-label="Increase count" onClick = { addCount }>+</button>
            </div>

        </main>
    )
}