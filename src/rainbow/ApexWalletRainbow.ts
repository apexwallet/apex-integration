import { ApexConnector } from '../wagmi/ApexConnector';

export const apexWallet = (chains) => {
  return {
    id: 'apex',
    name: 'Apex',
    iconUrl: 'https://gateway.pinata.cloud/ipfs/QmPgPhdwwiVPdZ7AdWJX2tajgZWNKJA8w12rNwPtr1PDvJ',
    iconBackground: '#0F1D28',
    downloadUrls: {
      browserExtension: 'https://chrome.google.com/webstore/detail/apex-wallet/oppceojapmdmhpnmjpballbbdclocdhj',
    },
    createConnector: () => {
      return {
        connector: new ApexConnector({
          chains,
        }),
      };
    },
  };
};
