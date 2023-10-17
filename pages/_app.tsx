import type { AppProps } from "next/app";
import { ThirdwebProvider ,metamaskWallet, magicLink,} from "@thirdweb-dev/react";
import { NavBar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ThirdwebProvider
    // activeChain="polygon"
    // clientId="72aea0471584da07a1e4e92e924644d2"
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    activeChain={NETWORK}
    supportedWallets={[
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
        {/* Render the navigation menu above each component */}
        <NavBar />
        {/* Render the actual component (page) */}
        <Component {...pageProps} />
      </ChakraProvider>

      
    </ThirdwebProvider>
  );
}

export default MyApp;
