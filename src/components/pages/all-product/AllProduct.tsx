"use client";
import { useState, useRef, useEffect } from "react";
import { useSearchStore } from "@/stores/searchStore";
import AllCards from "./AllCards";
import { VscSettings } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import scss from "./AllProduct.module.scss";
import { RiCloseFill } from "react-icons/ri";

const AllProduct = () => {
	const { searchQuery, setSearchQuery } = useSearchStore();
	const [isOpen, setIsOpen] = useState(false);
	const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("");
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const setAscendingSort = () => {
		setSortOrder("asc");
	};

	const setDescendingSort = () => {
		setSortOrder("desc");
	};

	const resetFilters = () => {
		setSortOrder("");
		setSearchQuery("");
	};

	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.search}>
					<h1>Все продукты</h1>
					 <div className={scss.sort}>
					 <div className={scss.searchWrapper}>
						<FiSearch className={scss.searchIcon} />
						<input
							type="text"
							placeholder="Поиск..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className={scss.searchInput}
						/>
					</div>
					<div className={scss.selectWrapper} ref={menuRef}>
						<button
							className={scss.searchBtn}
							onClick={() => setIsOpen(!isOpen)}>
							<VscSettings />
						</button>

						{isOpen && (
							<div className={scss.selectDrawer}>
								<h3>Цена</h3>
								<div className={scss.lines}></div>
								<div className={scss.text}>
									<div className={scss.sortOption}>
										<input
											type="checkbox"
											checked={sortOrder === "asc"}
											onChange={setAscendingSort}
										/>
										<h5 onClick={setAscendingSort} className={scss.sortButton}>
											по возрастанию
										</h5>
									</div>
									<div className={scss.sortOption}>
										<input
											type="checkbox"
											checked={sortOrder === "desc"}
											onChange={setDescendingSort}
										/>
										<h5 onClick={setDescendingSort} className={scss.sortButton}>
											по убыванию
										</h5>
									</div>
								</div>
							</div>
						)}
					</div>
					 </div>
				</div>

				<div className={scss.actions}>
					<button onClick={resetFilters} className={scss.resetButton}>
					<RiCloseFill />Сбросить фильтры
					</button>
				</div>

				<div className={scss.content}>
					<AllCards sortOrder={sortOrder} />
				</div>
			</div>
		</div>
	);
};

export default AllProduct;
