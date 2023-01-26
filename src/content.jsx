import React from "react";
import "./content.css"
import Card from "./card";
import Image from './image.png'
import NoImage from './image (1).png'

export default function Content() {
   return(
    <div className={'content-box'}>
        <>
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'}
                  author={'Адитья Бхаргава, 2019'}
                  order={'Забронировать'}
                  rate={false}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное '}
                  author={'Адитья Бхаргава, 2019'} order={'Забронировать'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы.  '}
                  author={'Адитья Бхаргава, 2019'}
                  order={'занята до 03.05'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное '}
                  author={'Адитья Бхаргава, 2019'}
                  order={'Забронировать'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное '}
                  author={'Адитья Бхаргава, Патрик Нимейер, 2019'}
                  order={'Забронирована'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное '}
                  author={'Адитья Бхаргава, Патрик Нимейер, 2019'}
                  order={'Занята до 23.04'}
                  rate={false}
                  image={NoImage}
            />
            <Card title={'Грокаем алгоритмы. '}
                  author={'Адитья Бхаргава, Патрик Нимейер, 2019'}
                  order={'Забронировать'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'}
                  author={'Адитья Бхаргава, Патрик Нимейер, 2019'}
                  order={'Забронировать'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'}
                  author={'Адитья Бхаргава, 2019'}
                  order={'Забронировать'}
                  rate={true}
                  image={Image}
            />
            <Card title={'Грокаем алгоритмы. Иллюстрированное пособие для програ...'}
                  author={'Адитья Бхаргава, 2019'}
                  order={'Забронировать'}
                  rate={true}
                  image={NoImage}
            />
            </>
    </div>
   )
}