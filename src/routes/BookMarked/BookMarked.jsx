import GridImages from "../../components/GridImages/GridImages"
import SearchBox from "../../components/SearchBox/SearchBox"
import {BookMarkedContainer} from "./BookMarkedStyles"


const BookMarked = ()=>{
    return(
        <BookMarkedContainer style={{color:'white'}}>
            <SearchBox placeholder={"Search for bookmarked shows"}/>

            <div style={{marginTop:"8.7rem"}}>
                <p style={{color:"white",marginBottom:"2rem",fontSize:"1.8rem"}}>Bookmarked</p>
            </div>

            <GridImages/>
        </BookMarkedContainer>
    )
}


export default BookMarked