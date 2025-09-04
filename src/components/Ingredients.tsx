export default function Ingredients(props: { ingredients: string[] }) {

    const ingredientElements = props.ingredients.map(ingredient => {
        return <li key={ ingredient }>{ ingredient }</li>
    })

    return (
        <>
            <h2>Ingredients</h2>
            <ul>
                { ingredientElements }
            </ul>
        </>
    )
}