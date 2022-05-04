import Swal from 'sweetalert2';
import { getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"
import { FinishLoading, StartLoading } from './ui';


export const StartLoginEmailPassword = (email, password)=>{
    //Se puede hacer cualquier funcion asincrona de esta forma

         return (dispatch)=>{
         
             
             dispatch(StartLoading());
             
            const auth = getAuth();
            signInWithEmailAndPassword(auth,email,password)
            .then( ({user}) => {
                dispatch( login(user.uid, user.displayName));
                dispatch(FinishLoading());
            })
            .catch(e => {
                console.log(e);
                dispatch(FinishLoading());
                Swal.fire('ERROR',e.message, 'error');
            })
        }
}


export const registerWithEmailPassword = ( email,password, name )=>{

    return (dispatch)=>{

        const auth = getAuth();
        createUserWithEmailAndPassword(auth ,email, password)
        .then( async ({user}) => {
           await updateProfile(user,{displayName: name})
            console.log(user);
              dispatch(login(user.uid, user.displayName))
        }).catch(e => {
            console.log(e)
        });

    }


}

export const GoogleLogin = () => {

    return (dispatch)=>{
        
        const auth = getAuth();
        signInWithPopup(auth,googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        });

    }
} 

export const login = ( uid, displayName) => ({
        type: types.login,
        payload:{
            uid,
            displayName
        }
    });

    export const StartLogout = ()=> {
      return (dispatch) => {
          const auth = getAuth();
          signOut(auth)
          .then( ()=>{
                dispatch(Logout());
          } ).catch(e => {
              console.log(e);
          }) 
      }
    }

    export const  Logout = ()=> ({

        type: types.logout
    });
