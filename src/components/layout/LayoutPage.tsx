"use client";
import { FC, ReactNode } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutPageProps {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div className={scss.LayoutPage}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default LayoutPage;
