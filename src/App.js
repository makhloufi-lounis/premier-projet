import React, {Component} from 'react';
import './App.css';
import Member from './components/Member'
import Button from './components/Button'
//import uniqid from 'uniqid';

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
  state = { 
    famille,
    isShow: false
  }
  handleClick = num => {
      console.log('click')
      //on peux pas mettre a jour le state directement
      //this.state.famille.member1.age = +1

      //Etapes a suivre :
      //prendre une copie de l'objet famille de state
      const famille = { ...this.state.famille }
      famille.member1.age += num
      this.setState({ famille })
  }

  handleChangeName = (event, memberId) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille[memberId].nom = nom;
    this.setState({ famille })
  }

  cacherNom = (id) => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'x'
    this.setState({ famille })
  }

  handleChangeAge = (event, memberId) => {
    const famille = { ...this.state.famille }
    const age = event.target.value
    famille[memberId].age = age
    this.setState( { famille } )
  }

  handleShowDescription = event => {
    const isShow = !this.state.isShow
    console.log(isShow)
    this.setState({ isShow })
  }

  render (){
    const { title } = this.props;
    const { famille, isShow } = this.state

    let description = null

    if(isShow) {
        // les parentaises sont obligé dans le cas de plusieurs lignes
        description = (
          <strong style={{display : 'block', marginBottom:'10px'}}>je suis visible</strong>
        )
    }

    
    const liste = Object.keys(famille)
      .map(membre => (
          <Member 
          key={membre}
          cacherNom={() => this.cacherNom(membre)}
          handleChangeName={event => this.handleChangeName(event, membre)}
          handleChangeAge={event => this.handleChangeAge(event, membre)}
          age={famille[membre].age}
          nom={famille[membre].nom} />
        )
      )
    return (
      <div className="App">
        <h1>{ title }</h1>
        
        {<Member 
          age={famille.member1.age}
          nom={famille.member1.nom} 
        >
          { description }
          <button onClick={this.handleShowDescription}>
            { isShow ? 'Cacher' : 'Montrer'}
          </button>
        </Member>}
        { liste }
        <Button 
          vieillir={ () => this.handleClick(2) }
        />
      </div>
    )
  }
 
}
export default App;
