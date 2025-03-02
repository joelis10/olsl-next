import clsx from 'clsx';
import Header from '../components/header';
import styles from '@/styles/page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={'transition-all duration-500 ease-in-out'}>
      <Header />
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
          <h1 className={styles.welcomeTitle}>Oil Loss Solutions</h1>
          <h6 className={styles.welcomeSubtitle}>Sustainable specialists in domestic and commercial kerosene loss</h6>
          <a
            href='mailto:example@gmail.com'
            className={clsx(styles.dark, 'px-4 py-2 rounded text-white font-bold')}>
            Email Us
          </a>
          <a
            href="tel:12345678"
            className={clsx(styles.dark, 'px-4 py-2 rounded text-white font-bold')}>
            Call Us
          </a>
        </div>
      </div>
      <div className={styles.leadText}>
        <p>
          At OLS we deliver effective emergency containment response and bespoke site-specific solutions with a pragmatic and scientific application. Our aim is simple; to take away the hassle of an escape of fuel crisis for the client and to deliver a cost effective, innovative, and sustainable remedial solution for the customer.
        </p>
        <br />
        <p>
          Our dedicated team draw on over 20 years of comprehensive experience in the
          <span className={styles.bolded}> remediation </span>
          and
          <span className={styles.bolded}> environmental </span>
          consultancy sectors and are specialist in both
          <span className={styles.bolded}> property contamination </span>
          and
          <span className={styles.bolded}> groundwater pollution</span>
          .
        </p>
      </div>
    </div>
  );
}
