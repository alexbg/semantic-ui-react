var React = require('react');
var ReactDOM = require('react-dom');
var SMHeader = require('./header');
var SMIcon = require('./../icons/icon');

var COLOR_HEADERS = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'red',
  info: 'teal',
  success: 'green'
};

var configuration = function(config,react){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configIconHeader = {};

  configIconHeader.icon = Object.assign({},config.icon);
  configIconHeader.content = Object.assign({},config.content);

  console.log(config);
  // Pongo el color
  if(config.hasOwnProperty('color')){
    configIconHeader.color = config.color;
  }

  if(config.hasOwnProperty('tag')){
    configIconHeader.tag = config.tag;
  }

  // Otros atributos en la clase
  if(config.hasOwnProperty('others')){
    configIconHeader.others = Object.assign({},config.others);
  }

  // Configuro los eventos
  if(config.hasOwnProperty('events')){
    configIconHeader.events = Object.assign({},config.events);
  }

  if(config.hasOwnProperty('style')){
    configIconHeader.style = Array.prototype.concat('icon',config.style);
  }else{
    configIconHeader.style = 'icon';
  }

  return configIconHeader;
}

module.exports = React.createClass({
  displayName: 'SMIconHeader',
  render: function(){

    var configIconHeader = configuration(this.props.config,this);
    var tempSub;
    if(configIconHeader.content.hasOwnProperty('sub')){
      tempSub = React.DOM.div({className: 'sub header'},configIconHeader.content.sub);
    }
    return (
      React.createElement(SMHeader,{config: configIconHeader},
        React.createElement(SMIcon,{config: configIconHeader.icon}),
        React.DOM.div({className: 'content'},
          configIconHeader.content.text,
          tempSub
        )
      )
    )
  }
});
