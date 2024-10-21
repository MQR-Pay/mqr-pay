"use client";
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";

import React, { ReactNode } from 'react';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};


interface WalletButtonProps {
  className: string; 
}

// Define the interface for the props
interface WalletDropdownLinkProps {
  icon: string;
  children?: ReactNode; // Optional children prop to allow buttons or other components
}

const WalletDropdownLink2: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#myModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" fill-rule="evenodd" clip-rule="evenodd" baseProfile="basic"><path fill="#aed580" d="M31.003,7.001l-0.001-5.5c0-0.828,0.672-1.5,1.5-1.5	c0.828,0,1.5,0.672,1.5,1.5v5.5H31.003z"/><path fill="#aed580" d="M14.964,47.999h18.073c0.533,0,0.965-0.432,0.965-0.965V4.964c0-0.533-0.432-0.965-0.965-0.965	H14.964c-0.533,0-0.965,0.432-0.965,0.965v42.07C13.999,47.567,14.431,47.999,14.964,47.999z"/><path fill="#fff" fill-rule="evenodd" d="M17.739,29.001h12.524c0.962,0,1.741-0.78,1.741-1.741V10.743	c0-0.962-0.78-1.741-1.741-1.741H17.739c-0.962,0-1.741,0.78-1.741,1.741V27.26C15.997,28.222,16.777,29.001,17.739,29.001z" clip-rule="evenodd"/><path fill="#9b2310" fill-rule="evenodd" d="M12.001,22.001	c3.643-0.7,5.865-2.448,7-5c1.135,2.552,3.357,4.3,7,5H12.001z" clip-rule="evenodd"/><path fill="#e60023" fill-rule="evenodd" d="M12.001,22.001	c4.273,0.867,6.476,1,11,1c5.076,0,11.712-1.939,14-6l-9-4C24.039,18.139,21.863,22.001,12.001,22.001z" clip-rule="evenodd"/></svg>
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
            Top up via Mpesa
          </span>
        </span>
      </button>
      </>
  );
};


const WalletDropdownLink_WhatsApp: React.FC<WalletDropdownLinkProps> = ({ icon }) => {
  return (
    <>
      <button
        type="button"
        className="cursor-pointer bg-ock-default active:bg-ock-default-active hover:bg-[var(--bg-ock-default-hover)] relative flex items-center px-4 py-3 w-full"
        data-toggle="modal"
        data-target="#myQRModal"
      >
        <span className="">
          <div className="-translate-y-1/2 absolute top-1/2 left-4 flex h-[1.125rem] w-[1.125rem] items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
            <path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"></path><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"></path><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"></path><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"></path>
          </svg>
          </div>
          <span className="font-sans text-ock-foreground text-base leading-normal pl-6">
            Connect with WhatsApp
          </span>
        </span>
      </button>
      </>
  );
};

export default function WalletWrapper({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  return (
    <>
      <Wallet>
        <ConnectWallet
          withWalletAggregator={withWalletAggregator}
          text={text}
          className={className}
        >
          <Avatar />
          <Name />
        </ConnectWallet>
        <WalletDropdown>
          <Identity hasCopyAddressOnClick={true}>
            <Avatar />
            <Name />
            <Address />
            <EthBalance />
          </Identity>
          <WalletDropdownBasename />
          <WalletDropdownLink2 icon="wallet"> </WalletDropdownLink2>
          <WalletDropdownLink_WhatsApp icon="wallet"> </WalletDropdownLink_WhatsApp>
          <WalletDropdownFundLink />
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </>
  );
}
