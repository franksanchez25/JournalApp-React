import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)

    const Reset = (newFormState = initialState)=>{

        setvalues( newFormState );
    }

    const handleInputChange = ({target})=>{

        setvalues({
            ...values,
            [ target.name ]: target.value
        })
        
    }


        return [values, handleInputChange, Reset];

}
