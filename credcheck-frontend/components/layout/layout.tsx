import Header from '../header/header';
import Footer from '../footer/footer';
import { useAuthListener } from '../session';
import { selectToken } from "../../redux/reducers/userReducers";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { userState, cred_token } from "../../models/user.types";
import { selectUser } from "../../redux/reducers/userReducers";
import { RootState } from "../../redux/store";
import LoginForm from '../login/login';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: any }): JSX.Element {

    useAuthListener();
    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const user: userState = useTypedSelector(selectUser);
    const token: cred_token = useTypedSelector(selectToken);
    const router = useRouter();
    let router_pathname = router.pathname;
    if (user && token) {
        return (
            <>
                {
                   ( router_pathname === '/login' ) ?
                   (
                    <>
                    <Header/>
                    {children}
                    <Footer/>
                    </>
                   )
                   :
                   (
                    <>
                    <Header/>
                    {children}
                    <Footer/>
                    </>
                   )
                  
              
                
            }
            </>
        )
    }
    else {
        return (
            <>
                <Header />
                <LoginForm />
                <Footer />
            </>
        )
    }

}