import './Image.css'
function Image(props){
    return(
        <>
            <div className="image-warp">
                <div className='img'>
                <h2>Image</h2>
                <img src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Parrot" />
                </div>
                <div className='img'>
                <h2>Image2</h2>
                <img src='https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Rose'/>
                </div>
                <div className='img'>
                <h2>Image</h2>
                <img src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Parrot" />
                </div>
                <div className='img'>
                <h2>Image2</h2>
                <img src='https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600' alt='Rose'/>
                </div>
            </div>
        </>
    )
}
export default Image;