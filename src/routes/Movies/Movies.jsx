import GridImages from "../../components/GridImages/GridImages"
import SearchBox from "../../components/SearchBox/SearchBox"
import { MoviesPageContainer } from "./MoviesPageStyles"

const Movies = ()=>{
    return(
        <MoviesPageContainer style={{color:'white'}}>
            <SearchBox placeholder={"Search for movies"}/>

            <div style={{marginTop:"8.7rem"}}>
                <p style={{color:"white",marginBottom:"2rem",fontSize:"1.8rem"}}>Movies</p>
            </div>

            <GridImages/>
        </MoviesPageContainer>
    )
}


export default Movies