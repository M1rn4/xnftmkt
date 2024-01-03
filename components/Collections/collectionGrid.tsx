import React, { useEffect, useState } from "react";
import {
  useContract,
  useOwnedNFTs,
  useNFTs
} from "@thirdweb-dev/react";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./CollectionGrid.module.css";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import NFTGrid from "../NFT/NFTGrid";

type CollectionGridProps = {
  isLoading: boolean;
  contractAddresses: string[];
  emptyText?: string;
};

const CollectionGrid: React.FC<CollectionGridProps> = ({
  isLoading,
  contractAddresses,
  emptyText
}) => {
  const [contractMetadata, setContractMetadata] = useState<string[]>([]);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const sdk = new ThirdwebSDK("mumbai", {
        secretKey: process.env.TW_SECRET_KEY,
      });

      const metadataArray = await Promise.all(
        contractAddresses.map(async (address) => {
          const contract = await sdk.getContract(address);
          const metadata = await contract.metadata.get();
          return JSON.stringify(metadata);
        })
      );

      setContractMetadata(metadataArray);
    };

    fetchData();
  }, [contractAddresses]);

  const handleViewCollection = (contractAddress: string) => {
    setSelectedContract(contractAddress);
  };

  // Use useOwnedNFTs to get NFT data for the selected contract
  const { data: ownedNfts, isLoading: loadingNFTs } = useOwnedNFTs(
    useContract(selectedContract)?.contract, // Use optional chaining to avoid potential null or undefined
    "0x0"
  );

  return (
    <div>
      {contractMetadata.length > 0 ? (
        contractMetadata.map((metadata, index) => (
          <div key={index} className={styles.collectionGridContainer}>
            <div className={styles.collectionItem}>
              <img
                src={JSON.parse(metadata).image}
                alt="Collection Image"
                className={styles.collectionImage}
              />
              <div className={styles.collectionDetails}>
                <p className={styles.collectionName}>
                  {JSON.parse(metadata).name}
                </p>
                <p>{JSON.parse(metadata).description}</p>
                <button
                  className={styles.collectionButton}
                  onClick={() => handleViewCollection(contractAddresses[index])}
                >
                  Ver Collection
                </button>
                {selectedContract === contractAddresses[index] && (
                  <div>
                    {loadingNFTs ? (
                      <p>Loading NFTs...</p>
                    ) : (
                      <NFTGrid
                        contractAddresses={[selectedContract]}
                        isLoading={loadingNFTs}
                        emptyText="Por el momento no hay NFTs que mostrar"
                        data={ownedNfts ? ownedNfts : []}
                        
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>{emptyText || "Loading metadata..."}</p>
      )}
    </div>
  );
};

export default CollectionGrid;
