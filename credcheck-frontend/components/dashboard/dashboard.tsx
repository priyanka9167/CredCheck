import Image from 'next/image';
import card from '../../public/card.png'
import card2 from '../../public/card2.png';
import Link from 'next/link';


export default function Dashboard() {

    return (
        <div className="container first-card">
            <a className="main-image">
                <Image src={card} alt="credit card 1" />
            </a>
            <a className="main-image">
                <Image src={card2} alt="credit card 1" />
            </a>
            <span>
                <Link className='btn btn-primary py-3 px-4'  href="/newcard">Add Card</Link>
            </span>
        </div>
    )
}