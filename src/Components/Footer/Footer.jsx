import React, { useEffect } from 'react';
import styles from './Footer.module.css';
import formImg from "../../assets/images/hero/hero.jpg";
import heroImg from "../../assets/images/hero/form.jpg"

function Footer () {
  // useEffect(() => {
  //   function adjustFooter() {
  //     const footer = document.querySelector('footer');
  //     const bodyHeight = document.body.offsetHeight;
  //     const windowHeight = window.innerHeight;
  //     const footerHeight = footer.offsetHeight;

  //     if (bodyHeight + footerHeight < windowHeight) {
  //       footer.style.position = 'absolute';
  //       footer.style.bottom = '0';
  //       footer.style.width = '100%';
  //     } else {
  //       footer.style.position = 'static';
  //     }
  //   }

  //   // Initial adjustment
  //   adjustFooter();

  //   // Adjust on window resize
  //   window.addEventListener('resize', adjustFooter);

  //   // Adjust when content loads
  //   window.addEventListener('load', adjustFooter);

  //   // Adjust when content changes (useful for SPAs or dynamic content)
  //   const observer = new MutationObserver(adjustFooter);
  //   observer.observe(document.body, { childList: true, subtree: true });

  //   // Cleanup function
  //   return () => {
  //     window.removeEventListener('resize', adjustFooter);
  //     window.removeEventListener('load', adjustFooter);
  //     observer.disconnect();
  //   };
  // }, []);

  const date = new Date().getFullYear();
  return (
    <footer className={ styles.footerMain }>
      <div className={ styles.footerMainDiv1 }><a href='/'>ShineMoon</a></div>
      <div className={ styles.footerMainDiv2 }>
        <div className={ styles.footerCard } style={ { backgroundImage: `url(${ formImg })` } }></div>
        <>
          <ul>Sitemap
            <li><a href='/'>Home</a></li>
            {/* <li><a href='/'>Portfolio</a></li> */ }
            <li><a href='/courses'>Courses</a></li>
            <li><a href='/team'>Team</a></li>
            <li><a href='/contact-us'>Contact Us</a></li>
            <li><a href='/portfolio'>Portfolio</a></li>
          </ul>
          <ul>Resources
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/newsletter'>Newsletter</a></li>
            <li><a href='/courses'>Courses</a></li>
          </ul>
          <ul>Legal
            <li><a href='/terms-and-conditions'>Terms and Conditions</a></li>
            <li><a href='/privacy-policy'>Privacy Policy</a></li>
            <li><a href='/shipping-and-delivery'>Shipping and Delivery</a></li>
            <li><a href='/cancellation-and-refunds'>Cancellation and Refunds</a></li>
          </ul>
          {/* <ul>Support
            <li><a href='https://www.instagram.com/ig_shinemoon/'><span style={{ fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` }}>@</span>ig_shinemoon</a></li>
            <li><a href='mailto: support@shinemoon.in'>support<span style={{ fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` }}>@</span>shinemoon.in</a></li>
          </ul> */}
        </>
      </div>
      <div className={ styles.footerMainDiv3 }>
        <span><span style={ { fontFamily: `system-ui`, marginInline: `3px`, fontSize: `18px` } }>&copy;</span>{ date } <a href='/'>shinemoon.in</a></span>
        {/* <ul>
          <li><a href='https://x.com/shinemoon221/'>Twitter</a></li>
          <li><a href='https://www.youtube.com/channel/UCSWjcz32WGRPjEteBcE0tvA'>Youtube</a></li>
        </ul> */}
      </div>
    </footer>
  );
}

export default Footer;
