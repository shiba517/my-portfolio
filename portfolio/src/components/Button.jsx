export const Button = ( props ) => {
    return (
        <a href={ props.href } target="_blank" rel="noreferrer">
            <button className={ `${ props.css } bg-yellow-500 px-3 py-2 rounded` }>{ props.text }</button>
        </a>
    )
}