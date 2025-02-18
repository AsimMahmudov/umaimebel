import Card from "@/components/ui/card/Card";
import scss from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.content}>
					<Card />
					<Card />
				</div>
				<div className={scss.box}>
					<Link href={"/all-product"}>
						<button className={scss.btn}>Все продукты</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
