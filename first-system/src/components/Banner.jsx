const Banner = (props) => {
    console.log(props)

    return (
        <div>
            <h1>{props.titulo}</h1>
            <h2>{props.subTitulo}</h2>
        </div>
    )
}

export default Banner;