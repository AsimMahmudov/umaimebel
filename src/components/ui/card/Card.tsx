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
				<Link key={index} href={`/${el.id}`}>
					<div   className={scss.Card}>
						<div className={scss.content}>
							<div className={scss.image}>
								<Image fill objectFit="cover" src={el.main_image} alt="img" />

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
				</Link>
			))}
		</>
	);
};

export default Card;
