import React, { useEffect, useState } from "react";
import ProductCard from "./product/product";
import "./products.css";
import products from '../../assets/products.json';
import DropDown from "../dropdown/dropdown";

const ProductsList = () =>{
    const ddlOptions =[
        {label: "INR", currency: "₹"},
        {label: "USD", currency: "$"},
        {label: "EUR", currency: "€"}
     ];

    const defaultSelected = JSON.parse(localStorage.getItem('currency')) || ddlOptions[0];
    console.log(defaultSelected);
    const [selectedCurrency, setSelectedCurrency] = useState(defaultSelected);
    const [rates, setRates] = useState({'INR': 1});
    const [exchange, setExchange]  = useState(1);

    const handleSelect = (option) => {
        setSelectedCurrency(option);
        localStorage.setItem('currency', JSON.stringify(option));
    };

    useEffect(()=> {
    //fetch("http://api.exchangeratesapi.io/v1/latest?access_key=1e0e49c0da622ebc14268da2f51576bb")
    fetch("https://v6.exchangerate-api.com/v6/6ec736888b5ed3f3c3d6f3d3/latest/INR")
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        setRates(data.conversion_rates);
        //setExchange(rates[selectedCurrency.label]);
    })
    .catch((error) => {
        console.log(error);
    })
    }, []);


    useEffect(()=>{
       // localStorage.setItem('currency', JSON.stringify(selectedCurrency));
        setExchange(rates[selectedCurrency.label]);
    }, [selectedCurrency]);



    return (
        <>
            <div className="ddContainer">
                <DropDown onSelect={handleSelect} ddlOptions={ddlOptions} />
            </div>
            <div className="productContainer">
                {
                    products.products.map((product) => {
                        return <ProductCard key={product.productId}  name={product.name} imgSrc={product.image} 
                        price={product.price} exchange={exchange} currency={selectedCurrency}/>
                    })
                }
            </div>
        </>
    )
}

export default ProductsList;