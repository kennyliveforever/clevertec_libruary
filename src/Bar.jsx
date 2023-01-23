import React from "react";

import './Bar.css'

export default function Bar() {
    return(
        <>
            <div className={'bar-box'}>
                <div className={'search'}>
                    <span className={'lens'}></span>
                    <form>
                        <input type={'text'} placeholder={'Поиск книги или автора…'} className={'field'}></input>
                    </form>
                </div>
                <div className={'sort'}>
                    <div className={'icon'}></div>
                    <div className={'sort-by'}>По рейтингу</div>
                </div>
                <div className={'button-view'}>
                    <div className={'view-icon'}></div>
                </div>
                <div className={'filters'}>
                    <div className={'filters-icon'}></div>
                </div>
            </div>
        </>
        )
}