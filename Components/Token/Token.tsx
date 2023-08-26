import React, { useState, useEffect } from "react";
import Image from "next/image";

import Style from "./Token.module.css";
import images from "../../assets";
import { Toggle } from "../index";

const Token = ({
	setOpenSetting,
}: {
	setOpenSetting: (open: boolean) => void;
}) => {
	return (
		<div className={Style.Token}>
			<div className={Style.Token_box}>
				<div className={Style.Token_box_heading}>
					<h4>Setting</h4>
					<Image
						src={images.close}
						alt="close"
						width={25}
						onClick={() => setOpenSetting(false)}
					/>
				</div>
				<p className={Style.Token_box_para}>
					Slippage Tolerance{""}
					<Image src={images.lock} alt="img" width={20} height={20} />
				</p>
				<div className={Style.Token_box_input}>
					<button>Auto</button>
					<input type="text" placeholder="0.1" />
				</div>
				<p className={Style.Token_box_para}>
					Slippage Tolerance{""}
					<Image src={images.lock} alt="img" width={20} height={20} />
				</p>
				<div className={Style.Token_box_input}>
					<button>Minutes</button>
					<input type="text" placeholder="30" />
				</div>
				<h2>Interface Setting</h2>
				<div className={Style.Token_box_toogle}>
					<p className={Style.Token_box_para}>Transaction deadline</p>
					<Toggle label="No" />
				</div>
			</div>
		</div>
	);
};

export default Token;
