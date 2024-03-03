import actionmovieData from "./acdata.js"
import Movie from "./Movie.jsx"
export default function Action(){
    return(
        <div className="action">
            {
                actionmovieData.map((k)=>(
                    <Movie url={k.image} title={k.title} rate={k.rating} />
                ))
            }
        </div>
    )
}