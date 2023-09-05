import { Button } from "./component/Button"
import { Container } from "./component/Container"
import Greet from "./component/Greet"
import { Heading } from "./component/Heading"
import { Input } from "./component/Input"
import { Oscar } from "./component/Oscar"
import { Perrson } from "./component/Person"
import { PersonList } from "./component/PersonList"
import Status from "./component/Status"
import LoggedIn from "./component/state/LoggedIn"
import User from "./component/state/User"


const App=()=>{
  const personName={
    first: 'Bruce',
    last: 'Wayne'
  }
  const nameList=[
    {first: 'Soman',
    last: 'Biradar'},

    {first: 'Shashi',
    last: 'Pawar'},

    {first: 'Ravi',
    last: 'Jadhav'},

    {first: 'Prakash',
    last: 'Waddar'},
  ]
  
  return(
    <div>
      {/* <Greet name={'Shashikant'} messageCount={20} isLoggedIn={false}/>
      <Perrson name={personName}/>
      <PersonList nameList={nameList}/>
      <Status status='error'/>
      {/* <Heading>Placehoder text</Heading> */}
      {/* <Oscar> */}
      {/* <Heading>Oscar goes to Leonardo Discpario!</Heading> */}
      {/* </Oscar> */}
      {/* <Button handleClick={()=>{console.log('Button clicked')}}/> */}
      {/* <Input value='' handleChange={(event)=>console.log(event)}/> */}
      {/* <Container styles={{border: '1px solid black', padding: '1rem'}}/> */} 
      <LoggedIn />
      <User/>
    </div>

  )
}

export default App
