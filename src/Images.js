const Images = ({ data: req }) => {
    return req.map(src =>
        <img src={src} alt={"cat"}/>
    )
}
export default Images