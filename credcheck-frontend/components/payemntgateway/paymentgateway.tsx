import { CardElement, useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
// import styles from './payemntgateway.scss';
import  confirmPayment  from '../../services/payment'

export const PaymentGatewayForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
     const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardNumberElement),
      card: elements?.getElement(CardCvcElement),
      card: elements?.getElement(CardExpiryElement),
      key: 'pk_test_51MBLVGLuyMIpPjBgZ3dU6XT2l7RyxAhSmceojNYyKDkukwBrzsrFx4DirzrWvMvsJVxqivfIhZaIWRtexWNQQpBj00GcOD9D4W'
}); console.log("something went wrong");

   if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      const { id } = paymentMethod;
      const res = await confirmPayment(id);
      console.log(res);
      
    } else {
      console.log(error.message);
    } 
  };
    return (
        <div className = 'container'>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
            
            <CardNumberElement/>
            <CardCvcElement/>
            <CardExpiryElement/>
                <button>Pay</button>
            </form>
        </div>
    )   
}