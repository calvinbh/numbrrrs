!function(){"use strict";angular.module("numbrrrs",["ngAnimate","ngTouch","ngMaterial"])}(angular),angular.module("numbrrrs").controller("NavbarCtrl",["$scope",function(t){t.date=new Date}]),function(){"use strict";angular.module("numbrrrs").service("MainService",["$http",function(t){this.loadQuestion=function(){var n="https://numbersapi.p.mashape.com/random/",e=["trivia","math"],r=Math.floor(2*Math.random())+0,o="?fragment=true&json=true&max=1000&min=0",a=n+e[r]+o,u=t.get(a,{headers:{"X-Mashape-Authorization":"7GnSf8nCvamshkZsylRo7JIy40D5p1Roup0jsnWq0tFlVQkTyB"}});return u}}])}(angular),function(){"use strict";angular.module("numbrrrs").filter("capitalize",function(){return function(t){return null!=t?t.substring(0,1).toUpperCase()+t.substring(1):void 0}})}(angular),function(){"use strict";angular.module("numbrrrs").directive("twitter",["$timeout","$window",function(t,n){return{link:function(e,r,o){t(function(){t(function(){twttr.widgets.createShareButton(o.url||n.location.href,r[0],function(){},{count:o.count,text:o.text,via:o.via,size:o.size})})})}}}])}(angular),function(){"use strict";angular.module("numbrrrs").controller("MainCtrl",["$scope","MainService","$animate","$timeout","$mdDialog","$window",function(t,n,e,r,o,a){t.score=0,t.rounds=0,t.gameOver=!1;var u=function(){n.loadQuestion().then(function(n){t.question=n.data})},i=function(){t.rounds=t.rounds+1,t.rounds>=10&&(t.gameOver=!0)};t.checkAnswer=function(){i(),t.answer==t.question.number?(t.lastQuestion="right",t.class="md-green-theme",t.score+=1):(t.lastQuestion="wrong",t.class="md-red-theme"),t.answer=null,t.question=null,r(function(){t.lastQuestion=!1},2e3),u()},u(),t.showAlert=function(){var t=o.alert().title("How to play numbrrrs?").content("Playing numbrrrs is really easy. It's like a trivia, but the answer to every question is a number (or, like we like to say, a 'numbrrr') between 0 and 1,000. You can use the slider or the number field to enter your answer to each question. Each game consists of ten rounds. For each correct answer you'll get one point. That's pretty much it!").ok("Let's play then!");o.show(t)},t.startAgain=function(){a.location.reload()}}])}(angular),angular.module("numbrrrs").run(["$templateCache",function(t){t.put("components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center" ng-controller="NavbarCtrl"><md-button href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section><md-button href="#">Current date: {{ date | date:\'yyyy-MM-dd\' }}</md-button></md-toolbar>')}]);