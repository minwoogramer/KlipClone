
import NavBar  from "./NavBar"


export default function Layout({children}: any){
    return(
        <>
        <NavBar/>
        <div>
          {children}
        </div>
        </>
    )
    
}