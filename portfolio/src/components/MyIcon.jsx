export const MyIcon = (props) => {
    return (
            <a href={props.link} className={`${ props.css } mx-1`} >
                { props.icon }
            </a>        
    )
}