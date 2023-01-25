import React from "react";
import "./content.css"
import Card from "./card";

export default function Content() {
   return(
    <div className={'content-box'}>
        <>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'} author={'Адитья Бхаргава, 2019'} order={'Забронировать'} rate={'true'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное '} author={'Адитья Бхаргава, 2019'} order={'Забронировать'}/>
            <Card title={'Грокаем алгоритмы.  '} author={'Адитья Бхаргава, 2019'} order={'занята до 03.05'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное '} author={'Адитья Бхаргава, 2019'} order={'Забронировать'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное '} author={'Адитья Бхаргава, Патрик Нимейер, 2019'} order={'Забронирована'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное '} author={'Адитья Бхаргава, Патрик Нимейер, 2019'} order={'Занята до 23.04'}/>
            <Card title={'Грокаем алгоритмы. '} author={'Адитья Бхаргава, Патрик Нимейер, 2019'} order={'Забронировать'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'} author={'Адитья Бхаргава, Патрик Нимейер, 2019'} order={'Забронировать'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'} author={'Адитья Бхаргава, 2019'} order={'Забронировать'}/>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'} author={'Адитья Бхаргава, 2019'} order={'Забронировать'}/>
        </>

        {/*<div className={'card-box'} id={'01'}>*/}
        {/*    <div className={'card-picture'}></div>*/}
        {/*    <div className={'rate'}>*/}
        {/*        <div className={'star'}></div>*/}
        {/*        <div className={'star'}></div>*/}
        {/*        <div className={'star'}></div>*/}
        {/*        <div className={'star'}></div>*/}
        {/*        <div className={'star'} id={'star-empty'}></div>*/}
        {/*    </div>*/}
        {/*    <div className={'description'}>*/}
        {/*        <div className={'book-title'}>sdgsdgsdgsdgsdgasdfasdfasdfsdfsdfsdfsdfsd</div>*/}
        {/*        <div className={'book-author'}>ffbdfbdfbdf</div>*/}
        {/*    </div>*/}
        {/*    <div className={'order-button'}>*/}
        {/*        <div className={'order-button-text'}>bwerbwerbweb</div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
   )
}