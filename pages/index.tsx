import React, { useState, useEffect, useContext } from "react";

import { HerosSection } from "@/Components/index";

const Home = () => {
	return (
		<div>
			<HerosSection accounts="hey" tokenData="data" />
		</div>
	);
};

export default Home;
