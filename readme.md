#React 3D Carousal component
3D carousal component in react.

### Demo 
![Demo](https://i.imgur.com/aa2QTOx.gif)
##Installation
####npm 

```
 npm i react-3d-carousal
```
####yarn
```
 yarn add react-3d-carousal
```
##### Add fa-css in public.html for arrows

```
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
```

#####Importing the component
```shell
import Carousal from 'react-3d-carousal';
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
<Carousal slides={slides}/>

```
###props 
<b>slides :-</b> Array of react components
you can give any component in the slides like images, divs or even your custom components

