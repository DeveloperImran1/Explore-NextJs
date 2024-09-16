"use client"
import { useRouter } from "next/navigation";
import React from 'react';

const page = () => {
    const router = useRouter();
    const handler = ()=>{
        router.push('/about/mission/vission')
    }
    return (
        <div>
         <button onClick={handler}> Vission </button> 
           <p> this is Mission page</p>
        </div>
    );
};

export default page;