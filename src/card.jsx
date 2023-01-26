import React, { useState, useEffect } from 'react';
import './card.css'

//

// function Stars() {
//     if (rate) {
//         return(
//             <div className={'rate'}>
//                 <div className={'star'}></div>
//                 <div className={'star'}></div>
//                 <div className={'star'}></div>
//                 <div className={'star'}></div>
//                 <div className={'star'} id={'star-empty'}></div>
//             </div>
//         )
//     }
//     return (
//         <div className={'rate'}>
//             ещё нет оценок
//         </div>
//     )
// }
// function Stars(props) {
//     if (Card.props.rate === true) {
//         return (
//             <>
//                 <div className={'rate'}>
//                     <div className={'star'}></div>
//                     <div className={'star'}></div>
//                     <div className={'star'}></div>
//                     <div className={'star'}></div>
//                     <div className={'star'} id={'star-empty'}></div>
//                 </div>
//             </>
//         )
//     }
// }



export default function Card(props, {children}) {
    let Stars
    if (props.rate) {
            Stars = <div className={'rate'}>
            <div className={'star'}></div>
            <div className={'star'}></div>
            <div className={'star'}></div>
            <div className={'star'}></div>
            <div className={'star'} id={'star-empty'}></div>
        </div>
    } else {
        Stars = <div className={'rate'}>
            ещё нет оценок
        </div>
    }
        return (
            <div className={'card-box'}>
                <div className={'card-picture'}></div>
                {Stars}
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

