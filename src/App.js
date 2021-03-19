import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas
//const Element = (props) => <li>{props.item}</li>;
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ' ',
      list: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato'],
    };
  }
  handleText = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.setState({
        list: this.state.list.concat(this.state.text),
        //text: ' ',
      });
      this.state.text = '';
    }
  };
  updateText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <form>
            <input
              type="text"
              id="new-task"
              value={this.state.text}
              onChange={this.updateText.bind(this)}
              onKeyPress={this.handleText.bind(this)}
              placeholder="Ingresa una tarea y oprime Enter"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
