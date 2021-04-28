import androidlogo from "../img/androidlogo.png";
import applelogo from "../img/applelogo.png";
import arrowbutton from "../img/arrowbutton.png";

function Footer() {
	return (
		<div className="flex-center">
			<footer className="footer">
				<section className="foot">
					<h2 className="foot__h2">Running out of products?</h2>
					<p className="foot__text">
						Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
						aliquet.
					</p>
					<button className="foot__button_buy">
						Buy now <img src={arrowbutton} />
					</button>
				</section>
				<section className="foot">
					<h2 className="foot__h2">Bod•ē Trainer in your pocket</h2>
					<p className="foot__text">
						Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
						aliquet.
					</p>
					<button className="foot__button_ios flex-space-between">
						<img src={androidlogo} /> iOS <img src={arrowbutton} />
					</button>
					<button className="foot__button_android flex-space-between">
						<img src={applelogo} /> Android <img src={arrowbutton} />
					</button>
				</section>
				<section className="foot foot3">
					<h2 className="foot__h2">Frequently Asked Questions</h2>
					<p className="foot__text">
						Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer
						aliquet.
					</p>
					<button className="foot__button_faq">
						Read FAQs <img src={arrowbutton} />
					</button>
				</section>
			</footer>
		</div>
	);
}

export default Footer;
