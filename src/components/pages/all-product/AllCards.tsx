import Image from "next/image";
import scss from "./AllCards.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";
import { use_data } from "@/components/ui/data/data";
import { useSearchStore } from "@/stores/searchStore";

interface AllCardsProps {
  sortOrder: "asc" | "desc" | "";
}

const AllCards: React.FC<AllCardsProps> = ({ sortOrder }) => {
  const { searchQuery } = useSearchStore();

  let filteredData = use_data.filter((el) =>
    el.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (sortOrder) {
    filteredData = [...filteredData].sort((a, b) =>
      sortOrder === "asc"
        ? parseFloat(a.new_price.replace(/\D/g, "")) - parseFloat(b.new_price.replace(/\D/g, ""))
        : parseFloat(b.new_price.replace(/\D/g, "")) - parseFloat(a.new_price.replace(/\D/g, ""))
    );
  }

  return (
    <>
      {filteredData.length > 0 ? (
        filteredData.map((el, index) => (
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
        ))
      ) : (
         <div className={scss.nopro}>
          <p className={scss.noproduct}>Нет продукта</p>
           
         </div>
      )}
    </>
  );
};

export default AllCards;
