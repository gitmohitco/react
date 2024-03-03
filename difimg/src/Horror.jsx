import horrormovieData from "./horror.js"
import Movie from "./Movie.jsx"
export default function Horror(){
    return(
        <div className="action">
            {
                horrormovieData.map((k)=>(
                    <Movie url={k.image} title={k.title} rate={k.rating} />
                ))
            }
        </div>
    )
}