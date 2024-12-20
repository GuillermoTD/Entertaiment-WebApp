import GridImages from "../../components/GridImages/GridImages"
import SearchBox from "../../components/SearchBox/SearchBox"
import {TvShowsContainer} from "./TvShowsStyles"


const TvShows = ()=>{
    return(
        <TvShowsContainer style={{color:'white'}}>
            <SearchBox placeholder={"Search for tvshows"}/>

            <div style={{marginTop:"8.7rem"}}>
                <p style={{color:"white",marginBottom:"2rem",fontSize:"1.8rem"}}>TvShows</p>
            </div>

            <GridImages/>
        </TvShowsContainer>
    )
}

export default TvShows