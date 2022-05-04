    import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotesAppBar } from './NotesAppBar';
import {useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';
    export const NotesScreen = () => {

      const {active:note} = useSelector(state => state.notes)
      const [formValues, handleInputChange, reset] = useForm( note );
      const {body, title} = formValues;
      const dispatch = useDispatch();
      const activeNoteid = useRef( note.id );
      

      useEffect(() => {
      
        if ( note.id !== activeNoteid.current ) {
          reset( note );
          activeNoteid.current = note.id
        }
        

      }, [note, reset])

      useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues} ));
       
      }, [formValues, dispatch])
      
      

      return (
        <div className="notes__main-content">

                <NotesAppBar/>
                <div className="notes__content">
                    
                    <input
                    type="text"
                    placeholder="Put something"
                    className="notes__title-input"
                    name="title"
                    value={ title }
                    onChange={ handleInputChange }
                    />

                    <textarea 
                    className="notes__textarea"
                    placeholder="Anything new today?..."
                    name="body"
                    value={ body }
                    onChange={ handleInputChange }
                    >                     
                    </textarea>

                 {  
                 (note.url)
                   &&
                 
                 (
                  <div className="notes__images">
                          <img
                          src="https://abbatrianahotel.com/wp-content/uploads/2021/11/Relishing-Vacation-1024x681.jpg"
                          alt="imagen"
                          />
                      </div>
                    
                    )
                    
                    }

                </div>
        </div>
      )
    }
    