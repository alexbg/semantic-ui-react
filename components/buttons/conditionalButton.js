var React = require('react');
var SMButton = require('./button');
//var SMIconButton = require('./iconButton');

var COLOR_BUTTONS_GROUP = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configConditionalButton = {};
  configConditionalButton.leftButton = Object.assign({},config.leftButton);
  configConditionalButton.rightButton = Object.assign({},config.rightButton);

  // Pongo el color
  if(config.hasOwnProperty('color')){
    if(COLOR_BUTTONS_GROUP.hasOwnProperty(config.color)){
      config.color = COLOR_BUTTONS_GROUP[config.color];
    }
  };

  /*if(config.hasOwnProperty('location')){
    configConditionalButton.data = {data-text: config.location};
  };*/

  if(config.hasOwnProperty('conditional')){
    configConditionalButton.conditional = {className: config.conditional};
  }else{
    configConditionalButton.conditional = {className: 'or'};
  }

  // Otros atributos en el elemento
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configConditionalButton[obj] = config.others[obj];
    }
  };

  // Uno todos los arrays
  configConditionalButton.className = Array.prototype.concat(
    'ui',
    config.style,
    config.color,
    //config.type,
    'buttons',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configConditionalButton.className = configConditionalButton.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configConditionalButton.className = configConditionalButton.className.join(' ');

  return configConditionalButton;
};

module.exports = React.createClass({
  displayName: 'SMConditionalButton',
  render: function(){
    //console.log(this.props.config);
    var configConditionalButton = configuration(this.props.config,this);
    console.log(configConditionalButton);

    return(
      React.DOM.div(configConditionalButton,
        React.createElement(SMButton,{config:configConditionalButton.leftButton}),
        React.DOM.div(configConditionalButton.conditional),
        React.createElement(SMButton,{config:configConditionalButton.rightButton})
      )
    );
  }
})
