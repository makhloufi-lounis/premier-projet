import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/Member'
import Button from './components/Button'

const famille = {
  member1: {
    nom: 'Adel',
    age: 32
  },
  member2: {
    nom: 'Hamza',
    age: 25
  },
  member3: {
    nom: 'Lounis',
    age: 17
  },
  member4: {
    nom: 'SONIC - MOHAMMED',
    age: 38
  }
}
//Componont stytLess
class App extends Component {
  state = { famille }
  handleClick = num => {
      console.log('click')
      //on peux pas mettre a jour le state directement
      //this.state.famille.member1.age = +1

      //Etapes a suivre :
      //prendre une copie de l'objet famille de state
      const famille = { ... this.state.famille }
      famille.member1.age += num
      this.setState({ famille })
  }

  handleChangeName = event => {
    const famille = { ... this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille.member4.nom = nom;
    this.setState({ famille })
  }

  handleChangeAge = event => {
    const famille = { ... this.state.famille }
    const age = event.target.value
    famille.member4.age = age
    this.setState( { famille } )
  }

  render (){
    const { title } = this.props;
    const { famille } = this.state
    return (
      <div className="App">
        <h1>{ title }</h1>
        <input value={ famille.member4.nom } onChange={ this.handleChangeName } type="text" />
        <br/><br/>
        <input value={ famille.member4.age } onChange={ this.handleChangeAge } type="number" />
        <br/>
        <Member 
          age={famille.member1.age}
          nom={famille.member1.nom} 
        >
          <strong>Je suis un humain</strong>
        </Member>
        <Member 
          age={famille.member2.age}
          nom={famille.member2.nom} 
        />
        <Member 
          age={famille.member3.age}
          nom={famille.member3.nom} 
        />
        <Member 
          age={famille.member4.age}
          nom={famille.member4.nom} 
        />
        <Button 
          vieillir={ () => this.handleClick(2) }
        />
      </div>
    )
  }
 
}

export default App;
