import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { saveNotes } from '../../actions/notes';

export const NotesAppBar = () => {

  const disptach = useDispatch();
  const {active}  = useSelector(state => state.notes)
    const date = new Date();
     const actualDate = moment(date);
  const handleSave = ()=>{
   
    disptach(saveNotes(active));
  
  
  }
  return (
    <div className="notes__appbar">
        <span> {actualDate.format('MMM')} {actualDate.format('Do')}</span>
        <div>
            <button className="btn">
                picture
            </button>
            <button
             className="btn"
             onClick={ handleSave }
             >
                Save
            </button>
        </div>
    </div>
  )
}
