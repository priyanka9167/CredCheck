
import { useCallback, useEffect } from "react"
import storage from "../../models/session.types"




export const useAuthListener = () => {




    const getUser = useCallback(async(): Promise<void> => {
        try{

            let user = localStorage.getItem('user');
            if(user)
            {
                
            }
            

        }
        catch{

        }
    },[])

    useEffect(() => {
        getUser();

    },[getUser])


}