import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lst: ['john', 'jacob', 'fajar'],
            message: ''
        }
        this.removeFromList = this.removeFromList.bind(this);
        this.addToList = this.addToList.bind(this);
    }
    onChangeHandler = (event) => {
        let value = event.target.value;
        this.setState({
            message: value
        })
    }
    removeFromList() {
        let lstC = this.state.lst;
        lstC.pop();
        this.setState({
            lst: lstC
        })
    }
    addToList() {
        let name = prompt('Enter the name')
        let lstC = this.state.lst;
        lstC.push(name);
        this.setState({
            lst: lstC
        })
    }
    showMessage = () => {
        let message = this.state.message;
        alert(message)
    }
    render() {
        const lstMap = this.state.lst.map((item) => <h1>{item}</h1>);
        return (
            <React.Fragment>
                {lstMap}
                <br />
                <input type='button' value='remove' onClick={this.removeFromList} />
                <input type='button' value='add' onClick={this.addToList} />
                <br />
                <br />
                <input type='text' value={this.state.message} onChange={this.onChangeHandler} />
                <input type='button' value='show message' onClick={this.showMessage} />
            </React.Fragment>
        )
    }
}

export default List