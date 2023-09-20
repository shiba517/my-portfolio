export const MySubHeader = (props) => {
    return (
        <div className='pt-[10vh] pb-8'>
            <h2 className={ `${ props.css } text-3xl text-yellow-500 font-bold uppercase` }>{ props.title }</h2>
        </div>
    )
}