// JavaScript Document
var right = function(){
	$('h3#right').slideInRight();	
};
var topright = function(){
	$('h3#top-right').slideInDiagonal({right:true, comeDown: true});	
};
var topish = function(){
	$('h3#top').slideInDown();	
};
var topleft = function(){
	$('h3#top-left').slideInDiagonal({left: true, comeDown: true});	
};
var left = function(){
	$('h3#left').slideInLeft();
};
var bottomleft = function(){
	$('h3#bottom-left').slideInDiagonal({left: true, comeDown: false, comeUp: true});
};
var bottom = function(){
	$('h3#bottom').slideInUp();
};
var bottomright = function(){
	$('h3#bottom-right').slideInDiagonal({right: true, comeUp: true});
};