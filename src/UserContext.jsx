// import { Children, useState } from "react";

// export const UserContext= createContext();
// const UserProvider=({Children})=>{
//     const [user,setUser]=useState(null);

//     const correctEmail="nest@email.com";
//     const correctPassword="123456"


//     const login=(email,password)=>{
//         if(email ===correctEmail && password ===correctPassword){
//             setUser({email})
//             return {success:true};
//         }
//         else{
//             return{success:false,message:"Invalid email or password"}
//         }
//     }

//     const logout =()=>setUser(null);

//     return(
//         <UserContext.provider value={(user,login,logout)}>
//          {Children}   
//         </UserContext.provider>
//     )
// }
// export default UserProvider