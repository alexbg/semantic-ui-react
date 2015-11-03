var React = require('react');
var SMButton = require('./button');
var SMIconButton = require('./iconButton');

var COLOR_BUTTONS_GROUP = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configButtonsGroup = {};
  var labeled;
  var icon;
  // objects
  configButtonsGroup.group = config.group;

  // booleans
  configButtonsGroup.icon = config.icon;
  configButtonsGroup.labeled = config.labeled;

  // Pongo el color
  if(COLOR_BUTTONS_GROUP.hasOwnProperty(config.color)){
    config.color = COLOR_BUTTONS_GROUP[config.color];
  }

  // Compruebo si tiene el atributo text
  if(config.hasOwnProperty('text')){
    configButtonsGroup.text = config.text;
  }


  if(configButtonsGroup.labeled == true){
    labeled = 'labeled';
  }

  if(configButtonsGroup.icon == true){
    icon = 'icon';
  }

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    for(obj in config.others){
      configButtonsGroup[obj] = config.others[obj];
    }
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    for(obj in config.events){
      configButtonsGroup[obj] = config.events[obj].bind(react);
    }
  }

  // Uno todos los arrays
  configButtonsGroup.className = Array.prototype.concat(
    'ui',
    config.style,
    config.color,
    //config.type,
    labeled,
    icon,
    'buttons',
    config.className
  );

  // Filtro el array para eliminar datos invalidos
  configButtonsGroup.className = configButtonsGroup.className.filter(function(value){if(value != '' || value != 'undefined'){return value;}});

  // Lo paso a string
  configButtonsGroup.className = configButtonsGroup.className.join(' ');

  return configButtonsGroup;
};

module.exports = React.createClass({
  displayName: 'SMButtonsGroup',
  render: function(){
    //console.log(this.props.config);
    var configButtonsGroup = configuration(this.props.config,this);

    return(
      React.DOM.div(configButtonsGroup,
        configButtonsGroup.group.map(function(group,index){
          var key = 'SMButtonsGroup-'+index;
          var tempButton = '';

          if(configButtonsGroup.icon == true|| configButtonsGroup.labeled == true){
            tempButton = SMIconButton;

          }else{
            tempButton = SMButton;

          }

          return React.createElement(tempButton,{config:group,key: key});
        })
      )
    );
  }
})
