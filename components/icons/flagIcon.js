var React = require('react');
var ReactDOM = require('react-dom');

/*var COLOR_ICONS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};*/

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configFlagIcon= {};

  // Pongo el color
  /*if(COLOR_ICONS.hasOwnProperty(config.color)){
    config.color = COLOR_ICONS[config.color];
  }*/

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configFlagIcon[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configFlagIcon[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configFlagIcon.className = Array.prototype.concat(
    config.flag,
    //config.type,
    'flag',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configFlagIcon.className = configFlagIcon.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configFlagIcon.className = configFlagIcon.className.join(' ');

  return configFlagIcon;
}

module.exports = React.createClass({
  displayName: 'SMFlagIcon',
  render: function(){

    var configFlagIcon = configuration(this.props.config,this);

    return (
      React.DOM.i(configFlagIcon)
    )
  }
});
