import React from "react"

const MainUI =({children} : {children? : React.ReactNode})=> {
    return(
        <main className="w-full flex">
            {children}
        </main>
    )
}
export default MainUI