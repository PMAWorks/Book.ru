import react from 'react'
import { NavLink } from 'react-router-dom'
import s from './Book.module.css'

export const BookPage = (props) =>{
    return(
        <div className={s.Page}>
            <div className={s.BookName}>{props.Book.Name}</div>
            <div className={s.BookMainInfo}>
                <div className={s.LeftSide}>
                    <img src={props.Book.PhotoSRC} className={s.BookImg}></img>
                    <NavLink to={`/ReadBook/${props.Book.BookNum}`}><div className={s.ReadButton}>Ознакомиться</div></NavLink>
                </div>
                <div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Авторы:</div><div>{props.Book.Author}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Вид издания:</div><div>{props.Book.VidIzdanya}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Уровень образования:</div><div>{props.Book.Education}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Год издания:</div><div>{props.Book.Year}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Объем:</div><div>{props.Book.Size}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Издательство:</div><div>{props.Book.Izd}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Язык:</div><div>{props.Book.Lang}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>ISBN:</div><div>{props.Book.ISBN}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>Темы:</div><div>{props.Book.Temes}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>ОКСО:</div><div>{props.Book.OKSO}</div></div>
                    <div className={s.RightSideItem}><div className={s.ItemName}>EAN:</div><div>{props.Book.EAN}</div></div>
                    <div className={s.BookDesc}>{props.Book.Desc}</div>
                </div>
            </div>
        </div>
    )
}