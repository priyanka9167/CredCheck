import Header from '../header/header';
import Footer from '../footer/footer';
import { useAuthListener } from '../session';


export default function Layout({ children }: { children: any }): JSX.Element {

    useAuthListener();
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}