import React, { useEffect, useState } from 'react';
import { useContract, useOwnedNFTs, useNFTs } from '@thirdweb-dev/react';
import styles from './CollectionGrid.module.css';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import NFTGrid from '../NFT/NFTGrid';

type CollectionGridProps = {
  isLoading: boolean;
  contractAddresses: string[];
  emptyText?: string;
};

const CollectionGrid: React.FC<CollectionGridProps> = ({
  contractAddresses,
  emptyText,
}) => {
  const [contractMetadata, setContractMetadata] = useState<string[]>([]);
  const [selectedContract, setSelectedContract] = useState<string | null>(null);
  const [collectionOpen, setCollectionOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const sdk = new ThirdwebSDK('mumbai', {
        secretKey: process.env.TW_SECRET_KEY,
      });

      const metadataArray = await Promise.all(
        contractAddresses.map(async (address) => {
          const contract = await sdk.getContract(address);
          const metadata = await contract.metadata.get();
          return JSON.stringify(metadata);
        }),
      );

      setContractMetadata(metadataArray);
    };

    fetchData();
  }, [contractAddresses]);
  console.log(contractAddresses[0]);

  const handleViewCollection = (contractAddress: string) => {
    setSelectedContract(contractAddress);
    setCollectionOpen(!collectionOpen);
  };

  // Use useOwnedNFTs to get NFT data for the selected contract
  const { data: ownedNfts, isLoading: loadingNFTs } = useOwnedNFTs(
    useContract(selectedContract)?.contract,
    '0x0',
  );
  const { contract } = useContract(selectedContract)
  const { data, isLoading } = useNFTs(contract)

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
              <div className={styles.allDetails}>
                <div className={styles.collectionDetails}>
                  <p className={styles.collectionName}>
                    {JSON.parse(metadata).name}
                  </p>
                  <p>{JSON.parse(metadata).description}</p>
                  <button
                    className={styles.collectionButton}
                    onClick={() => handleViewCollection(contractAddresses[index])}
                  >
                    {collectionOpen && selectedContract === contractAddresses[index]
                      ? 'Cerrar Colección'
                      : 'Ver Colección'}
                  </button>
                </div>
                <div >
                   {collectionOpen && selectedContract === contractAddresses[index] && (
                    <div className = {styles.showNFTs}>
                      {loadingNFTs ? (
                      <p>Cargando NFT's ...</p>
                    ) : (
                          <NFTGrid
                            data={data}
                            isLoading={isLoading}
                            emptyText={'Por el momento no hay NFTs que mostrar'}
                          />
                    )}
                    </div>
                  )}               
                  
                </div>              
              </div>    
            </div>
          </div>
        ))
      ) : (
        <p>{emptyText || 'Loading metadata...'}</p>
      )}
    </div>
  );
};

export default CollectionGrid;
