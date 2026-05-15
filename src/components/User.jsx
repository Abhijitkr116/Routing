import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'

function User() {
    const {user, setUser} = useContext(UserContext);
    

    return (
        <>
            <h1 className='mt-3 text-5xl text-center'>User Details</h1>
            <div className='text-center mt-5 w-1/2 mx-auto p-5'>
                {user.map((item)=>{
                    return (
                        <div className='flex gap-2 justify-center' key={item.id}>
                            <h1 className='mt-2 w-1/2 text-start bg-red-400/20 px-2 py-1 hover:bg-red-400 hover:cursor-pointer'>Name: {item.name}</h1>
                            <h1 className='mt-2 w-1/2 text-start bg-blue-400/20 px-2 py-1 hover:bg-blue-400 hover:cursor-pointer'>City: {item.city}</h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default User