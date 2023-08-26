import React, { useState, useEffect } from "react";
import Image from "next/image";
import Style from "./Model.module.css";
import { close } from "../../assets";

const Model = ({
	setOpenModel,
	connectWallet,
}: {
	setOpenModel: (open: boolean) => void;
	connectWallet: string;
}) => {
	const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];
	return (
		<div className={Style.Model}>
			<div className={Style.Model_box}>
				<div className={Style.Model_box_heading}>
					<p>Connect a wallet</p>
					<div className={Style.Model_box_heading_img}>
						<Image
							src={close}
							style={{ color: "white !important" }}
							alt="logo"
							width={25}
							height={25}
							onClick={() => setOpenModel(false)}
						/>
					</div>
				</div>

				<div className={Style.Model_box_wallet}>
					{walletMenu.map((element, index) => {
						return (
							<p key={index} onClick={() => connectWallet()}>
								{element}
							</p>
						);
					})}
				</div>

				<p className={Style.Model_box_para}>
					By connecting a wallet, you agree to Uniswap Labs'
					<br /> Terms and conditions and consent to its Privacy
					Policy
				</p>
			</div>
		</div>
	);
};

export default Model;
