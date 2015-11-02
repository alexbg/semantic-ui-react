var React = require('react');
var ReactDOM = require('react-dom');

var COLOR_ICONS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configIcon= {};

  // Pongo el color
  if(COLOR_ICONS.hasOwnProperty(config.color)){
    config.color = COLOR_ICONS[config.color];
  }

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configIcon[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configIcon[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configIcon.className = Array.prototype.concat(
    config.icon,
    config.style,
    config.color,
    //config.type,
    'icon',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configIcon.className = configIcon.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configIcon.className = configIcon.className.join(' ');

  return configIcon;
}

module.exports = React.createClass({
  displayName: 'SMIcon',
  render: function(){

    var configIcon = configuration(this.props.config,this);

    return (
      React.DOM.i(configIcon)
    )
  }
});
