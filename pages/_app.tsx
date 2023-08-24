import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "@/Components";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
};

export default App;
