import React, { FC } from 'react';
import { SearchIcon } from "./icons/SearchIcon";
import { PlayCircleIcon } from "./icons/PlayCircleIcon";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { useNavigate } from "react-router-dom";

export const App: FC = () => {
    const navigate = useNavigate()
    const pathname = window.location.pathname

    const headerParagraphs = [
        {
            id: 1,
            title: 'Главная',
            route: '/'
        },
        {
            id: 2,
            title: 'О нас',
            route: '/about'
        },
        {
            id: 3,
            title: 'Продукты',
            route: '/products'
        },
        {
            id: 4,
            title: 'Контакты',
            route: '/contacts'
        },
        {
            id: 5,
            title: 'Новости',
            route: '/news'
        }
    ]

    return (
        <div className="main">
            <img src="/images/background_main.png" alt="background" className='main__background' />

            <div className='section'>
                <div className='header'>
                    <img src="/images/main_logo.png" alt="logo" className='header__logo' />

                    <div className='header__right'>
                        <div className='header__paragraphs'>
                            { headerParagraphs.map((paragraph, idx) => (
                                <p
                                    key={idx}
                                    className={ `${ pathname === paragraph.route ? 'header__paragraphs-active' : '' }` }
                                    onClick={ () => navigate(paragraph.route) }
                                >
                                    { paragraph.title }
                                </p>
                            )) }
                        </div>

                        <label className='header-search'>
                            <input type="search" placeholder='Поиск...' />

                            <SearchIcon />
                        </label>

                        <div className='header-select'>
                            <h1>Ру</h1>

                            <ChevronDownIcon />
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <h1 className='content__title'>
                        Экологически чистые продукты из богатой флоры
                        <span>Узбекистана</span>
                    </h1>

                    <p className='content__paragraph'>
                        Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и
                        глубоких знаний. Опираясь на богатое историческое наследие Узбекистана и стремление к
                        инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие,
                        целью которого является использование экологически чистых, натуральных местных природных
                        богатств — цветов, листьев, кожуры, семян, корней дикорастущих лекарственных растений, фруктов и
                        овощей
                    </p>

                    <div className="content__buttons">
                        <button className="content__buttons-button">
                            <p>Связаться с нами</p>
                        </button>
                        <button className="content__buttons-button">
                            <p>Смотреть о нас</p> <PlayCircleIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
