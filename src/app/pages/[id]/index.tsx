import { useParams } from 'next/navigation'
import React from 'react'

export const Index = ({id} = useParams()) => {
    console.log(id);
    
  return (
        <h1>Index Page</h1>
    )
}
