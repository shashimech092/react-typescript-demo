type nameListProps={
    nameList: {
        first: string,
        last: string
    }[]

    // nameList: Name[]         import it PersonProps
}

export const PersonList=(props:nameListProps)=>{
    return(
        <div>
            {props.nameList.map((name)=>{
                return(
                    <h2 key={name.first}>
                        {name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}