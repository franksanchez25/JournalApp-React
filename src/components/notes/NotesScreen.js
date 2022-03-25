    import React from 'react'
import { NotesAppBar } from './NotesAppBar'
    
    export const NotesScreen = () => {
      return (
        <div className="notes__main-content">

                <NotesAppBar/>
                <div className="notes__content">
                    
                    <input
                    type="text"
                    placeholder="Put something"
                    className="notes__title-input"
                    />

                    <textarea 
                    className="notes__textarea"
                    placeholder="Anything new today?..."
                    >/                        
                    </textarea>

                    <div className="notes__images">
                        <img
                        src="https://abbatrianahotel.com/wp-content/uploads/2021/11/Relishing-Vacation-1024x681.jpg"
                        alt="imagen"
                        />
                    </div>

                </div>
        </div>
      )
    }
    