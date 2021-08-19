import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Cat} from './Cat'


class CatContainer extends React.Component { //Buisness-слой для компоненты отображения книг

    componentDidMount() {
        //Запрос на сервер 
    }

    render() {
        return <>
            <Cat
                Books={this.props.Books}
            ></Cat>
        </>
    }
}

let mapStateToProps = (state) => { //Получение необходимых данных из store
    return {
        Books: state.NewPage.Books,
    }
}

export default compose(
    connect(mapStateToProps, {})
)(CatContainer)