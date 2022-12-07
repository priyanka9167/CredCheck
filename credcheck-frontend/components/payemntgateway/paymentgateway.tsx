import { CardElement, useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
// import styles from './payemntgateway.scss';
import { useRouter } from "next/router";
import  confirmPayment  from '../../services/payment';

export const PaymentGatewayForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  let errMsg = '';

  const {
    query: {amountDue, cardNumber, cardHolderName },
  } = router;

  const props = {
    amountDue,
    cardNumber,
    cardHolderName
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    errMsg = '';
     const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement),
      card: elements?.getElement(CardCvcElement),
      card: elements?.getElement(CardExpiryElement),
      key: 'pk_test_51MBLVGLuyMIpPjBgZ3dU6XT2l7RyxAhSmceojNYyKDkukwBrzsrFx4DirzrWvMvsJVxqivfIhZaIWRtexWNQQpBj00GcOD9D4W'
    });

   if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      const { id } = paymentMethod;
      const res = await confirmPayment(id);
      console.log(res);
      
    } else {
      errMsg = error;
    } 
  };
    return (
        <div className = 'container'>
          <div className="d-flex align-items-center mb-2">
            cardNmuber : {props.cardNumber}
            card Holder Name: {props.cardHolderName}
            Amount to be paid: {props.amountDue}
          </div>
            <form onSubmit={handleSubmit}>

            <div className="form-floating"> 
              <CardNumberElement className="form-control mb-2"/>
              <label htmlFor="Card-CVC">Card Number</label>
            </div>

            <div className="form-floating">
              <CardCvcElement className="form-control mb-2"/>
              <label htmlFor="Card-CVC">Card CVC</label>
            </div>
              
            <div className="form-floating">
              <CardExpiryElement className="form-control mb-2"/>
              <label htmlFor="Card-CVC">Card Expiry</label>
            </div>
            <button className="btn btn-primary mt-2">Pay</button>
            <p className = "txt-danger mt-2">{errMsg}</p>
            </form>
        </div>

    )   
}