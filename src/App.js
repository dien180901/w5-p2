import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "dien",
      nextPlayer: true,
      squareList: ['', '', '', '', '', '', '', '', ''],
      isWin: false,
      playerWin: '',
      history: [],
      history2:[],
      count: 0
    }
  }
  setParentsState = (obj) => {
    this.setState(obj)
  }
  showRemoveItem = (a) => {
    let ans = ['', '', '', '', '', '', '', '', '']
    for (let i = 0; i < a.length; i++) {
      ans[a[i][1]] = a[i][0]
    }
    if(a[a.length-1]=="X"){
      this.setState({nextPlayer:true})
    }else{this.setState({nextPlayer:false})}
    this.setState({ squareList: ans });
    this.setState({count:a.length})
    this.setState({isWin:false,playerWin:''})
  }
  removeItem(index) {
    let a = this.state.history2;
    a = a.slice(0, index);
    this.setState({history2:a})
    this.showRemoveItem(a);
  }
  render() {

    return (
      <div className="layout">
        <div>
          <h1>Tic Tac Toe</h1>
          <h3>User name : {this.state.username}</h3>
          <h4> nextPlayer:{this.state.nextPlayer}</h4>
          <h1>
            {this.state.playerWin}
          </h1>
          <Board squareList={this.state.squareList}
            setParentsState={this.setParentsState}
            nextPlayer={this.state.nextPlayer}
            isWin={this.state.isWin}
            playerWin={this.state.playerWin}
            history={this.state.history}
            count={this.state.count}
            history2={this.state.history2}
          />

        </div>
        <div>

          <ol>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(1)}>remove step 1</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(2)}>remove step 2</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(3)}>remove step 3</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(4)}>remove step 4</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(5)}>remove step 5</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(6)}>remove step 6</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(7)}>remove step 7</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(8)}>remove step 8</Button></div>
            <div className="removeButton"><Button variant="light" onClick={() => this.removeItem(9)}>remove step 9</Button></div>
          </ol>
          <div>history</div>
          <ol>
            {this.state.history.map(item => <div>{item[0]} {item[1]}</div>)}
          </ol>
        </div>

      </div>
    )
  }
}
