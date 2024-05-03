import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { MetaMaskContextProvider } from "@/context/useMetaMask";
import { PoolProvider } from "@/context/useBitcoinContext";

export const metadata = {
  title: "The Speed",
  description: "Normal is not our way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MetaMaskContextProvider>
          <PoolProvider>
              <Navbar />
              {children}
          </PoolProvider>
        </MetaMaskContextProvider>
      </body>
    </html>
  );
}
