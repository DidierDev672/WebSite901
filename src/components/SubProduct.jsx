import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../reducers/cart/cartSlice";
import "../styles/components/products.scss";

const SubProduct = ({ product }) => {
    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);
    const handleAddOrRemoveProduct = (product) => {
        if(productsList.find(pdt => pdt.id === product.id)){
            dispatch(removeProductFromCart(product.id));
        }else{
            dispatch(addProductToCart({
                id: product.id,
                name_product: product.name_product,
                category: product.category,
                price: product.price,
                quantity: 1,
                description: product.description
            }));
        }
    };
    return(
        <section>
            <ul className="card-list-card">
                <li><span className="title-list-products">{product.name_product}</span></li>
                <li><span className="price-list-products">${product.price}</span></li>
                <li><span className='description-list-products'>{product.description}</span></li>
                <li><button type="button" className={`${productsList.find(pdt => pdt.id === product.id) ? "btn-delete-product" : "btn-cart"}`} onClick={() => handleAddOrRemoveProduct(product)}>
                    {productsList.find(pdt => pdt.id === product.id) ? "Eliminar del " : "Agregar al "} carrito
                </button></li>
            </ul>
        </section>
    );
};

export default SubProduct;