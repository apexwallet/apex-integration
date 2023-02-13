import { ApexConnector } from '../wagmi/ApexConnector';
import { InstructionStepName } from '@rainbow-me/rainbowkit/dist/wallets/Wallet';

function isApexWallet(ethereum: NonNullable<(typeof window)['ethereum']>) {
  return Boolean((ethereum as any).isApexWallet);
}

export const apexRainbowWallet = (chains) => {
  return {
    id: 'apex',
    name: 'Apex',
    installed: typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' && isApexWallet(window.ethereum),
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
        extension: {
          learnMoreUrl: 'https://docs.apexwallet.xyz/docs/vision-faqs',
          instructions: {
            steps: [
              {
                step: 'install' as InstructionStepName,
                description: 'We recommend pinning Apex to your taskbar for quicker access to your wallet.',
                title: 'Install the Apex extension',
              },
              {
                step: 'create' as InstructionStepName,
                description:
                  'Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.',
                title: 'Create or Import a Wallet',
              },
              {
                step: 'refresh' as InstructionStepName,
                description:
                  'Once you set up your wallet, click below to refresh the browser and load up the extension.',
                title: 'Refresh your browser',
              },
            ],
          },
        },
      };
    },
  };
};
