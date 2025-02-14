import Link from "next/link";

export default function NotFound() {
	return (
		<div className="container_not">
			<h1 className="title_not">404</h1>
			<p className="text_not">Страница не найдена</p>
			<Link href="/" className="link_not">
				Вернуться на главную
			</Link>
		</div>
	);
}
