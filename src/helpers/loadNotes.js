import { collection,query,getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid)=>{

   const noteSnap =  await getDocs( query(collection(db,`${uid}/journal/notes`)));
    const notes = [];

    
  noteSnap.forEach( snapchild =>{
        notes.push({
            id: snapchild.id,
            ...snapchild.data()
        })
    } );


    return notes;

}