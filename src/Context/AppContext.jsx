import { createContext } from "react";
import { doctors } from "../assets/assets";
export const AppContext = createContext()

const AppContextProvider = (props) => {
{/* its for getting currency symbol for all pages */}
const currencySymbol = '$'
    const value = {
   doctors,
   currencySymbol

    }


    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider
