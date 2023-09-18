export const Button = ( props ) => {
    return (
        <a href={ props.href } target="_blank" rel="noreferrer">
            <button className="bg-yellow-500 px-3 py-2 mx-1 rounded">{ props.text }</button>
        </a>
    )
}