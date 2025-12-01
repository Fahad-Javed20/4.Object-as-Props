import type { UserType } from "../types/userType"

interface UserInformationProps {
    user:UserType
}

const UserInformation = ({user}:UserInformationProps) => {
  return (
    <div className="h-100 w-80 bg-white shadow-lg/30 rounded-2xl">
        <img className="h-64 w-full object-cover rounded-2xl" src={user.image} alt="" />
        <p>My Id:{user.id}</p>
        <h1>My Name:{user.name}</h1>
        <p>My age:{user.age}</p>
        {user.isMarried && <p>{user.name} is Still Single</p>}
        <p>{user.contact.phone}</p>
        <p>{user.contact.city}</p>
    </div>
  )
}

export default UserInformation
