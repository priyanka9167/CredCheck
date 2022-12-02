import Image from 'next/image';
import card from '../../public/card.png'
import card2 from '../../public/card2.png';
import Link from 'next/link';


export default function Dashboard() {

    return (
        <div className="container">
              <div className="cred-card">
            <div className="front side">
                <span className="companyname">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"></img>
                </span>
                <span className="cardnumber">
                    <ul>
                        <li>1234</li>
                        <li>5678</li>
                        <li>9876</li>
                        <li>5432</li>
                    </ul>
                </span>
                <table className="cardholder">
                    <tbody>
                        <tr>
                            <td className="name small">CARD HANDLER</td>
                            <td className="expiry small">EXPIRES</td>

                        </tr>
                        <tr>
                            <td className="name">VINEET PATEL</td>
                            <td className="expiry">03/15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span>
                <Link className='btn btn-primary btn-addnew' href="/addcard">Add Card</Link>
            </span>
            
        </div>
        </div>
      
        
    )
}