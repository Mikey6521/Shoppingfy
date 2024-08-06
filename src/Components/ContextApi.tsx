import {createContext, useState, Dispatch, SetStateAction}from 'react';

export type User = {
    id:number
    title: string
    item: {itemname:string, count:number}[]
    
}

export interface UserContextInterface {
    user: User[]
    setUser: Dispatch<SetStateAction<User[]>>
}

const defaultState = {
    user:[{
        id:0,
        title:'',
        item:[{itemname:'', count:0}]
    }],
    setUser: (user: User[])=>{}
} as UserContextInterface

export const UserContext = createContext<UserContextInterface>(defaultState)

type UserProviderProps ={
    children: React.ReactNode
}

export default function UserProvider({children}:UserProviderProps){
    const [user, setUser] = useState([{
        id:0,
        title:'',
        item:[{itemname:'', count:0}]
    }]);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}