import { Data } from "./Projecjson"
import { Project1 } from "./Project1"

export function Project(){
    return(
        <>
        {
            Data.map((item)=>{
                return(
                    <Project1 Data={item}/>
                )
            })

        }
        </>
    )
}