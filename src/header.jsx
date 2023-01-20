import React from "react";
import "./header.css"
//import "../public/logo.png"

export default function Header() {
    return (
        <>
            <div className='container'>
                <div className="content">
                  <div className="logo"></div>
                    <div className="title">Библиотека</div>
                    <div className={"user"}>Привет, Иван!</div>
                    <div className={"avatar"}></div>
                </div>
            </div>
        </>
    )
}