import React from "react";
import './card.css'



// let Rate = ({ children }) => <div className={'rate'}>ещё нет оценок</div>

export default function Card(props, {children}) {

    return (
        <div className={'card-box'}>
            <div className={'card-picture'}></div>
            <div className={'rate'}>
                <div className={'star'}></div>
                <div className={'star'}></div>
                <div className={'star'}></div>
                <div className={'star'}></div>
                <div className={'star'} id={'star-empty'}></div>
            </div>;
            <div className={'description'}>
                <div className={'book-title'}>{props.title}</div>
                <div className={'book-author'}>{props.author}</div>
            </div>
            <div className={'order-button'}>
                <div className={'order-button-text'}>{props.order}</div>
            </div>
        </div>
      )
}

