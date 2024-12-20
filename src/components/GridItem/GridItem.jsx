import { GridItemContainer } from "./GridItemStyles";
import testImg from "/src/assets/large.jpg"

const GridItem = ()=>{
    return(
        <GridItemContainer>
            <img src={testImg} alt="image-test" />
        </GridItemContainer>
    )
}

export default GridItem