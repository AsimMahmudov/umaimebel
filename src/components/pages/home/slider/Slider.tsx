import scss from "./Slider.module.scss";

const Slider = () => {
	return (
		<div className={scss.home}>
			<div className={scss.videoBackground}>
				<video autoPlay loop muted>
					<source src="/video.mp4" type="video/mp4" />
				</video>
			</div>
			<div data-aos="fade-up" className={scss.content}>
				<h1 className={scss.title}>UmaiMebel <br /> уют и стиль в каждом доме</h1>
				<p className={scss.description}>
					Стильная и качественная мебель для вашего дома и офиса. Широкий выбор,
					современные дизайны и доступные цены. Превратите ваше пространство в
					место комфорта и уюта с UmaiMebel!
				</p>
			</div>
		</div>
	);
};

export default Slider;
