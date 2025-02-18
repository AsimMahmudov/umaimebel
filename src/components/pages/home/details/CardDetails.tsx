"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import scss from "./CardDetails.module.scss";
import { use_data } from "@/components/ui/data/data";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { IoIosHome } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import Card from "@/components/ui/card/Card";
import { BsArrowRight } from "react-icons/bs";

const CardDetails = () => {
	const { id } = useParams();
	const product = use_data.find((item) => item.id === Number(id));
	const [selectedImage, setSelectedImage] = useState(product?.main_image || "");
	const [showFullDesc, setShowFullDesc] = useState(false);

	if (!product) {
		return <p>Товар не найден</p>;
	}

	const shortDesc =
		product.desc.length > 100
			? product.desc.slice(0, 200) + "..."
			: product.desc;

	return (
		<div className={scss.CardDetails}>
			<div className="container">
				<div className={scss.links}>
					<Link className={scss.link} href={`/`}>
						<IoIosHome /> Главная
					</Link>

					<p>
						<RxSlash />
					</p>

					<Link className={scss.link} href={`/catalog`}>
						Каталог
					</Link>

					<p>
						<RxSlash />
					</p>

					<h5>Об объекте</h5>
				</div>
				<div className={scss.block}>
					<div className={scss.content}>
						<div className={scss.main_image}>
							<Image
								src={selectedImage}
								alt={product.title}
								fill
								objectFit="cover"
							/>
						</div>
						<div className={scss.imagesTab}>
							{product.images_tab.slice(0.4).map((img, index) => (
								<div key={index} className={scss.tabImage}>
									<Image
										 
										src={img.image}
										alt={product.title}
										onClick={() => setSelectedImage(img.image)}
										objectFit="cover"
										fill
									/>
								</div>
							))}
						</div>
					</div>

					<div className={scss.info}>
						<h1>{product.title}</h1>
						<div className={scss.price}>
							<p className={scss.old_price}>
								<s>{product.old_price} c</s>
							</p>
							<p className={scss.new_price}>{product.new_price} c</p>
						</div>

						<p>
							<span>Ширина:</span> {product.width}
						</p>
						<p>
							<span>Высота:</span> {product.height}
						</p>
						<p>
							<span>Глубина:</span> {product.depth}
						</p>
						<p>
							<span>Цвет:</span> {product.color}
						</p>
						<p className={scss.desc}>
							{showFullDesc ? product.desc : shortDesc}{" "}
							{product.desc.length > 100 && (
								<span
									className={scss.readMore}
									onClick={() => setShowFullDesc(!showFullDesc)}>
									{showFullDesc ? "Скрыть" : "Еще..."}
								</span>
							)}
						</p>

						<div className={scss.buttons}>
							<button className={scss.btn1}>
								<FaRegHeart /> В избранные
							</button>
							<button className={scss.btn2}>
								<TiShoppingCart /> В корзину
							</button>
						</div>
					</div>
				</div>

				 <div className={scss.card_text}>
				 <h2>Связаться с нами</h2>
				 <h2><BsArrowRight /></h2>
				 </div>
				<div className={scss.line} />

				<div className={scss.cards}>
					<Card />
					<Card />
					<Card />
				</div>

			</div>
		</div>
	);
};

export default CardDetails;
