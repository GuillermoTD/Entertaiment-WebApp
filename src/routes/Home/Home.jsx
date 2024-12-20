import GridImages from "../../components/GridImages/GridImages"
import SearchBox from "../../components/SearchBox/SearchBox"
import Slider from "../../components/Slider/Slider"
import {HomeContainer} from "./HomeStyles"


const Home = ()=>{
    return(
        <HomeContainer>
            {/*Seccion del buscador*/}
            <SearchBox placeholder={"Search for movies or tvshows"}/>

            {/*Seccion de peliculas en tendencia*/}
            <div style={{marginTop:"8.7rem"}}>
                <p style={{color:"white",marginBottom:"2rem",fontSize:"1.8rem"}}>Tranding</p>
                <Slider/>
            </div>

            {/*Seccion de recomendados*/}
            <div style={{marginTop:"2.7rem"}}>
                <p style={{color:"white",marginBottom:"2rem",fontSize:"1.8rem"}}>Recommended for you</p>
                <GridImages/>
            </div>
        </HomeContainer>
    )
}


export default Home