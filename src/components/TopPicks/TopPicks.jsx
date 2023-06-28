import topPicks1 from "../../assets/images/top-picks-1.png";
import topPicks2 from "../../assets/images/top-picks-2.png";
import topPicks3 from "../../assets/images/top-picks-3.png";
import topPicks4 from "../../assets/images/top-picks-4.png";
import videoIcon from "../../assets/icons/top-pics/video-icon.svg";
import micIcon from "../../assets/icons/top-pics/mic-icon.svg";
import articleIcon from "../../assets/icons/top-pics/article-icon.svg";

import "./TopPicks.scss";

const TopPicks = () => {
	return (
		<section className="top-picks">
			<h2 className="top-picks__title">Top picks</h2>
			<ul className="top-picks__content">
				<li>
					<a tabIndex="0" href="#top" className="top-pick-01">
						<div className="image">
							<img src={topPicks1} alt="lady with VR" />
						</div>
						<div className="content">
							<div className="badge">
								<img src={videoIcon} alt="play icon" />
								<p className="badge__text">Video</p>
							</div>
							<h4>Training course W</h4>
							<p className="description">
								“Because of this 2-day training, I feel more secure in my role &
								my future at work.”
							</p>
							<a tabIndex="1" href="#top">
								View more
							</a>
						</div>
					</a>
				</li>
				<li>
					<a tabIndex="0" href="#top" className="top-pick-02">
						<div className="image">
							<img src={topPicks2} alt="a girl under the red light" />
						</div>
						<div className="content">
							<div className="badge">
								<img src={micIcon} alt="microphone icon" />
								<p className="badge__text">Podcast</p>
							</div>
							<h4>Project X</h4>
							<p className="description">
								“Because of this 2-day training, I feel more secure in my role &
								my future at work.”
							</p>
							<a tabIndex="1" href="#top">
								View more
							</a>
						</div>
					</a>
				</li>
				<li>
					<a tabIndex="0" href="#top" className="top-pick-03">
						<div className="image">
							<img src={topPicks3} alt="taking notes" />
						</div>
						<div className="content">
							<div className="badge">
								<img src={articleIcon} alt="notes icon" />
								<p className="badge__text">Artikel</p>
							</div>
							<h4>Digital camp Y</h4>
							<p className="description">
								“Because of this 2-day training, I feel more secure in my role &
								my future at work.”
							</p>
							<a tabIndex="1" href="#top">
								View more
							</a>
						</div>
					</a>
				</li>
				<li>
					<a tabIndex="0" href="#top" className="top-pick-04">
						<div className="image">
							<img src={topPicks4} alt="a girl with the laptop" />
						</div>
						<div className="content">
							<div className="badge">
								<img
									className="badge__image"
									src={articleIcon}
									alt="notes icon"
								/>
								<p className="badge__text">Artikel</p>
							</div>
							<h4>Digital tool Z</h4>
							<p className="description">
								“Because of this 2-day training, I feel more secure in my role &
								my future at work.”
							</p>
							<a tabIndex="1" href="#top">
								View more
							</a>
						</div>
					</a>
				</li>
			</ul>
		</section>
	);
};

export default TopPicks;
