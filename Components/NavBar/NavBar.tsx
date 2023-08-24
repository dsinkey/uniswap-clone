import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Style from "./NavBar.module.css";
import { Model, TokenList } from "../index";
import images from "../../assets";

const NavBar = () => {
	const menuItems = [
		{
			name: "Swap",
			link: "/",
		},
		{
			name: "Tokens",
			link: "/",
		},
		{
			name: "Pools",
			link: "/",
		},
	];

	const [openModel, setOpenModel] = useState(false);
	const [openTokenBox, setOpenTokenBox] = useState(false);
	return (
		<>
			<div className={Style.NavBar}>
				<div className={Style.NavBar_box}>
					<div className={Style.NavBar_box_left}>
						<div className={Style.NavBar_box_left_img}>
							<Image
								src={images.uniswap}
								alt="logo"
								width={50}
								height={50}
							/>
						</div>
						{menuItems.map((element, index) => {
							return (
								<Link
									key={index}
									href={{
										pathname: `${element.name}`,
										query: `${element.link}`,
									}}
								>
									<p
										className={
											Style.NavBar_box_left_menu_item
										}
									>
										{element.name}
									</p>
								</Link>
							);
						})}
						<div className={Style.NavBar_box_left_menu}></div>
					</div>
					<div className={Style.NavBar_box_middle}>
						<div className={Style.NavBar_box_middle_search}>
							<div className={Style.NavBar_box_middle_search}>
								<Image
									src={images.search}
									alt="search"
									width={20}
									height={20}
								/>
								<input
									type="text"
									placeholder="Search Tokens"
								/>
							</div>
						</div>
					</div>
					<div className={Style.NavBar_box_right}>
						<div className={Style.NavBar_box_right_box}>
							<div className={Style.NavBar_box_right_box}>
								<Image
									src={images.ether}
									alt="network"
									width={30}
									height={30}
								/>
								<p>Network Name</p>
							</div>
							<button onClick={() => {}}>Address</button>
							{openModel && (
								<Model
									setOpenModel={setOpenModel}
									connectWallet="Connect"
								/>
							)}
						</div>
					</div>
				</div>
				{/* Token List*/}
				{openTokenBox && (
					<TokenList
						tokenDate="hey"
						setOpenTokenBox={setOpenTokenBox}
					/>
				)}
			</div>
		</>
	);
};

export default NavBar;
