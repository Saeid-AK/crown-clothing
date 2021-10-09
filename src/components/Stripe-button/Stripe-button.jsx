import StripeCheckout from 'react-stripe-checkout';

const StripeCehckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Jia3nFIU5VPzXdDHD3FGmxdfCCPS3CCnJMsm7fnC70zz7I51RWbbun4eI5RaVnNJbbiNlFSpldV0eGDtLI0Hv9Q00Q2HBVKGt';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCehckoutButton;
