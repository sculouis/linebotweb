import React from "react";
import { useSelector } from "react-redux";



export default function Cart() {
    const datas = useSelector((state) => state.productsReducer);
    const products = datas.map((item) => 
        <li>
            {item.name}
        </li>

    )


    return(
        <>
        <h2>購物車內容</h2>
        <ul>
            {products}
        </ul>
        </>
    );

}