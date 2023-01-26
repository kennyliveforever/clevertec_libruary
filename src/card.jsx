import React from 'react';
import './card.css'

export default function Card(props) {

    let Stars
    let buttonStyle
    let buttonTextStyle

    if (props.rate) {
            Stars = <div className={'rate'}>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'}/>
            <div className={'star'} id={'star-empty'}/>
        </div>
    } else {
        Stars = <div className={'rate'}>
            ещё нет оценок
        </div>
    }

    if (props.order === 'Забронирована') {
        buttonStyle = {background: 'none', border: '1px solid #BFC4C9'}
        buttonTextStyle = {color: '#363636'}
    }

    if (props.order !== 'Забронирована' && props.order !== 'Забронировать') {
        buttonStyle = {background: '#F9F9FA', border: '1px solid #BFC4C9'}
        buttonTextStyle = {color: '#A7A7A7'}
    }

        return (
            <div className={'card-box'}>
                <div className={'card-picture'} style={{backgroundImage: 'url('+props.image+')'}}/>
                {Stars}
                <div className={'description'}>
                    <div className={'book-title'}>{props.title}</div>
                    <div className={'book-author'}>{props.author}</div>
                </div>
                <div className={'order-button'} style={buttonStyle}>
                    <div className={'order-button-text'} style={buttonTextStyle}>{props.order}</div>
                </div>
            </div>
        )
}

