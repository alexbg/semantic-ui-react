var React = require('react');
var ReactDOM = require('react-dom');

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configDivider = {};

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configDivider[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  /*if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configDivider[obj] = config.events[obj].bind(react);
    }
  }*/

  // Uno todos los arrays
  configDivider.className = Array.prototype.concat(
    'ui',
    config.style,
    'divider',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configDivider.className = configDivider.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configDivider.className = configDivider.className.join(' ');

  return configDivider;
}

module.exports = React.createClass({
  displayName: 'SMDivider',
  render: function(){

    var configDivider = configuration(this.props.config,this);
    
    return (
      React.DOM.div(configDivider,this.props.children)
    )
  }
});
