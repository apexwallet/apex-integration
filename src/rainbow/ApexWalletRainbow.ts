import { ApexConnector } from '../wagmi/ApexConnector';

export const ApexRainbowWallet = (chains) => {
  return {
    id: 'apex',
    name: 'Apex',
    iconUrl: 'https://uploads-ssl.webflow.com/62e2fb6cf3873f69b314adc7/63ea86ef42b65cdb753c3436_apex-logo.svg',
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
