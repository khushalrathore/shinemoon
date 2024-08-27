import styles from './CourseListItem.module.css';

function CourseListItem ( { Title, Image, Stats, Price, Desc, downloadLink } ) {
  const [ paymentSuccess, setPaymentSuccess ] = useState( false );

  // Load payment status from localStorage when the component mounts
  useEffect( () => {
    const storedPaymentStatus = localStorage.getItem( 'paymentSuccess' );
    if ( storedPaymentStatus === 'true' ) {
      setPaymentSuccess( true );
    }

    // Include Razorpay's checkout script
    const script = document.createElement( 'script' );
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild( script );

    return () => {
      document.body.removeChild( script );
    };
  }, [] );

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RZR_S, // Replace with your Razorpay API key
      amount: Price * 100, // Amount in the smallest currency unit (e.g., paise for INR)
      currency: 'INR',
      name: Title,
      description: Desc,
      image: Image,
      handler: function ( response ) {
        const upiId = response.razorpay_payment_id; // Get the payment ID from the response

        // Assuming a valid UPI ID starts with 'pay_' for this example
        if ( upiId && upiId.startsWith( 'pay_' ) ) {
          localStorage.setItem( 'upiId', upiId ); // Save UPI ID to local storage
          localStorage.setItem( 'paymentSuccess', 'true' ); // Save payment status to local storage
          setPaymentSuccess( true ); // Set payment success state
        } else {
          alert( 'Payment successful, but UPI ID is invalid.' );
        }

        // Display a dummy test message
        console.log( 'Payment successful:', response );
      },
      prefill: {
        name: 'Your Name', // Prefill customer name
        email: 'your-email@example.com', // Prefill customer email
        contact: '0000000000', // Prefill customer contact
      },
      theme: {
        color: '#000' // Customize the color of the payment popup
      }
    };

    const paymentObject = new window.Razorpay( options );
    paymentObject.open();
  };

  return (
    <div className={ styles.courseItemLi }>
      <div className={ styles.liIcon } style={ { background: `url(${ Image }) no-repeat center center` } }>
      </div>
      <div className={ styles.liTextInfo }>
        <div className={ styles.liHeading }>{ Title }</div>
        <div className={ styles.liStat }>{ Stats }</div>
        <div className={ styles.liDesc }>{ Desc }</div>
      </div>
      { paymentSuccess ? (
        <button className={ styles.payButton } style={ { position: 'relative' } }>
          <a style={ { position: 'absolute', inset: 0, zIndex: 1 } } href={ downloadLink } target='_blank' aria-label='Download Course'></a>
          Download
        </button>
      ) : (
        <button className={ styles.payButton } onClick={ handlePayment } style={ { position: 'relative' } }>
          ₹{ Price }
        </button>
      ) }
    </div>
  );
}

export default CourseListItem;
