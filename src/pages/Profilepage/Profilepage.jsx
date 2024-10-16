import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Helper from "../../components/Helper";
import HeaderComponent from "../Products/component/HeaderComponent";

function ProfilePage({ darkMode, setDarkMode }) {
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
                <HeaderComponent label="الصفحات التعريفية" />

                <div className="ProfilePage ms-6">Profilepage</div>
            </main>
        </div>
    );
}

export default ProfilePage;
