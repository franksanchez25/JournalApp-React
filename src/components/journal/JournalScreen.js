import React from 'react'
import { useSelector } from 'react-redux'
import { NotesScreen } from '../notes/NotesScreen'
import { NoItemsSelected } from './NoItemsSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {

  const { active }  = useSelector( state => state.notes)


  return (
    <div className="journal__main-content">

         <SideBar/>

            <main>
              {
                  ( active )
                  ? (<NotesScreen/>)
                  : <NoItemsSelected/> 

              }
            
             

            </main>
         
    </div>
  )
}
