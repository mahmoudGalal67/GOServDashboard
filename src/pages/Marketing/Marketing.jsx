import React from "react";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from "../Products/component/HeaderComponent";

function Marketing({ darkMode, setDarkMode }) {
    return (
        <div
            className={`flex flex-wrap' ${darkMode ? "dark" : ""}`}
            style={{ backgroundColor: darkMode ? "#282828" : "transparent" }}
        >
            <Sidebar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Helper />
            <main
                className="mx-6 mt-28 w-full"
            >
                <HeaderComponent label="الإدوات التسويقية" />

                <div className="Marketing ms-6">Marketing</div>
            </main>
        </div>
    );
}

export default Marketing;
