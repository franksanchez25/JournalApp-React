    import React from 'react'
    
    export const JornalEntry = () => {
      return (
        <div className="journal__entry pointer">
               <div 
               className="journal__entro-pricture"
               style={{
                   backgroundSize:'cover',
                   backgroundImage: 'url(https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?s=612x612)'
               }}
               ></div>
               <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
               Recomiendo más este codigo y que usen bootstrap para simplificar el avance del curso y ver más react.
                </p>
               </div>

               <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>
               </div>


        </div>
      )
    }
    