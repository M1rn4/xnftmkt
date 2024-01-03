import {
  useContract,
  useOwnedNFTs,
  useNFTs } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS, NFT_COLLECTION_ADDRESS_1, NFT_COLLECTION_ADDRESS_2, NFT_COLLECTION_ADDRESS_3 } from "../const/contractAddresses";
import styles from "../styles/Profile.module.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CollectionGrid from "../components/Collections/collectionGrid";

export default function Shopping() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { data, isLoading } = useNFTs(contract);
  const router = useRouter();

  const { isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );
  const [tab, setTab] = useState<"collections" | "nfts" | "vendidos">( "collections");


  return (
    <Container maxWidth="lg">
      <h1>Descubre nuestro proyectos</h1>
      <p>Puedes elegir entre una collection o NFTs individuales</p>
      <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "collections" ? styles.activeTab : ""}`}
          onClick={() => setTab("collections")}
        >
          Collections
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          NFTs
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "vendidos" ? styles.activeTab : ""}`}
          onClick={() => setTab("vendidos")}
        >
          Vendidos
        </h3>
      </div>
      <div
        className={`${
          tab === "collections" ? styles.activeTabContent : styles.tabContent
        }`}
      > 
        <CollectionGrid
          isLoading={loadingOwnedNfts}
          contractAddresses={[NFT_COLLECTION_ADDRESS_1, NFT_COLLECTION_ADDRESS_2, NFT_COLLECTION_ADDRESS_3]}
          emptyText="Por el momento no hay Collections que mostrar"
        />

      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Por el momento no hay NFTs que mostrar"
        }
      />
      </div>


    </Container>
  );
}
