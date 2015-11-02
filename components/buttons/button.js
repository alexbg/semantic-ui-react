var React = require('react');
var ReactDOM = require('react-dom');

var COLOR_BUTTONS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configButton = {};
  console.log(config);
  // Pongo el color
  if(config.hasOwnProperty('color')){
    if(COLOR_BUTTONS.hasOwnProperty(config.color)){
      config.color = COLOR_BUTTONS[config.color];
    };
  }

  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('text')){
    configButton.text = config.text;
  }
  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configButton[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configButton[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configButton.className = Array.prototype.concat(
    'ui',
    config.style,
    config.color,
    //config.type,
    'button',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configButton.className = configButton.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configButton.className = configButton.className.join(' ');

  return configButton;
}

module.exports = React.createClass({
  displayName: 'SMButton',
  render: function(){

    var configButton = configuration(this.props.config,this);
    //console.log(this.props.config);
    //console.log(configButton);
    return (
      React.DOM.button(configButton,configButton.text,this.props.children)
    )
  }
});
