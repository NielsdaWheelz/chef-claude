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

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input type="text" name="ingredient" placeholder="e.g. oregano" aria-label="Add ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientElements}
            </ul>
        </main>
    )
}