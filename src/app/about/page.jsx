import Image from "next/image";
import styles from "./about.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={styles.Circlewrapper}>
        <div className={styles.totalSupply}>
          <Image
            className={styles.tokenSupplyImage}
            src="/tokenSupply.svg"
            priority={true}
            alt="token-supply"
            width={430}
            height={430}
          />
        </div>
        <div className={styles.bitcoinBoard}>
          <Image
            className={styles.burnImageDiv}
            src="/burn.svg"
            alt="burn-icon"
            width={40}
            height={40}
          />
          <h3 className={styles.balanceH3Tag}>
            165M <span className={styles.tickerName}>FLT</span>
          </h3>
        </div>
      </div>
      <div className={styles.backBtn}>
        <Link href="/earning">
          <Image src="/back.svg" alt="back-icon" width={100} height={100} />
        </Link>
      </div>

      <div className={styles.socialIcons}>
        <Link href="#">
          <Image
            className={styles.twitterLogo}
            src="/twitter.svg"
            alt="twitter-icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#">
          <Image
            src="/telegram.svg"
            alt="telegram-icon"
            width={50}
            height={50}
          />
        </Link>
      </div>

      

      {/* Desktop ui */}
      <div className={styles.desktopUISocials}>
        <Link href="/earning">
          <Image src="/back.svg" alt="back-icon" width={100} height={100} />
        </Link>
        <Link href="#">
          <Image
            className={styles.twitterLogo}
            src="/twitter.svg"
            alt="twitter-icon"
            width={50}
            height={50}
          />
        </Link>
        <Link href="#">
          <Image
            src="/telegram.svg"
            alt="telegram-icon"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}
