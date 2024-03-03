function Movie(props){
    const {title,url,rate} = props;
    return(
    <div className="movie">
        <img src={url} alt="" />
        <h2>{title}</h2>
        <h3>{rate}</h3>
    </div>
    )
}
export default Movie;