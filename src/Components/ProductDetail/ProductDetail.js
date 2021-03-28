import React, { useState, useEffect, useCallback } from "react";

import { fetchProductDetail } from "../../utils/api";
import Loader from '../Loader/Loader'

import "./ProductDetail.css";

function ProductDetail({ productId }) {
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProductDetail = useCallback((id) => {
    setLoading(true)
    fetchProductDetail(id)
    .then((productInfo) =>{
      setLoading(false)
      setProductInfo(productInfo)
    })
    .catch((err)=>{
      setLoading(false)
      alert("Oops!Something went wrong.")
      //handle this error to show Error Snackbar
    });
  },[])
  
  useEffect(() => {
    if (!productId) 
      return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getProductDetail(productId)
  },[productId, getProductDetail]);
  
  const renderProductInfo = () => {
    return (
      <div className="detail-container">
        <div className="row">
          <img src={productInfo.image} className="product-image" alt={productInfo.title}/>
        </div>
        <div className="row">
          <div className="row-body product-title">{productInfo.title}</div>
        </div>
        <div className="row">
          <div className="row-body product-desc">{productInfo.description}</div>
        </div>
        <div className="row">
          <div className="row-body product-title">{"£"+productInfo.price}</div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Loader loading={loading}/>
      {productInfo && renderProductInfo()}
    </React.Fragment>
  )
}

export default ProductDetail;
