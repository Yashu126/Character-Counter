import './App.css'

import {v4 as uudiv4} from 'uuid'

import {Component} from 'react'

// Replace your code here
class App extends Component {
  state = {inputTxt: '', characterCount: []}

  onInput = event => {
    this.setState({inputTxt: event.target.value})
  }

  onInputAdd = event => {
    event.preventDefault()
    const {inputTxt} = this.state
    const newInput = {
      id: uudiv4(),
      inputTxt,
    }
    this.setState(prev => ({
      characterCount: [...prev.characterCount, newInput],
      inputTxt: '',
    }))
  }

  render() {
    const {inputTxt, characterCount} = this.state
    return (
      <div className="background-con">
        <div className="leftside-con">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          <div className="left-bottom-con">
            {characterCount.length === 0 ? (
              <div className="img-con">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="empty-img"
                />
              </div>
            ) : (
              <ul>
                {characterCount.map(each => {
                  const count = each.inputTxt.length
                  return (
                    <li key={each.id}>
                      <p className="char-count">
                        {each.inputTxt}: {count}
                      </p>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
        <form onSubmit={this.onInputAdd} className="rightside-con">
          <h1 className="right-heading">character Counter</h1>
          <div className="input-button-con">
            <input
              className="input-box"
              onChange={this.onInput}
              value={inputTxt}
              type="text"
              placeholder="Enter the Characters here"
            />
            <button className="add-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
