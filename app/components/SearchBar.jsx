'use client'

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { words } from '@/lib/data'
// Remember to import words or whatever you're using to store all the words the user can search for

const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,8))
    }

  return (
    <form className='w-[200px] absolute left-4 top-40 '>
        <div className="searchbar relative">
            <input type="search" placeholder='Buscar...' className=' w-full p-4 border border-gray-300 rounded-full text-lg bg-white' onChange={(e) => handleSearch(e)}/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-transparent rounded-full'>
                <AiOutlineSearch />
            </button>
        </div>

        {
            activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-gray-100 text-black w-full text-lg rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                    {
                        activeSearch.map(s => (
                            <span>{s}</span>
                        ))
                    }
                </div>
            )
        }
    </form>
  )
}
export default Searchbar