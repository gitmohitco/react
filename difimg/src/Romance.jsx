import rommovieData from "./romdata.js"
import Movie from "./Movie"
export default function Romance(){
    return(
        <div className="romance">
            {
                rommovieData.map((k)=>(
                    <Movie url={k.image} title={k.title} rate={k.rating} />
                ))
            }
        </div>
    )
}