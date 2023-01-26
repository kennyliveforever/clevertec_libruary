import React from "react";
import "./content.css"
import Card from "./card";

export default function Content() {
   return(
    <div className={'content-box'}>
        <>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'} author={'Адитья Бхаргава, 2019'} order={'Забронировать'} rate={true}/>
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
    </div>
   )
}