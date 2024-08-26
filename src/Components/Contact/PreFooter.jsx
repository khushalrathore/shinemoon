import { useEffect } from 'react';
import styles from './PreFooter.module.css';

function PreFooter() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className={styles.preFooterDiv}>
        <div className={styles.preFooterDivHeading} >
          <div >
            <span>Let us know what you would like to communicate and we will get back to you as soon as possible.</span>
            <div className={styles.contactMeme} style={{ marginLeft: `0.125rem` }}></div>
          </div>

        </div>
        <div data-tf-live="01J0K5P2BXF1MHBM76935ZKJRE" ></div>

      </div >
      <div className={styles.socials} >
        <a className={styles.icon1} href='https://www.facebook.com/shine.moon.37625843/' target='_blank'></a><a href='https://www.facebook.com/shine.moon.37625843/' target='_blank'>Facebook</a>
        <a className={styles.icon2} href='https://x.com/shinemoon221/' target='_blank'></a><a href='https://x.com/shinemoon221/' target='_blank'>X / Twitter</a>
        <a className={styles.icon3} href='https://www.instagram.com/ig_shinemoon/' target='_blank'></a><a href='https://www.instagram.com/ig_shinemoon/' target='_blank'>Instagram</a>
        <a className={styles.icon4} href='https://www.youtube.com/channel/UCSWjcz32WGRPjEteBcE0tvA' target='_blank'></a><a href='https://www.youtube.com/channel/UCSWjcz32WGRPjEteBcE0tvA' target='_blank'>YouTube</a>
      </div>
      <div style={{ padding: `1rem 2rem`, display: 'flex', flexDirection: `column`, gap: `1rem`, background: `black`, color: `white`, fontWeight: `700` }}>
        <a href='https://maps.app.goo.gl/4ozknkXirL8ehAPR7' style={{ display: `flex`, justifyContent: 'space-between', alignItems: `center`, maxWidth: `50ch` }}>🗺️Address : Plot No. IS-2036 to IS-2039 Ramchandrapura Industrial Area Jaipur, Sitapura, Vidhani, Rajasthan 303905</a>
        <a href='mailto:support@shinemoon.in' style={{ display: `flex`, justifyContent: 'space-between', alignItems: `center`, textAlign: `center` }}>📧-Mail : support@shinemoon.in</a>
      </div>
    </>

  );
}

export default PreFooter;
