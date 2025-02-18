import Image from "next/image";
import scss from "./Card.module.scss";
import { use_data } from "../data/data";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";

const Card = () => {
	return (
		<>
			{use_data.map((el, index) => (
				<div key={index} className={scss.Card}>
					<div className={scss.content}>
						<div className={scss.image}>
							<Link href={`/${el.id}`}>
								<Image fill objectFit="cover" src={el.main_image} alt="img" />
							</Link>
							<button>
								<FaRegHeart />
							</button>
						</div>
						<div className={scss.box}>
							<h1>{el.title}</h1>
							<div className={scss.price}>
								<p className={scss.price1}>
									<s>{el.old_price} c</s>
								</p>
								<p className={scss.price2}>{el.new_price} c</p>
							</div>
							<button>
								<TiShoppingCart />В корзину
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Card;
