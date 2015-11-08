var React = require('react');
var ReactDOM = require('react-dom');

var COLOR_HEADERS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configHeader = {};
  console.log(config);
  // Pongo el color
  if(config.hasOwnProperty('color')){
    if(COLOR_HEADERS.hasOwnProperty(config.color)){
      config.color = COLOR_HEADERS[config.color];
    };
  }

  if(config.hasOwnProperty('tag')){
    configHeader.tag = config.tag;
  }

  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('text')){
    configHeader.text = config.text;
  }
  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configHeader[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configHeader[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configHeader.className = Array.prototype.concat(
    'ui',
    config.style,
    config.color,
    'header',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configHeader.className = configHeader.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configHeader.className = configHeader.className.join(' ');

  return configHeader;
}

module.exports = React.createClass({
  displayName: 'SMHeader',
  render: function(){

    var configHeader = configuration(this.props.config,this);
    var tempElement;
    if(configHeader.hasOwnProperty('tag')){
      tempElement = React.createElement(configHeader.tag,configHeader,configHeader.text,this.props.children);
    }else{
      tempElement = React.DOM.div(configHeader,configHeader.text,this.props.children);
    }
    return (
      tempElement
    )
  }
});
