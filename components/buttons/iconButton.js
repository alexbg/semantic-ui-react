var React = require('react');
var ReactDOM = require('react-dom');
var SMicon = require('../icons/icon');
var SMbutton = require('./button');

var configuration = function(config){
  // Lo guardo en un nuevo objeto, para no modificar el original
  var configIconButton = {};

  // Creo nuevos objetos de config.button y config.icon, asi no modifico los originales
  configIconButton.button = Object.assign({},config.button);
  configIconButton.icon = Object.assign({},config.icon);

  var labeled;
  if(config.labeled == true){
    labeled = 'labeled';
  }
  // Configuro el boton, para que pueda ser un icon
  if(!configIconButton.button.hasOwnProperty('type')){
    configIconButton.button['type'] = 'icon';
  }else{
    configIconButton.button.type = Array.prototype.concat(configIconButton.button.type,labeled,'icon');
  }
  return configIconButton;
}

module.exports = React.createClass({
  displayName: 'SMIconButton',
  render: function(){

    var configIconButton = configuration(this.props.config);

    return (
      React.createElement(SMbutton,{config: configIconButton.button},
        React.createElement(SMicon,{config: configIconButton.icon})
      )
    );
  }
});
