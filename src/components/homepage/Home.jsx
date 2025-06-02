import { useState } from "react";
import "./home.css";

export const HomePage = () => {
    const cards = [
        { id: 1, brandName: "Nike", price: 299, img: "" },
        { id: 2, brandName: "Adidas", price: 320, img: "" },
        { id: 3, brandName: "Puma", price: 280, img: "" },
        { id: 4, brandName: "Reebok", price: 310, img: "" },
        { id: 5, brandName: "New Balance", price: 270, img: "" },
        { id: 6, brandName: "Converse", price: 250, img: "" },
        { id: 7, brandName: "Vans", price: 260, img: "" },
        { id: 8, brandName: "Fila", price: 300, img: "" },
        { id: 9, brandName: "Under Armour", price: 290, img: "" },
        { id: 10, brandName: "Jordan", price: 350, img: "" },
        { id: 11, brandName: "Asics", price: 275, img: "" },
        { id: 12, brandName: "Skechers", price: 240, img: "" },
        { id: 13, brandName: "Balenciaga", price: 400, img: "" },
        { id: 14, brandName: "Gucci", price: 500, img: "" },
        { id: 15, brandName: "Prada", price: 450, img: "" },
        { id: 16, brandName: "Louis Vuitton", price: 600, img: "" },
    ];
    const card = [
        { id: 1, brandName: "Nike", price: 299, img: "" },
        { id: 2, brandName: "Adidas", price: 320, img: "" },
        { id: 3, brandName: "Puma", price: 280, img: "" },
        { id: 4, brandName: "Reebok", price: 310, img: "" },
    ];

    const [visibleCount, setVisibleCount] = useState(8);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 4);
    };

    return (
        <div className="container">
            <h1 className={"famous"} style={{ color: "#0B1120", marginLeft: "auto" }}>
                Famous <i className="bi bi-arrow-right"></i>
            </h1>

            <div className="carddiv">
                {cards.slice(0, visibleCount).map((card, index) => (
                    <div key={index} className="card">
                        <div className="image_container">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
                                <path
                                    d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="title">
                            <span>{card.brandName}</span>
                        </div>
                        <div className="size">
                            <span>Size</span>
                            <ul className="list-size">
                                <li className="item-list"><button className="item-list-button">37</button></li>
                                <li className="item-list"><button className="item-list-button">38</button></li>
                                <li className="item-list"><button className="item-list-button">39</button></li>
                                <li className="item-list"><button className="item-list-button">40</button></li>
                                <li className="item-list"><button className="item-list-button">41</button></li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="price">
                                <span>${card.price}</span>
                            </div>
                            <button style={{ backgroundColor: '#FDBD00', color: '#0B1120' }} className="cart-button">
                                <i className="bi bi-cart"></i>
                                <span>Add to cart</span>
                            </button>
                            <button><i className={"bi bi-heart"}></i></button>
                        </div>
                    </div>
                ))}

                {visibleCount < cards.length && (
                    <button className={"showmore"} onClick={handleShowMore}>Show more</button>
                )}
            </div>
            <div className="twicediv">
                <div className="second">
                    <img src="https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/3HXsKaCbzqktXwnVnmYyMSIKofg9poZU7eWLFEiyrVhUJBT5s7zOSVigU2Bi.jpg" alt=""/>
                </div>
                <div className="second">
                    <img src="https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/lbPZht6jDm2vA3sXN6ux6mdvbvHArxfwCqSpnpOc0n1WXoV2KeHxrkeqMdCC.jpg" alt=""/>
                </div>
            </div>
            <div className="carddiv">
                {card.slice(0, visibleCount).map((card, index) => (
                    <div key={index} className="card">
                        <div className="image_container">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="image">
                                <path
                                    d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
                                ></path>
                            </svg>
                        </div>
                        <div className="title">
                            <span>{card.brandName}</span>
                        </div>
                        <div className="size">
                            <span>Size</span>
                            <ul className="list-size">
                                <li className="item-list"><button className="item-list-button">37</button></li>
                                <li className="item-list"><button className="item-list-button">38</button></li>
                                <li className="item-list"><button className="item-list-button">39</button></li>
                                <li className="item-list"><button className="item-list-button">40</button></li>
                                <li className="item-list"><button className="item-list-button">41</button></li>
                            </ul>
                        </div>
                        <div className="action">
                            <div className="price">
                                <span>${card.price}</span>
                            </div>
                            <button style={{ backgroundColor: '#FDBD00', color: '#0B1120' }} className="cart-button">
                                <i className="bi bi-cart"></i>
                                <span>Add to cart</span>
                            </button>
                            <button><i className={"bi bi-heart"}></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
