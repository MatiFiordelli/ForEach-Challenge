import { lazy, Suspense } from "react";
import { Provider } from "react-redux"
import mainStore from "./redux/store";
import { AnimatePresence } from "framer-motion";
import Spinner from "./features/resources/Spinner/index.tsx";

const Layout = lazy(() => import("./features/legacy-layout/components/Layout/index.tsx"));
const Router = lazy(() => import("./router/index.tsx"));

export default function App() {
	return (
		<Provider store={mainStore}>
			<Suspense fallback={<Spinner loadingText={"Loading.."} />}>
				<Layout>
					<AnimatePresence>
						<Router />
					</AnimatePresence>
				</Layout>
			</Suspense>
		</Provider>
	);
}