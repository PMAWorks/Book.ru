import react from 'react'
import { useState } from 'react';
import { PDFReader } from 'reactjs-pdf-reader';
import Book from '../../Assets/Book.pdf'
import s from './ReadBooks.module.css'


export const ReadBooks = (props) => {

    var [page, setPage] = useState(1) //Текущая сраница

    return (
        <div>
            <div className={s.ControlPanel}> //Панель для контроля отобажения станиц
                <div onClick={() => page != 1 ? setPage(page - 1) : null} className={s.ControlButton}>Предыдущая</div>
                <div onClick={() => setPage(page + 1)} className={s.ControlButton}>Следующая</div>
            </div>
            <div style={{ overflow: 'scroll', height: 700 }}>
                <PDFReader url={Book} page={page} width={500} /> //Библиотека для просмотра pdf-файлов на странице
            </div>
        </div>
    )
}