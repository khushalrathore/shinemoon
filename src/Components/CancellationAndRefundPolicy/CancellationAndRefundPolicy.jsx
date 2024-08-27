import styles from './CancellationAndRefundPolicy.module.css'; // Import CSS module

const CancellationAndRefundPolicy = () => {
    return (
        <div className={ styles.policyContainer }>
            <h2>Cancellation and Refund Policy</h2>

            <h3>Cancellation Policy</h3>
            <p className={ styles.pCp }> You may cancel your course enrollment at any time before accessing the course materials. To cancel, please contact our customer support team at <a href="mailto:support@shinemoon.in" className={ styles.link }>support@shinemoon.in</a>. Once canceled, you will no longer have access to the course content.</p>

            <h3>No Refund Policy</h3>
            <p className={ styles.pCp }>Please note that all sales are final, and we do not offer refunds for our online courses. We encourage you to carefully review course details and ensure they meet your requirements before enrolling.</p>

            <h3>Contact Us</h3>
            <p className={ styles.pCp }>If you have any questions regarding our cancellation policy or need assistance, please contact us at <a href="mailto:support@shinemoon.in" className={ styles.link }>support@shinemoon.in</a>. We are here to assist you and ensure you have a positive learning experience</p>
        </div>
    );
};

export default CancellationAndRefundPolicy;
