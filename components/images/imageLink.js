var React = require('react');
var ReactDOM = require('react-dom');
var SMImage = require('./image');

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configImageLink = {};
  console.log(config);

  if(config.hasOwnProperty('link')){
    configImageLink.href = config.link;
  }

  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('image')){
    configImageLink.image = config.image;
  }

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configImageLink[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configImageLink[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configImageLink.className = Array.prototype.concat(
    'ui',
    config.style,
    'image',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configImageLink.className = configImageLink.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configImageLink.className = configImageLink.className.join(' ');

  return configImageLink;
}

module.exports = React.createClass({
  displayName: 'SMImageLink',

  render: function(){
    var configImageLink = configuration(this.props.config,this);

    return(
      React.DOM.a(configImageLink,
        React.DOM.img({src: configImageLink.image})
      )
    )
  }
});
