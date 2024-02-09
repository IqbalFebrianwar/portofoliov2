import React from "react"

const MainUI =({children} : {children? : React.ReactNode})=> {
    return(
        <main className="w-full grid">
            {children}
        </main>
    )
}
export default MainUI