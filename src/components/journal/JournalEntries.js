import React from 'react'
import { useSelector } from 'react-redux';
import { JornalEntry } from './JornalEntry';

export const JournalEntries = () => {

  
  const {notes} = useSelector( state => state.notes )


  return (
    <div className="journal__entries">

        {
            notes.map( notes => (
                <JornalEntry 
                key={notes.id}
                {...notes}
                />
            ))
        }

    </div>
  )
}
