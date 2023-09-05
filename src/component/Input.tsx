type InputProps={
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// export const Input=(props:InputProps)=>{
export const Input=({value, handleChange}:InputProps)=>{
    // if not as a props 
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
    //   console.log(event)
    // }
 
   //  return <input type="text" value={props.value} onChange={props.handleChange}/>
    return <input type="text" value={value} onChange={handleChange}/>
  //   return <input type="text" value={props.value} onChange={handleChange}/>
}