import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Mobile UI */}
      <div className={styles.defaultPageWrapper}>
        <h1 className={styles.mainPageHeading}>Grow Together</h1>
        <Image
          className={styles.teamLogo}
          src="/team.png"
          alt="team-icon"
          height={350}
          width={350}
        />
        <span className={styles.apy}>
          <span className={styles.upto}>up to</span>
          <Image src="/apy.png" alt="apy-icon" width={50} height={50} />
          <span className={styles.aprpercentage}>15%</span>APY
        </span>
        <Link href="/staking">
          <button className={styles.spdBtn}>Stake SPD</button>
        </Link>
      </div>

      {/* min 900px wide */}
      

    </>
  );
}
