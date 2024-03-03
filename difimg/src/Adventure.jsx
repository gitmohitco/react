import Movie from "./Movie"
import advmovieData from "./advdata"
export default function Adventure(){
    return(
        <div className="adventure">
            {
                advmovieData.map((k)=>(
                    <Movie url={k.image} title={k.title} rate={k.rating} />
                ))
            }
        </div>
    )
}