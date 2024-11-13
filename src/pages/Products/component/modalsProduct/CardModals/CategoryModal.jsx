import React, { useState } from "react";
import "../../ProductCard.css";
import "../../ProductsRow.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

const CategoryModal = ({ isColumn }) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [isMainCategory, setIsMainCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [language, setLanguage] = useState("AR");
  const [categoryNameAR, setCategoryNameAR] = useState(""); 
  const [categoryNameEN, setCategoryNameEN] = useState(""); 

  const handleCategoryModalClose = () => setShowCategoryModal(false);
  const handleCategoryModalShow = () => setShowCategoryModal(true);

  const toggleMainCategory = () => {
    setIsMainCategory((prev) => !prev);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    if (language === "AR") {
      setCategoryNameAR(value);
    } else {
      setCategoryNameEN(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
     const data = {
      name: {
        ar: categoryNameAR,
        en: categoryNameEN,
      },
      photo:""
    };

    try {
      const response = await axios.post(
        "https://goservback.alyoumsa.com/api/dashboard/categories",
        data
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Category added successfully", response.data);
        alert("Category added successfully");
        setShowCategoryModal(false);
      }
    } catch (error) {
      console.error("Error adding category", error);
    }
  };

  return (
    <>
      {isColumn ? (
        <div
          className="classificationNameClass"
          onClick={handleCategoryModalShow}
        >
          <p style={{ color: "black" }}>تصنيف</p>
        </div>
      ) : (
        <span style={{ fontSize: "12px" }} onClick={handleCategoryModalShow}>
          اضف تصنيف
        </span>
      )}
      <Modal
        show={showCategoryModal}
        onHide={handleCategoryModalClose}
        centered
        size="lg"
        style={{ zIndex: 9999999999 }}
        className="CategoryModal"
      >
        <div className="modal-header">
          <h4>إضافة تصنيف جديد</h4>
          <Button
            variant="link"
            onClick={handleCategoryModalClose}
            className="close-button"
          >
            &times;
          </Button>
        </div>
        <Modal.Body>
          <form style={{ direction: "rtl" }}>
            <div>
              <label style={{ marginRight: "16px" }}>اسم التصنيف</label>
              <br />
              <div className="field-category">
                <div className="InputCategoryClass">
                  <input
                    type="text"
                    placeholder={
                      language === "AR" ? "ادخل اسم التصنيف" : "Enter the category name"
                    }
                    value={language === "AR" ? categoryNameAR : categoryNameEN}
                    onChange={handleInputChange}
                    required
                    style={{
                      direction: language === "AR" ? "rtl" : "ltr",
                      textAlign: language === "AR" ? "right" : "left",
                    }}
                  />
                </div>
                <div className="selectCategoryClass">
                  <select
                    name="language"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="AR">AR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{ marginRight: "16px" }}>
              <label>
                <input
                  type="checkbox"
                  checked={isMainCategory}
                  onChange={toggleMainCategory}
                />
                إضافة الي التصنيف رئيسي
              </label>
            </div>
            {isMainCategory && (
              <div style={{ marginRight: "16px", marginTop: "10px" }}>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">تحديد التصنيف الرئيسي</option>
                  <option value="هدية موسمية">هدية موسمية</option>
                  <option value="الشتاء">الشتاء</option>
                  <option value="الصيف">الصيف</option>
                  <option value="الربيع">الربيع</option>
                  <option value="كفر جوال هدية">كفر جوال هدية</option>
                </select>
              </div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCategoryModalClose}>
            إلغاء
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            إضافة التصنيف
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoryModal;