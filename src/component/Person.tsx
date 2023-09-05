type PersonProps = {
    name: {
        first: string,
        last: string 
    }
}

// make sepearte file  and import it where rquired
// export type PersonProps = {
//     name: {
//         first: string,
//         last: string 
//     }
// }

//also we can 


// export type Name ={
//     first: string,
//     last: string
// }

// export type PersonProps={
//     name: Name
// }

export const Perrson=(props:PersonProps)=>{
    return(
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}