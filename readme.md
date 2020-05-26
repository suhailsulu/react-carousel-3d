# React 3D Carousel component
3D carousel component in react.

### Demo 
![Demo](https://i.imgur.com/aa2QTOx.gif)

jsfiddle (https://jsfiddle.net/suhailsulu/8hnqaz2c/) 

## Installation

#### npm 

```
 npm i 3d-react-carousal
```
#### yarn
```
 yarn add 3d-react-carousal
```
##### Add fa-css in public.html for arrows

```
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
```

##### Importing the component
```shell
import {Carousel} from '3d-react-carousal';
or 
var Carousel = require( '3d-react-carousal').Carousel;
.
.
.
let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
.
.
.
<Carousel slides={slides} autoplay={true} interval={1000}/>

```
### props 
<b>slides :-</b> Array of react components
<b>autoplay :-</b> Boolean (true or false) - optional
<b>interval :-</b> number (time in milliseconds) - optional
you can give any component in the slides like images, divs or even your custom components
