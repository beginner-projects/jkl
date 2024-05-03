import Image from "next/image";
import styles from "./navbar.module.css"; // Import the styles with a variable name (e.g., styles)
import Link from "next/link";
import WithdrawButton from "@/components/WithdrawBtn/withdrawBtn";

export default function Navbar() {

  
  return (
    <div className={styles.navWrapper}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/flash.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
      <WithdrawButton />
    </div>
  );
}
