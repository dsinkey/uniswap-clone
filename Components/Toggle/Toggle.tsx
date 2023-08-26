import { ST } from "@/node_modules/next/dist/shared/lib/utils";
import React from "react";

import Style from "./Toggle.module.css";
console.log("Style", Style);

const Toggle = ({ label }: { label: string }) => {
	return (
		<div className={Style.Toggle}>
			<div className={Style.Toggle_switch_box}>
				<input
					type="checkbox"
					className={Style.Toggle_checkbox}
					name={label}
					id={label}
				/>
				<label className={Style.Toggle_label} htmlFor={label}>
					<span className={Style.Toggle_inner} />
					<span className={Style.Toggle_switch} />
				</label>
			</div>
		</div>
	);
};

export default Toggle;
