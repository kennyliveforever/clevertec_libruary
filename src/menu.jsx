import React from "react";
import './menu.css'

export default function Menu() {
  return (
      <>
          <div className={'menu-container'}>
              <div className={'active-item'}>Витрина книг</div>
              <div className={'categories'}>
                  <div className={'all-books'}>Все книги</div>
                  <div className={'menu-item'} id={'0'}>Бизнес-книги<span id={'count'}>14</span></div>
                  <div className={'menu-item'} id={'1'}>Детективы<span id={'count'}>8</span></div>
                  <div className={'menu-item'} id={'2'}>Детские книги<span id={'count'}>14</span></div>
                  <div className={'menu-item'} id={'3'}>Зарубежная литература<span id={'count'}>2</span></div>
                  <div className={'menu-item'} id={'4'}>История<span id={'count'}>5</span></div>
                  <div className={'menu-item'} id={'5'}>Классическая литература<span id={'count'}>12</span></div>
                  <div className={'menu-item'} id={'6'}>Книги по психологии<span id={'count'}>11</span></div>
                  <div className={'menu-item'} id={'7'}>Компьютерная литература<span id={'count'}>54</span></div>
                  <div className={'menu-item'} id={'8'}>Культура и искусство<span id={'count'}>5</span></div>
                  <div className={'menu-item'} id={'9'}>Наука и образование<span id={'count'}>2</span></div>
                  <div className={'menu-item'} id={'10'}>Публицистическая литература<span id={'count'}>0</span></div>
                  <div className={'menu-item'} id={'11'}>Справочники<span id={'count'}>10</span></div>
                  <div className={'menu-item'} id={'12'}>Фантастика<span id={'count'}>12</span></div>
                  <div className={'menu-item'} id={'13'}>Юмористическая литература<span id={'count'}>8</span></div>
              </div>
              <div className={'rules'}>Правила Использования</div>
              <div className={'contract'}>Договор оферты</div>
          </div>
      </>
  )
}