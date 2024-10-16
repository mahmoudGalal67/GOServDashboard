import React, { useState, useEffect } from "react";
import googleplay from './../assets/googleplay.svg'
import applestore from "./../assets/applestore.svg"
import sbImg from "../assets/u1GwprK5yFRK0UsCdKzY2MWG8nJpRHhpNzG8h0c4.webp";
import { HiOutlineHome } from "react-icons/hi";
import { TbShirt } from "react-icons/tb";
import { BsBox2, BsPersonLinesFill } from "react-icons/bs";
import { GoBriefcase, GoPeople } from "react-icons/go";
import { FiPieChart } from "react-icons/fi";
import { TbMessageQuestion } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { TbSpeakerphone } from "react-icons/tb";
import { CiBullhorn, CiSettings, CiShare2 } from "react-icons/ci";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaLandmarkSolid } from "react-icons/lia";
import { IoExtensionPuzzleOutline, IoLibraryOutline, IoWalletOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { VscExtensions } from "react-icons/vsc";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* Toggle button */}
      <button
        className="lg:hidden"
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "10px",
          right: "10px", // Adjust the button position based on the sidebar state
          zIndex: 100000000000,
          background: "#00414d",
          color: "#fff",
          padding: "6px",
          borderRadius: "50%",
          border: "1px solid ",
        }}
      >
        {isOpen ? <IoMdClose size={20} /> : <IoIosArrowBack size={20} />}
      </button>

      {/* Sidebar */}
      <div
        dir="rtl"
        className="sidebar custom-scrollbar text-white lg:w-260px"
        style={{
          width: isOpen ? "260px" : "0",
          minHeight: "calc(100vh - 56px)",
          height: "800px",
          maxHeight: "100%",
          marginTop: "56px",
          backgroundColor: "#77c1e3",
          overflowY: "scroll",
        }}
      >
        <div className="sidebarLogo ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {/* badge */}
            <span
              style={{
                backgroundColor: "#f9c02e",
                color: "#271c01",
                borderRadius: "20px",
                //   width:'fit-content !important',
                height: "21.5px",
                fontSize: "12px",
                lineHeight: "12px",
                textAlign: "center",
                verticalAlign: "middle",
                padding: "2px 10px 4px",
                marginBottom: "-15px",
              }}
            >
              سبيشل
            </span>
            <img
              src={sbImg}
              alt="sbpic"
              style={{
                width: "65px",
                height: "65px",
                objectFit: "cover",
                border: "2px dashed #f9c02e",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        <p className="text-center ">متجر الهدايا</p>
        <div
          style={{
            border: "1px solid #baf3e6",
            borderRadius: "25px",
            width: "fit-content",
            fontSize: "14px",
            margin: "16px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            //   gap: "10px",
            overflow: "hidden",
          }}
        >
          <p
            className="text-center "
            style={{
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
            }}
          >
            زياره المتجر
            <IoIosArrowBack />
          </p>
          {/* share icon */}

          <button
            className="-translate-x-[13px]"
            style={{

              backgroundColor: "#baf3e6",
              height: "30.6px",
              padding: "4px 12px",
              color: "#003c47",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            <CiShare2 />
          </button>
        </div>

        {/* sidebar list */}
        <ul className="sidebarList ">
          <li>
            <Link to="/" className="sidebarLink ">
              <HiOutlineHome />
              الرئيسية
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebarLink ">
              <TbShirt />
              المنتجات
            </Link>
          </li>
          <li>
            <Link to="/orders" className="sidebarLink ">
              <BsBox2 />
              الطلبات
            </Link>
          </li>
          <li>
            <Link to="/clients" className="sidebarLink ">
              <GoPeople />
              العملاء
            </Link>
          </li>
          <li>
            <Link to="/reports" className="sidebarLink ">
              <FiPieChart />
              التقارير
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="sidebarLink ">
              <TbMessageQuestion />
              الأسئلة والتقييمات
            </Link>
          </li>
          <li>
            <Link to="/profilepage" className="sidebarLink ">
              <LuNewspaper />
              الصفحات التعريفية
            </Link>
          </li>
          <li>
            <Link to="/marketing" className="sidebarLink ">
              <TbSpeakerphone />
              الأدوات التسويقية
            </Link>
          </li>
          {/* navigation headers */}
          <li className="mt-8 navHeader">
            <Link 
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              قنوات البيع
            </Link>
          </li>
          <li>
            <Link to="/mahally" className="sidebarLink ">
              <i class="sicon-mahally"></i>
              محلي
            </Link>
          </li>
          <li>
            <Link to="/sallapoint" className="sidebarLink ">
              <i class="sicon-pos"></i>
              سلة بوينت
            </Link>
          </li>
          {/* ادوات مسانده */}
          <li className="mt-8 navHeader">
            <Link
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              ادوات مسانده
            </Link>
          </li>
          <li>
            <Link to="/experts" className="sidebarLink ">
              <GoBriefcase />
              خدمة التاجر
            </Link>
          </li>
          <li>
            <Link to="/influencers" className="sidebarLink ">
              <BsPersonLinesFill />
              المؤثرين
            </Link>
          </li>
          <li>
            <Link to="/sweply" className="sidebarLink ">
              <CiBullhorn />
              اعلانات سويبلي
            </Link>
          </li>
          {/* اعدادات */}
          <li className="mt-8 navHeader">
            <Link
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              الاعدادات
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className="sidebarLink ">
              <LiaLandmarkSolid />
              باقة المتجر
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebarLink ">
              <CiSettings />
              اعدادات المتجر
            </Link>
          </li>
          <li>
            <Link to="/wallet" className="sidebarLink ">
              <IoWalletOutline />
              المحفظة والفواتير
            </Link>
          </li>

          {/* مظهر المنتج */}
          <li className="mt-8 navHeader">
            <Link
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              مظهر المتجر
            </Link>
          </li>
          <li>
            <Link to="/marketplacethemes" className="sidebarLink ">
              <IoLibraryOutline />
              تصميم المتجر
            </Link>
          </li>
          <li>
            <Link to="/mobile-app" className="sidebarLink ">
              <MdOutlinePhoneAndroid />
              صانع التطبيقات
            </Link>
          </li>
          {/* متجر التطبيقات */}
          <li className="mt-8 navHeader">
            <Link
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              متجر التطبيقات
            </Link>
          </li>
          <li>
            <Link to="/apps" className="sidebarLink ">
              <IoExtensionPuzzleOutline />
              التطبيقات المثبتة
            </Link>
          </li>
          <li>
            <Link to="#" className="sidebarLink ">
              <VscExtensions />
              زيارة متجر التطبيقات
            </Link>
          </li>
          {/* تطبيق التاجر */}
          <li className="mt-8 navHeader">
            <Link
              to=""
              style={{
                color: "#1e90ff",
                fontWeight: "600",
              }}
            >
              تطبيق التاجر
            </Link>
          </li>
          <div className="flex flex-row items-center gap-2 justify-between px-2">
            <Link to=''>
              <img className="w-full" src={googleplay} alt="googleplay" />
            </Link>
            <Link to=''>
              <img className="w-full" src={applestore} alt="applestore" />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
