import {ImageSliderContainer} from "./ImageSliderStyles"
import testImage from "/src/assets/large.jpg"

const ImageSlider = ()=>{
    return(
        <ImageSliderContainer>
            <img src={testImage} alt="test"/>
        </ImageSliderContainer>
    )
}


export default ImageSlider