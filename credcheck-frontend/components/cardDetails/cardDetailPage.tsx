import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import { selectToken } from "../../redux/reducers/userReducers";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { userState, cred_token } from "../../models/user.types";
import { selectUser } from "../../redux/reducers/userReducers";
import { fetchCardDetails } from "../../services/users/cards/cards"; 
import { fetchTransactionDetails } from "../../services/transaction";
import { RootState } from "../../redux/store";
import  TransactionDetailPage  from './transactionDetails/transactionDetailPage';
import Link from "next/link";

export default function CardDetailPage() {
    const router = useRouter();
    const cardId: String = router.query.id;

    const [cardDetail, setCardDetail] = useState();
    const [transactionDetail, setTransactionDetail] = useState();

    const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const user: userState = useTypedSelector(selectUser);
    const token: cred_token = useTypedSelector(selectToken);

    const getCardDetails = async () => {
        try {
            if (!(user.email === '')) {
                const res = await fetchCardDetails(cardId);
                if (res.status === 200) {
                    getTransactionDetails();
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

    const getTransactionDetails = async () => {
        try {
            const res = await fetchTransactionDetails(cardId);
            console.log("res", res);
            setTransactionDetail(res?.data?.transactions);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getCardDetails();
    }, [user]);

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
                        id: cardId,
                        amountDue: "$200"
                    }}
                }
                 className="btn btn-success"> PAY </Link>
            </div>
            <div className="h4 mt-3 text-center mb-2"> Past Transactions</div>
           {transactionDetail && transactionDetail?.length > 0 && <div>
                
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th> Transaction Amount</th>
                            <th> Transaction Date</th>
                            <th> Transaction Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactionDetail && transactionDetail.map( transactionItem => {
                                return <TransactionDetailPage
                                    key = {transactionItem._id}
                                    transactionData = {transactionItem}
                                />
                            })
                        }
                    </tbody>

                </table>
            </div>}
            {!transactionDetail || transactionDetail?.length == 0 && <div className="h6; text-primary mt-4 text-center">No Transactions Available</div>}
        </div>
    )
}