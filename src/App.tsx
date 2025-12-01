
import './App.css'
import UserInformation from './components/UserInformation'
import type { UserType } from './types/userType'

function App() {


  const user1:UserType = {
    id:1,
    image:"https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwYm95fGVufDB8fDB8fHww",
    name:"Fahad Bin Javed",
    age:27,
    isMarried:true
}
  
  return (
    <>
      <UserInformation user = {user1}/>
    </>
  )
}

export default App
