import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LearnMore from "./components/LearnMore/LearnMore";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import TopPicks from "./components/TopPicks/TopPicks";
import TakeTheTest from "./components/TakeTheTest/TakeTheTest";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<QuickLinks />
			<TopPicks />
			<LearnMore />
			<TakeTheTest />
		</>
	);
};

export default App;
