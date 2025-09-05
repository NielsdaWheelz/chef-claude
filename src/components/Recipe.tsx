import ReactMarkdown from 'react-markdown'

export default function Recipe(props: { recipe: string }) {
    return (
        <section className="suggested-recipe-container" aria-label="Suggested recipe">
            <h2>Recipe</h2>
            <ReactMarkdown>{ props.recipe }</ReactMarkdown>
        </section>
    )
}