"use client";

import { Inter } from "next/font/google";
import { format } from "date-fns"
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo]  = useState([])
  const [newTodo, setNewTodo] = useState('')

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 9999)
  }

  const handleKeyUp = (key) => {
    if ( key === 'Enter' && newTodo ){
      const randomNumber = getRandomNumber()
      
      const newItem = {
        id: 'item-S{randomNumber}',
        content: newTodo
      }

      setTodo(todo.concat(newItem))

      setNewTodo('')
    }
  }

  const handleDelete = (id) => {
    if ( id > -1 ) {
      setTodo(todo.slice(0,id).concat(todo.slice(id+1)))
    }
  }

  return (
    <div className="flex justify-center pt-40">
      <div className="max-w-sm w-full shadow-lg bg-white p-8 rounded-xl opacity-70">

        <div className="flex justify-center cursor-default bg-gray-200 rounded-3xl px-4 py-1 color-gray hover:scale-110 transition-all">
          <img className="object-cover rounded-full w-16 h-16 m-2" src='favicon.ico'/>
          <div className="w-full p-3">
            <p className="text-3xl text-gray-600 ">Todo List</p>
            <p className="text-sm">{format(new Date(), 'dd MMMM, yyyy')}</p>
          </div>
        </div>

        <div className="relative mt-10">
          <input type="text" id="newTodo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyUp={(e) => handleKeyUp(e.key)} className="block w-full pl-10 p-2 border-4 rounded-full bg-gray-600 text-white" placeholder="new todo item"/>
        </div>

        <ul className="blocl w-full pt-6">
          {
            todo?.map( (item,index) => {
              return (
                
                <li key={item.id} className="w-full border-2 rounded-xl mt-2 hover:border-blue-300">
                  <input id={index} type="checkbox" className="float-left block w-6 h-6 m-3"/>
                  <button id={index} onClick={() => handleDelete(index)} className="float-right w-7 h-7 m-2.5 rounded-2xl bg-red-700 text-gray-200 shadow-md hover:bg-red-500 hover:scale-105"/>
                  <label htmlFor="1" className="block w-full p-3">{item.content}</label>
                </li>
              )
            })
          }
        </ul>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScXSZ_uyelTLgzcEcKyZVaJfd-N83q09z6oGUqdCmdZGL4VVQ/viewform?embedded=true" width="640" height="2923" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  );
}
