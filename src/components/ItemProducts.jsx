import React from 'react';

const ItemProducts = ({ product }) => {
    return(
        <div className="container-fluid">
            <div className="Products-item">
                <img src={product.coverURL} alt={product.name_product} />
                <div className="Product-item-info">
                    <h2>
                        { product.name_product }
                        <span>
                            ${' '}
                            {product.price}
                        </span>
                    </h2>
                    <p>{product.description}</p>
                </div>
                <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
            </div>
        </div>
    );
};

export default ItemProducts;