import { useState } from "react"
import '../styling/state.css'
import Ingredients from "./Ingredients"
import Recipe from "./Recipe";

export default function Content() {

    const [recipe, setRecipe] = useState('');

    const [ingredients, setIngredients] = useState<string[]>([]);

    function addIngredient(formData: FormData) {
        const newIngredient = Object.fromEntries(formData.entries()).ingredient
        setIngredients([...ingredients, newIngredient as string])
    }

    function getRecipe() {
        setRecipe('Recipe')
    }
    
    return (
        <main>
            <form className="add-ingredient-form" action={ addIngredient }>
                <input type="text" name="ingredient" placeholder="e.g. eggs"/>
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <>
                <Ingredients ingredients={ ingredients } />
                
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={ getRecipe }>Get a recipe</button>
                </div>}

                {recipe &&<div>
                <Recipe recipe={ recipe } /></div>}
            </>}
        </main>
    )
}