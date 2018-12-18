import {Item} from './item';
var elem = document.getElementById('output');
var data = new Item('Hello, TypeScript',Date.now());
data.say(elem);