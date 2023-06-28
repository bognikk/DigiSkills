import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LearnMore from "./components/LearnMore/LearnMore";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import TopPicks from "./components/TopPicks/TopPicks";
import TakeTheTest from "./components/TakeTheTest/TakeTheTest";
import GetInTouch from "./components/GetInTouch/GetInTouch";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<QuickLinks />
			<TopPicks />
			<LearnMore />
			<TakeTheTest />
			<GetInTouch />
		</>
	);
};

export default App;
