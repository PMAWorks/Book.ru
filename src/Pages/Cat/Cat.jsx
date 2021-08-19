import react from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import BookContainer from '../Book/BookContainer'
import { CatMenu } from '../Menu/Menu'
import { NoPage } from '../NoPage/NoPage'
import s from './Cat.module.css'

export const Cat = (props) => {

    return (
        <div className={s.Cat}>
            <CatMenu></CatMenu>
            <Switch> //В зависимости от роутинга показывается разная часть
                <Route exact path="/" render={({ match, location }) =>
                    <div className={s.mainInfo}>
                        <div>Книги</div>
                        <div>Электронно-библиотечная система BOOK.RU более 10 лет служит незаменимым интеллектуальным помощником преподавателям, аспирантам, студентам, научным работникам.</div>
                        <div>В состав базовой коллекции включены учебники и учебные пособия для высшего и среднего профессионального образования, монографии и периодика, в том числе журналы, входящие в Перечень ВАК.</div>
                        <div>Воспользуйтесь меню или поиском, чтобы найти нужное издание.</div>
                        <div>Зарегистрируйтесь для получения личного кабинета и доступа к персональным сервисам.</div>
                        <div>Перечень доступной литературы определяет ваша организация-подписчик.</div>
                        <div>Раздел «Тесты» и сервисы «Библиотекарю» пока не доступны на новом сайте. Воспользуйтесь разделом «Тесты» и сервисами «Библиотекарю» старого сайта.</div>
                    </div>}>
                </Route>
                <Route exact path="/Cat" render={({ match, location }) => <BooksPage Books={props.Books}></BooksPage>}>
                </Route>
                <Route path="/Cat/:CatNumber" render={({ match, location }) =>
                    <NoPage></NoPage>}>
                </Route>
                <Route path="/Book/:BookNumber" render={({ match, location }) =>
                    <BookContainer></BookContainer>}>
                </Route>
            </Switch>
        </div>
    )
}

const BooksPage = (props) => { //Компонента для отображения новинок
    return (
        <div>
            <div className={s.PageName}>Новинки электронной библиотеки</div>
            <div className={s.Books}>
                {props.Books ? props.Books.map((book) => {
                    return (
                        <div className={s.BookCard} key={book.BookNum}>
                            <NavLink to={`Book/${book.BookNum}`}><img src={book.PhotoSRC} className={s.CardImg}></img></NavLink>
                            <NavLink to={`Book/${book.BookNum}`}><div>{book.Name}</div></NavLink>
                            <div>{book.Author}</div>
                            <div>{book.Year}</div>
                        </div>
                    )
                }) : null}
            </div>
        </div>
    )
}