import { Search } from "lucide-react"
import {SearchBarContainer} from "./SearchBoxStyles"

const SearchBox = ({placeholder})=>{
    return(
        <SearchBarContainer>
            <Search size={30} color="white" strokeWidth={1} />
            <input type="text" placeholder={placeholder}/>
        </SearchBarContainer>
    )
}


export default SearchBox