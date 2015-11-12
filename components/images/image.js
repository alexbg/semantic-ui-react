var React = require('react');
var ReactDOM = require('react-dom');

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configImage = {};
  console.log(config);
  // Pongo el color


  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('alt')){
    configImage.alt = config.alt;
  }

  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('image')){
    configImage.src = config.image;
  }

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configImage[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configImage[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configImage.className = Array.prototype.concat(
    'ui',
    config.style,
    //config.color,
    //config.type,
    'image',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configImage.className = configImage.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configImage.className = configImage.className.join(' ');

  return configImage;
}

module.exports = React.createClass({
  displayName: 'SMImage',


  render: function(){
    var configImage = configuration(this.props.config,this);
    return(
      React.DOM.img(configImage,this.props.children)
    )
  }
});
