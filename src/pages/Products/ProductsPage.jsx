import React, { useState, useEffect, useContext } from "react";
import HeaderComponent from "./component/HeaderComponent";
import ProductHead from "./component/ProductHead";
import ProductList from "./component/Products";
import ProductListRow from "./component/ProductsListRow";
import "./ProductPage.css";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Helper from "../../components/Helper";
import { request } from "../../components/utils/Request";
import { ProductContext } from "../../components/context/Product";

const ProductsPage = (props) => {
  const { dispatch, products } = useContext(ProductContext);

  const [isProductListVisible, setProductListVisible] = useState(true);

  const showProductList = () => {
    setProductListVisible(true);
  };

  const hideProductList = () => {
    setProductListVisible(false);
  };

  useEffect(() => {
    const getProduts = async () => {
      try {
        const { data } = await request({
          url: `/api/dashboard/products`,
        });
        dispatch({
          type: "fetchProducts",
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProduts();
  }, []);

  console.log("products", products);

  const deleteProduct = (index) => {};

  return (
    <div
      className={`slidePage flex flex-wrap' ${props.darkMode ? "dark" : ""}`}
      style={{ backgroundColor: props.darkMode ? "#282828" : "transparent" }}
    >
      <Sidebar />
      <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
      <main
        className="w-full h-full lg:w-[calc(100%-260px)] pt-0 px-0 lg:px-10 pb-[60px]"
        style={{
          flexGrow: 2,
          marginTop: "80px",
          marginRight: "250px",
          height: "100%",
          width: "calc(100% - 260px)",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <div className="headerComponent" style={{ width: "98%" }}>
          <HeaderComponent />
          <ProductHead
            showProductList={showProductList}
            hideProductList={hideProductList}
          />
          {isProductListVisible ? (
            <ProductList
              products={products}
              onDelete={(index) => deleteProduct(index)}
            />
          ) : // <ProductListRow
          //   products={products}
          //   onDelete={(index) => deleteProduct(index)}
          // />
          null}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
