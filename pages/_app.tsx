import type { AppProps } from "next/app";
import { ThirdwebProvider ,metamaskWallet, magicLink,embeddedWallet,} from "@thirdweb-dev/react";
import { NavBar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThirdwebProvider
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    activeChain={{
      ...NETWORK,
      rpc: ["https://mumbai.rpc.thirdweb.com/KKPXCvlsxXdwyaaQsrx2x6iUDGaTEJI5rjv8lpR0un-mvcWu4qDM5SVh_Y89VqtNvjfk-i-uz1LYiUCTBnxCng"]
      
    }}
    supportedWallets={[
      embeddedWallet(),
      metamaskWallet(),
      magicLink({
        apiKey: "pk_live_F37D19C8DD81417E",
        oauthOptions: {
          providers: [
            "google",
            "facebook",
            // "twitter",
            // "apple",
          ],
        },
      }),
    ]}
  >
      
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ChakraProvider>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>

      
    </ThirdwebProvider>
  );
}

export default MyApp;
