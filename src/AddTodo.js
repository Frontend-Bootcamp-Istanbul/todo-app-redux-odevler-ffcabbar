import React from 'react';

import {connect} from 'react-redux';
import {addTodo, show, hide} from './actionCreators/actionCreaters';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeInput(e){
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

    addTodo(event){
        event.preventDefault();
        this.props.addTodo(this.state.inputVal);
        this.setState({
            inputVal: ""
        });

        this.show();
        setTimeout(() => {
            this.hide();
        }, 1000);
    }

    show() {
        this.props.show();
    }

    hide() {
        this.props.hide();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addTodo}>
                    <input type="text" value={this.state.inputVal} onChange={this.changeInput}/>
                    <button>Ekle</button>
                    {this.props.IsShow ? <h2 style={{color: 'red',padding: '30px 15px 30px 15px'}}>Yeni Todo Eklendi</h2> : ""}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    IsShow: state.IsShow
})

const mapDispatchToProps = dispatch => ({
    addTodo: (newTodo) => {dispatch(addTodo({
        content: newTodo,
        id: Math.random(),
        checked: false
    }))},
    show: () => {dispatch(show())},
    hide: () => {dispatch(hide())}
});
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);