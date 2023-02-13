import { InjectedConnector } from 'wagmi/connectors/injected';
import { Ethereum, InjectedConnectorOptions } from '@wagmi/core';
import { Chain } from 'wagmi';

type ExtendedEthereum = Ethereum & {
  isApexWallet?: boolean;
};

/*
 * If the injected Apex provider is available this function will return
 * the Apex ethereum provider otherwise will return undefined.
 */
export function detectApexWalletProvider(): Ethereum | undefined {
  if (
    typeof window !== 'undefined' &&
    window.ethereum !== undefined &&
    (window.ethereum as ExtendedEthereum)?.isApexWallet
  ) {
    return window.ethereum;
  }
  return window.ethereum?.providers?.find((p) => {
    return (p as ExtendedEthereum).isApexWallet;
  });
}

export class ApexConnector extends InjectedConnector {
  id = 'apex';
  name = 'Apex';
  ready = detectApexWalletProvider() !== undefined;
  constructor({ chains, options }: { chains?: Chain[]; options?: InjectedConnectorOptions }) {
    super({ chains, options });
    this.ready = true;
  }

  async getProvider(): Promise<Ethereum | undefined> {
    return detectApexWalletProvider();
  }
}
