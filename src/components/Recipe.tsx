export default function Recipe(props: { recipe: string }) {
    return (
        <>
            <h2>Recipe</h2>
            <>{ props.recipe }</>
        </>
    )
}