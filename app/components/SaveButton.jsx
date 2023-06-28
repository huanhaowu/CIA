'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function SaveButton() { 
    return (
        <button class="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-3 px-6 rounded-3xl m-2" >
            Guardar
        </button>
    );
}

export default SaveButton;