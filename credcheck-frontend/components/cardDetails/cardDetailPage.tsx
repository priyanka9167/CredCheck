import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { selectToken } from "../../redux/reducers/userReducers";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { userState, cred_token } from "../../models/user.types";
import { selectUser } from "../../redux/reducers/userReducers";
import { fetchCardDetails } from "../../services/users/cards/cards"; 
import { RootState } from "../../redux/store";
import Router from "next/router";
import modalPopup from "../modalPopup/modalPopup";
import Link from "next/link";

export default function CardDetailPage() {
    const router = useRouter();
    const cardId: String = router.query.id;

    const [cardDetail, setCardDetail] = useState();

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const user: userState = useTypedSelector(selectUser);
    const token: cred_token = useTypedSelector(selectToken);

    const getCardDetails = async () => {
        try {
            if (!(user.email === '')) {
                const res = await fetchCardDetails(cardId);
                if (res.status === 200) {
                    setCardDetail(res?.data?.cardDetail);
                }
                else {
                    console.log(res?.message)
                }
            }

        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getCardDetails();
    }, [user]);

    const redirectToPayment = async () => {
        Router.push(
            {
                pathname: '/payemntGateway',
                query: {
                    amountDue: '$400',
                    cardNumber: cardDetail?.['card_no'],
                    cardHolderName: cardDetail?.['card_name']
                }
            });
    }


    return (
        <div className="container">
            <div className="d-flex flex-row align-items-center justify-content-around">
                         
                <div className="cred-card">
                    <div className="front side">
                        <span className="companyname">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"></img>
                        </span>
                        <span className="cardnumber">
                            <ul>
                                <li>{cardDetail?.['card_no'].slice(0,4)}</li>
                                <li>{cardDetail?.['card_no'].slice(4,8)}</li>
                                <li>{cardDetail?.['card_no'].slice(8,12)}</li>
                                <li>{cardDetail?.['card_no'].slice(12,16)}</li>
                            </ul>
                        </span>
                        <table className="cardholder">
                            <tbody>
                                <tr>
                                    <td className="name small">CARD HANDLER</td>
                                    <td className="expiry small">EXPIRES</td>

                                </tr>
                                <tr>
                                    <td className="name">{cardDetail?.['card_name']}</td>
                                  
                                    <td className="expiry">{cardDetail?.['card_expiry'].slice(0,7)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    Due Date: {cardDetail?.['card_billing_date']}
                </div>

                <div>
                    Amount Due: {cardDetail?.['card_billing_date']}
                </div>
                <Link  href={
                    {pathname: '/paymentgateway',
                    query: {
                        amountDue: '$400',
                        cardNumber: cardDetail?.['card_no'],
                        cardHolderName: cardDetail?.['card_name']
                    }}
                }
                 className="btn btn-success"> PAY </Link>
            </div>
        </div>
    )
}