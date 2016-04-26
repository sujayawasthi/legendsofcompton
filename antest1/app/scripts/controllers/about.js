'use strict';

/**
 * @ngdoc function
 * @name antest1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the antest1App
 */
angular.module('antest1App')
  .controller('AboutCtrl', function () {
    this.images = [
    {name : "images/dj-yella.jpg", type : 'DJ Yella'},{name : "images/dr-dre.jpg", type : 'Dr Dre'},{name : "images/easy-e.jpg", type : 'Easy E'}
    ,{name : "images/icecube.jpg", type : 'Ice Cube'},{name : "images/mc-ren.png", type : 'MC Ren'}];
  	this.selected ="Ice Cube";
    this.imageToShow = this.images.find(function(a){return a.type == 'Ice Cube';}).name;
    this.awesomeThings = [
      {name : 'Ice Cube', classy : 'active'},
      {name : 'Dr Dre'},
      {name : 'Easy E'},
      {name : 'DJ Yella'},
      {name : 'MC Ren'}
    ];
    

    this.select = function(tab){
    	this.selected = tab;
      this.imageToShow = this.images.find(function(a){return a.type == tab;}).name;
    	console.log(this.selected);
    }
  });
