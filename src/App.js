import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//From: https://codepen.io/zebapy/pen/LGjyWJ

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sexactions: {},
      kissingActions: {},
      undressingActions: {},
      handjobActions: {},
      oralActions: {},
      penetrationstartActions: {},
      penetrationActions: {},
      orgasmActions: {},
      afterglowActions: {},
      interludeActions: {},
      sexaction: '',

      count: 0
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/kissingactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          kissingActions: data.lines
        });

      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/undressingactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          undressingActions: data.lines
        });

      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/handjobActions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          handjobActions: data.lines
        });

      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/oralsexactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          oralActions: data.lines
        });

      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/penetrationstartactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          penetrationstartActions: data.lines
        });

      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/penetrationactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          penetrationActions: data.lines
        });
      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/afterglowactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          afterglowActions: data.lines
        });
      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/interludeactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          interludeActions: data.lines
        });
      });
    fetch("https://raw.githubusercontent.com/DeusExVagina/react_sexstory_generator/master/JSONFIles/orgasmactions.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          orgasmActions: data.lines
        });
      });
  }
  componentDidUpdate() {

  }

  _randomAll() {
    this.setState({
      sexaction: null
    })
    var kissingscene = '';
    kissingscene = getKissingScene(this.state.kissingActions, this.state.interludeActions);
    var undressingscene = '';
    undressingscene = getUndressingScene(this.state.undressingActions, this.state.interludeActions)
    var penetrationstartScene = getPenetrationStartScene(this.state.penetrationstartActions);
    var penetrationScene = getPenetrationScene(this.state.penetrationActions,this.state.orgasmActions);
    var afterglowScene = getAfterglowScene(this.state.afterglowActions);
    this.setState({
      sexaction: kissingscene + undressingscene + penetrationstartScene + penetrationScene + afterglowScene
    })
  };

  handleGetNameClick = (e) => {

  };
  _reloadPage(){
    window.location.reload();
  }

  render() {
    
    
    return (
      <div className="container">
        <div className="name">
          <div>
            <span className="firstname">Sex Scene Generator</span>
            <h1>Random Title</h1>
          </div>

        </div>
        <p>{spinText(genderReplace(this.state.sexaction))}</p>
        <div className="m-y">
          <button className="btn btn-random" onClick={this._randomAll.bind(this)}>Give me all the juicy details</button>       
        </div>
        <small className="randomize-note">Like this thing?</small>
        <Button name="firstName" onClick="https://keypressingmonkey.com">My Website</Button>
        <Button name="lastNamePrefix" onClick="https://www.youtube.com/channel/UCMdFN7FUC4HilpDBEw0uvJw">My Youtube</Button>
        <Button name="lastNameSuffix" onClick="https://noirtybynight.com">My real erotic stories</Button>
      </div>
    )
  };
}

function getRandom(items) {
  console.log("length of items passed to random function: " + items.length)
  return items[Math.floor(Math.random() * items.length)];
}
function spinText(inputString) {
  //copied from: https://ctrlq.org/code/20277-javascript-spintax

  var matches, options, random;

  var regEx = new RegExp(/{([^{}]+?)}/);

  while ((matches = regEx.exec(inputString)) !== null) {
    options = matches[1].split("|");
    random = Math.floor(Math.random() * options.length);
    inputString = inputString.replace(matches[0], options[random]);
  }
  return inputString;
}
function genderReplace(inputString) {
  let text = inputString;
  text = text.replace(/ProtAName/g, "Mike");//todo: Make variable
  text = text.replace(/ProtBName/g, "Nina");//todo: Make variable

  text = text.replace(/ProtA/g, 'he');
  text = text.replace(/ProtB/g, "she");


  if (getRandomInt(5) === 3) {
    text = text.replace(/\sshe\s/, " Nina ");//todo: Make variable
  }
  if (getRandomInt(5) === 4) {
    text = text.replace(/\she\s/, " Mike ");//todo: Make variable
  }
  text = text.replace(/\. he/gm, '. He');
  text = text.replace(/\. she/gm, '. She');
  text = text.replace(/\\nhe/gm, '\nHe');
  text = text.replace(/\\nshe/gm, '\nShe');

  return text;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Button = ({ name, onClick, children }) => {
  return (
    <form method="get" action={onClick} target="_blank">
      <input className="btn btn-randomize-namepart" type="submit" name={name} value={children} /></form>
  )
}
function getKissingScene(kissingActions) {
  var kissingscene = '';
  console.log("number of kissingscenes in function: " + kissingActions.length)
  kissingscene += getRandom(kissingActions.filter(function (item) {
    return item.heatlevel == 1
  })).line + "\n\n";
  kissingscene += getRandom(kissingActions.filter(function (item) {
    return item.heatlevel == 1
  })).line + "\n\n";
  if (getRandomInt(3) == 2) {
    //todo get interlude afterkiss2
    kissingscene += getRandom(kissingActions.filter(function (item) {
      return item.heatlevel == 3
    })).line + "\n\n";
  }
  return kissingscene;

}

function getUndressingScene(undressingActions) {
  //todo: Implement
  //Basically: Go through all available clothing items and undress one by one using random gender where available
  var undressingScene = '';
  console.log("number of undressingscenes in function: " + undressingActions.length)
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.sweatshirt === true && item.genderdirection.startsWith("f")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.sweatshirt === true && item.genderdirection.startsWith("m")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.tshirt === true && item.genderdirection.startsWith("m")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.tshirt === true && item.genderdirection.startsWith("f")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.pants === true && item.genderdirection.startsWith("f")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.pants === true && item.genderdirection.startsWith("m")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.underpants === true && item.genderdirection.startsWith("m")
  })).line + "\n\n";
  undressingScene += getRandom(undressingActions.filter(function (item) {
    return item.underpants === true && item.genderdirection.startsWith("f")
  })).line + "\n\n";

  return undressingScene;

}
function getPenetrationStartScene(penetrationstartActions) {
  var penetrationstartScene = '';
  console.log("number of penetrationstartActions in function: " + penetrationstartActions.length)
  penetrationstartScene += getRandom(penetrationstartActions).line
  return penetrationstartScene;

}
function getPenetrationScene(penetrationActions,orgasmactions) {
  var penetrationScene = '';
  penetrationScene += getRandom(penetrationActions.filter(function (item) {
    return item.heatlevel == 1
  })).line + "\n\n";
  penetrationScene += getRandom(penetrationActions.filter(function (item) {
    return item.heatlevel == 2
  })).line + "\n\n";
  penetrationScene += getFemaleOrgasmScene(orgasmactions)+"\n\n";
  penetrationScene += getRandom(penetrationActions.filter(function (item) {
    return item.heatlevel == 3
  })).line + "\n\n";
  penetrationScene += getMaleOrgasmScene(orgasmactions)+"\n\n";
  return penetrationScene;

}

function getFemaleOrgasmScene(orgasmActions) {
  var orgasmScene = '';
  orgasmScene += getRandom(orgasmActions.filter(function (item) {
    return item.genderdirection.startsWith("f")
  })).line + "\n\n";
  return orgasmScene;

}

function getMaleOrgasmScene(orgasmActions) {
  var orgasmScene = '';
  orgasmScene += getRandom(orgasmActions.filter(function (item) {
    return item.genderdirection.startsWith("m")
  })).line + "\n\n";
  return orgasmScene;
}

function getAfterglowScene(afterglowActions) {
  var afterglowScene = '';
  afterglowScene += getRandom(afterglowActions).line + "\n\n";
  return afterglowScene;
}


