import React from "react";
import Image from "next/image";

import style from "./TokenList.module.css";
import { close } from "../../assets";

const TokenList = ({
	tokenDate,
	setOpenTokenBox,
}: {
	tokenDate: string;
	setOpenTokenBox: (open: boolean) => void;
}) => {
	const data = [1, 2, 3, 4, 5, 6, 6, 7];

	return (
		<div className={style.TokenList}>
			<p
				className={style.TokenList_close}
				onClick={() => setOpenTokenBox(false)}
			>
				<Image src={close} alt="close" width={25} height={25} />
			</p>
			<div className={style.TokenList_title}>
				<h2>Your Token List</h2>
			</div>
			{data.map((element, index) => {
				return (
					<div className={style.TokenList_box} key={index}>
						<div className={style.TokenList_box} key={index}>
							<div className={style.TokenList_box_info}>
								<p className={style.TokenList_box_info_symbol}>
									Hey
								</p>
								<p>
									<span>34</span> GOLD COIN
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TokenList;
