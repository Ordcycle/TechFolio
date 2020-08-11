import React from "react";
import { Col } from "react-flexbox-grid";
import Fade from "react-reveal/Fade";
import { Link as ScrollTo } from "react-scroll";
function BannerContent({ bannerSection }) {
	return (
		<Col lg={5} xs={12}>
			<div className="banner-content">
				<h1>
					{" "}
					<Fade bottom big cascade>
						{bannerSection.bannerHeading}
					</Fade>
				</h1>

				<Fade bottom cascade>
					<p>{bannerSection.bannerTagLine}</p>
				</Fade>
				<div className="banner-btns">
					<ScrollTo to="contact" spy={true} smooth={true} duration={1000}>
						<button className="btn btn-1">CONTACT</button>
					</ScrollTo>
					<a
						href={bannerSection.resumeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-1"
					>
						RESUME
					</a>
				</div>
			</div>
		</Col>
	);
}

export default BannerContent;
