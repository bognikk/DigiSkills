import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import TopPicks from "./components/TopPicks/TopPicks";
import Slider from "./components/Slider/Slider";
import LearnMore from "./components/LearnMore/LearnMore";
import TakeTheTest from "./components/TakeTheTest/TakeTheTest";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<QuickLinks />
			<TopPicks />
			<Slider />
			<LearnMore />
			<TakeTheTest />
			<GetInTouch />
			<Footer />
		</>
	);
};

export default App;
