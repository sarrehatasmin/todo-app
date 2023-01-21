import React, { Component } from 'react'
import TodoList from './List'

export default class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputData: "",
      todoItems: []
    }
  }
  changeTodoInput = (event) => {
    this.setState({ inputData: event.target.value })
    //console.log(this.state.inputData)
  }
  handleSubmit = (event) => {
    event.preventDefault(); //Stopped auto refresh
    //alert (`${this.state.inputData}`)
    if (this.state.inputData != '') {
      let newItem = [...this.state.todoItems, this.state.inputData]
      this.setState({
        todoItems: newItem,
        inputData: ""

      })
    }
  }
  deleteItem = (index) => {

    let original = [...this.state.todoItems];
    let left = original.filter((value, key) => {
      // console.log(key);
      return index != key
    })
    this.setState({
      todoItems: left
    })

    //console.log("Button Clicked");
  }
  render() {
    return (
      <>
        <div className='container my-3 justify-content-center align-items-center w-75'>
          <div className='row-justify-content-center'>
            <div className='col-md-10 w-100' style={{ border: "2px solid", borderRadius: "50px", padding: "30px", backgroundColor: "#fff", color: "#fff" }}>
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <h1 className='text-primary text-center'>Todo App</h1>
                  <input type="text" className="form-control shadow" onSubmit={this.handleSubmit} id="todo" placeholder='Add New Task' onChange={this.changeTodoInput} value={this.state.inputData} />
                </div>
                <button onClick={this.handleSubmit} type="button" className="btn btn-primary w-100 mt-3 shadow" style={{ borderRadius: "50px", padding: "5px" }}>
                  Add
                </button>
              </form>
              <TodoList items={this.state.todoItems} deleteItem={this.deleteItem} />
            </div>
          </div>
        </div>
      </>
    )
  }
}
