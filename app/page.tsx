import Link from "next/link"
import { ChangeEvent } from "react"
import { useState } from 'react'

async function getPosts(){
  const res = await fetch(`${process.env.ROOT_URL}/api/getPosts`)
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}

function createPost(input: string){
  console.log(input)
}

export default async function Home() {
  const [input, setInput] = useState('');

  const data : {id: number, title: String}[] = await getPosts()
  console.log(data)
  return (
    <main className="py-8 px-48">
      <button onClick={createPost(input)} className="bg-red-400 rounded-md text-blue-900">Create</button>
      <input value={input} onChange={e => setInput(e.target.value)}/>
      {data.map(post => (
        <h1>{post.title}</h1>
      ))}
    </main>
  )
}
