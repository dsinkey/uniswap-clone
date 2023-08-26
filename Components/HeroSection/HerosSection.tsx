import React, { useState, useContext } from "react";

import Image from "next/image";
import Style from "./HeroSection.module.css";
import { Token, SearchToken } from "../index";
import images from "../../assets";
import { imageConfigDefault } from "@/node_modules/next/dist/shared/lib/image-config";

const HerosSection = ({
	accounts,
	tokenData,
}: {
	accounts: string;
	tokenData: string;
}) => {
	const [openSetting, setOpenSetting] = useState(false);
	const [openToken, setOpenToken] = useState(false);
	const [openTokensTwo, setOpenTokenTwo] = useState(false);

	const [tokenOne, setTokenOne] = useState({
		name: "",
		image: "",
	});

	const [tokenTwo, setTokenTwo] = useState({
		name: "",
		image: "",
	});
	return (
		<div className={Style.HeroSection}>
			<div className={Style.HeroSection_box}>
				<div className={Style.HeroSection_box_heading}>
					<p>Swap</p>
					<div className={Style.HeroSection_box_heading_img}>
						<Image
							src={images.close}
							alt="close"
							height={25}
							width={25}
							onClick={() => setOpenSetting(true)}
						/>
					</div>
				</div>
				<div className={Style.HeroSection_box_input}>
					<input type="text" placeholder="0" />
					<button onClick={() => setOpenToken(true)}>
						<Image
							src={images.image || images.etherLogo}
							alt="close"
							height={25}
							width={25}
						/>
						{tokenOne.name || "Eth"}
						<small>9747</small>
					</button>
				</div>
				<div className={Style.HeroSection_box_input}>
					<input type="text" placeholder="0" />
					<button onClick={() => setOpenToken(true)}>
						<Image
							src={images.image || images.etherLogo}
							alt="close"
							height={25}
							width={25}
						/>
						{tokenTwo.name || "Eth"}
						<small>9747</small>
					</button>
				</div>
				{accounts ? (
					<button
						className={Style.HeroSection_box_button}
						onClick={() => {}}
					>
						Connect Wallet
					</button>
				) : (
					<button
						className={Style.HeroSection_box_button}
						onClick={() => {}}
					>
						Swap
					</button>
				)}
			</div>
			{openSetting && <Token openSetting={openSetting} />}
			{openToken && (
				<SearchToken
					openToken={setOpenToken}
					tokens={setTokenOne}
					tokenData={tokenData}
				/>
			)}
			{openToken && (
				<SearchToken
					openToken={setOpenTokenTwo}
					tokens={setTokenTwo}
					tokenData={tokenData}
				/>
			)}
		</div>
	);
};

export default HerosSection;
