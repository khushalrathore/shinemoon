import React from 'react';
import styles from './ShippingAndDelivery.module.css'; // Import CSS module

const ShippingAndDelivery = () => {
  return (
    <div className={styles.deliveryContainer}>
      <h2 className={styles.heading2}>Shipping and Delivery Information</h2>
      <p className={styles.paragraph}>Welcome, where learning video editing is convenient and accessible. Here’s everything you need to know about how we deliver our online courses:</p>

      <h3 className={styles.heading3}>Digital Delivery</h3>
      <p className={styles.paragraph}>All our courses are delivered digitally through our secure online platform. Upon successful enrollment and payment, you will receive:</p>
      <ul className={styles.list}>
        <li><strong>Immediate Access:</strong> An email containing your login credentials and instructions on how to access your course materials will be sent to you promptly.</li>
        <li><strong>24/7 Availability:</strong> Enjoy the flexibility of learning at your own pace and accessing course content from anywhere with an internet connection.</li>
      </ul>

      <h3 className={styles.heading3}>Course Materials</h3>
      <p className={styles.paragraph}>Our courses on video editing include:</p>
      <ul className={styles.list}>
        <li><strong>Video Lectures:</strong> Engaging tutorials and demonstrations by industry experts.</li>
        <li><strong>Resource Materials:</strong> Supplementary resources, including e-books and downloadable files, to enhance your learning experience.</li>
        <li><strong>Assignments and Quizzes:</strong> Interactive assessments to test your understanding and progress.</li>
      </ul>

      <h3 className={styles.heading3}>Technical Support</h3>
      <p className={styles.paragraph}>If you encounter any technical difficulties or have questions about accessing your courses, our dedicated customer support team is available to assist you. Contact us at <a href="mailto:support@shinemoon.in" className={styles.link}>support@shinemoon.in</a> or visit our office at:</p>
      <p className={styles.paragraph}><br />Jaipur, Rajasthan 302012<br />India</p>

      <h3 className={styles.heading3}>Updates and Notifications</h3>
      <p className={styles.paragraph}>We may update course materials or make improvements to our platform periodically. You will be notified of any changes that may impact your learning experience via email or through our website.</p>

      <p className={styles.paragraph}>For more information about our terms and conditions, please visit our <a href="https://shinemoon.in/terms-and-conditions" className={styles.link}>Terms and Conditions</a> and <a href="https://shinemoon.in/privacy-policy" className={styles.link}>Privacy Policy</a> pages.</p>

      <p className={styles.paragraph}>If you have any further questions about our shipping and delivery process, feel free to reach out to us at <a href="mailto:support@shinemoon.in" className={styles.link}>support@shinemoon.in</a>. We look forward to helping you achieve your video editing goals with </p>
    </div>
  );
};

export default ShippingAndDelivery;
