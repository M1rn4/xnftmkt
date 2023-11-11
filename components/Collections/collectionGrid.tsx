// Importa las dependencias necesarias
import React, { useEffect, useState } from "react";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./CollectionGrid.module.css";
import { useContract } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// Define el tipo para las propiedades del componente
type CollectionGridProps = {
  isLoading: boolean;
  contractAddresses: string[]; // Lista de direcciones de contrato
  emptyText?: string;
};

// Componente principal CollectionGrid
const CollectionGrid: React.FC<CollectionGridProps> = ({ isLoading, contractAddresses, emptyText }) => {
  const [contractMetadata, setContractMetadata] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const sdk = new ThirdwebSDK("mumbai", {
        secretKey: process.env.TW_SECRET_KEY,
      });

      // Itera sobre las direcciones de contrato y obtén la metadata de cada uno
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

  return (
    <div>
      {contractMetadata.length > 0 ? (
        contractMetadata.map((metadata, index) => (
          <div key={index} className={styles.collectionGridContainer}>
            <div className={styles.collectionItem}>
              <img src={JSON.parse(metadata).image} alt="Collection Image" className={styles.collectionImage} />
              <div className={styles.collectionDetails}>
                <p>{JSON.parse(metadata).name}</p>
                <p>{JSON.parse(metadata).description}</p>
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
