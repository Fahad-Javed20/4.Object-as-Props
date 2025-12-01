import type { UserType } from "../types/userType"

interface UserInformationProps {
    user:UserType
}

const UserInformation = ({user}:UserInformationProps) => {
  return (
    <div>
        <img src={user.image} alt="" />
        <p>{user.id}</p>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        {user.isMarried && <p>{user.name} is Still Single</p>}
    </div>
  )
}

export default UserInformation
