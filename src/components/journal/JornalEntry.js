    import React from 'react';
    import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';
    
    export const JornalEntry = ({id,body,date,title,url}) => {
      const noteDate = moment(date);

      const dispatch = useDispatch(); 
      
      const handleEntryNoteClick = ()=> {
 
        dispatch( activeNote(id, 
          {id,body,date,title,url
          }) 
          );
 
      }


      return (
        <div 
        className="journal__entry pointer"
        onClick={handleEntryNoteClick}
        >
               {
                 url &&
                 <div 
                  className="journal__entro-pricture"
                  style={{
                      backgroundSize:'cover',
                      backgroundImage: `url(${url})`
                  }}
               >

               </div>
               }
               <div className="journal__entry-body">
                <p className="journal__entry-title">
               {title}
                </p>
                <p className="journal__entry-content">
               {body}
                </p>
               </div>

               <div className="journal__entry-date">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
               </div>


        </div>
      )
    }
    