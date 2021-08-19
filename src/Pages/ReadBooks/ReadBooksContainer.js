import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { ReadBooks } from './ReadBooks'


class ReadBookContainer extends React.Component { //Buisness-слой для компоненты отображения чтения книг

    componentDidMount() {
        //Запрос на сервер
    }

    render() {
        return <>
            <ReadBooks
            ></ReadBooks>
        </>
    }
}

let mapStateToProps = (state) => { //Чтение необходимых данных из store
    return {
    }
}

export default compose(
    connect(mapStateToProps, {})
)(ReadBookContainer)