import React from "react"

const ContentUI =({children} : {children : React.ReactNode})=>{
    return(
        <div className="w-full mt-16 max-md:px-5 px-48 justify-center">
            {children}
        </div>
    )
}
export default ContentUI