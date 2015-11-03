# Welcome to Semantic ui react docs

```BOTH DOCUMENTATION AND MODULE STILL IN CONSTRUCTION```

Semantic ui react is a module to use the framework Semantic-ui with React js.
Here you can learn how to use this.

## Common configuration

You will always need those modules:

```javascript

var React = require('react');
var ReactDOM = require('react-dom');

```
For now all react elements has the next common configuration:

```javascript
config =  {
	className: string or array,
	color: string,
	style: string or array
}
```

- ```className```: it is the class attribute of a html tag
- ```color```: What kind of color will you button has.
- ```style```: size,state,basic,etc

To each react element is given a configuration with the name ```config```, example:

Here I am creating a button

```FOR NOW YOU CAN NOT USE DATA ATTRIBUTE.```

```javascript
var button = require('semantic-ui-react/components/buttons/button');

var configButton = {
  text: 'Hello world',
  className:  ‘my-first-button’
  color: 'info',
  others: {
    id: 'hello-world-button',
    name: 'The best button'
  },
  events: {
    onClick: function(){console.log(this.props.config)}
  }
};

ReactDOM.render(React.createElement(button,{config:configButton}),document.getElementById('test'));

```
