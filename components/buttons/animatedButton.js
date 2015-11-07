var React = require('react');
var ReactDOM = require('react-dom');
var SMIcon = require('./../icons/icon');

var COLOR_ANIMATED_BUTTONS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configAnimatedButton= {};
  console.log(config);
  // Pongo el color
  if(config.hasOwnProperty('color')){
    if(COLOR_ANIMATED_BUTTONS.hasOwnProperty(config.color)){
      config.color = COLOR_ANIMATED_BUTTONS[config.color];
    };
  }

  configAnimatedButton.hidden = config.hidden;
  configAnimatedButton.visible = config.visible;

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configAnimatedButton[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configAnimatedButton[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configAnimatedButton.className = Array.prototype.concat(
    'ui',
    config.style,
    config.color,
    //config.type,
    'animated',
    'button',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configAnimatedButton.className = configAnimatedButton.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configAnimatedButton.className = configAnimatedButton.className.join(' ');

  return configAnimatedButton;
}

module.exports = React.createClass({
  displayName: 'SMAnimatedButton',
  render: function(){

    var configAnimatedButton = configuration(this.props.config,this);
    if(typeof configAnimatedButton.visible !== 'string'){
      configAnimatedButton.visible = React.createElement(SMIcon,{config: configAnimatedButton.visible});
    }

    if(typeof configAnimatedButton.hidden !== 'string'){
      configAnimatedButton.hidden = React.createElement(SMIcon,{config: configAnimatedButton.hidden});
    }

    return (
      React.DOM.div(configAnimatedButton,
        React.DOM.div({className: 'visible content'},configAnimatedButton.visible),
        React.DOM.div({className: 'hidden content'},configAnimatedButton.hidden)
      )
    )
  }
});
