import { useState } from "react"
import '../styling/state.css'
import Ingredients from "./Ingredients"
import Recipe from "./Recipe";
import { getRecipeFromChefClaude } from "../ai.ts"

export default function Content() {

    const [recipe, setRecipe] = useState('');
    const [error, setError] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);

    function addIngredient(formData: FormData) {
        const newIngredient = Object.fromEntries(formData.entries()).ingredient
        setIngredients([...ingredients, newIngredient as string])
    }

    async function getRecipe() {
        try {
            setError('')
            const recipe = await getRecipeFromChefClaude(ingredients)
            setRecipe(recipe)
        } catch (err: any) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred')
            setRecipe('')
        }
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

                {recipe && <div>
                    <Recipe recipe={ recipe } />
                </div>}

                {error && <div className="error-message">
                    <h2>⚠️ Error</h2>
                    <p>{ error }</p>
                </div>}
            </>}
        </main>
    )
}