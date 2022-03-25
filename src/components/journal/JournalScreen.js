import React from 'react'
import { NotesScreen } from '../notes/NotesScreen'
import { NoItemsSelected } from './NoItemsSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {
  return (
    <div className="journal__main-content">

         <SideBar/>

            <main>

             {/* <NoItemsSelected/> */}
             <NotesScreen/>

            </main>
         
    </div>
  )
}
