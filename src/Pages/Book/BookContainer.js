import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { BookPage } from './Book'


class BookContainer extends React.Component { //Buisness-слой для отображения компоненты с одной книгой

    componentDidMount() {
        //Запрос полной информации книги с сервера
    }

    render() {
        return <>
            <BookPage
                Book={this.props.Book}
            ></BookPage>
        </>
    }
}

let mapStateToProps = (state) => { //Получение данных из store
    return {
        Book: state.NewPage.OneBook,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(BookContainer)