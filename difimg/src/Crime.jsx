import Movie from "./Movie.jsx"
import crimemovieData from "./crime.js"
export default function Crime(){
    return(
        <div className="crime">
            {
                crimemovieData.map((k)=>(
                    <Movie url={k.image} title={k.title} rate={k.rating} />
                ))
            }
        </div>
    )
}