(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Mr. Krabs","image":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/1200px-Mr._Krabs.svg.png","clicked":false},{"id":2,"name":"Patrick Star","image":"https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png","clicked":false},{"id":3,"name":"Spongebob Squarepants","image":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png","clicked":false},{"id":4,"name":"Plankton","image":"https://vignette.wikia.nocookie.net/great-characters/images/4/47/Plankton.png/revision/latest?cb=20180808223621","clicked":false},{"id":5,"name":"Gary","image":"https://vignette.wikia.nocookie.net/spongebob/images/9/9e/Gary_looking_up_stock_art.png/revision/latest?cb=20181227162221","clicked":false},{"id":6,"name":"Squidward Tentacles","image":"https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/1200px-Squidward_Tentacles.svg.png","clicked":false},{"id":7,"name":"Mrs. Puff","image":"https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Mrs._Puff.svg/1200px-Mrs._Puff.svg.png","clicked":false},{"id":8,"name":"Larry","image":"https://vignette.wikia.nocookie.net/nickelodeon/images/7/76/Larry_current.png/revision/latest?cb=20190725034734","clicked":false},{"id":9,"name":"Sandy Cheeks","image":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png","clicked":false},{"id":10,"name":"Karen Plankton","image":"https://vignette.wikia.nocookie.net/spongebob/images/a/a6/Karen_mobile_stock_art.png/revision/latest?cb=20181202012333","clicked":false},{"id":11,"name":"King Neptune","image":"https://vignette.wikia.nocookie.net/theadventuresofgarythesnail/images/4/42/King_Neptune1-0.jpg/revision/latest?cb=20160901035942","clicked":false},{"id":12,"name":"Squilliam Fancyson","image":"http://en.spongepedia.org/images/8/8f/Siegbert_Schnoesel.JPG","clicked":false}]')},,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(2),r=t.n(c),s=(t(14),t(3)),o=t(4),l=t(7),m=t(5),g=t(8),d=(t(15),function(e){return n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"title"},"Spongebob Memory Click Game"),n.a.createElement("div",{className:"scores text-right"},"Score: ",e.score," Highscore: ",e.highscore))}),p=(t(16),function(e){return n.a.createElement("div",{className:"card col-sm-3",onClick:e.characterClick},n.a.createElement("div",{className:"image-group"},n.a.createElement("img",{id:e.name,alt:e.name,src:e.image})))}),h=t(6),k=(t(17),function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={characters:h,clicked:[],score:0,highscore:0},t.randomizer=function(){t.state.characters.sort((function(e,a){return.5-Math.random()}))},t.setHighScore=function(){t.state.score>t.state.highscore&&t.setState({highscore:t.state.score})},t.restartGame=function(){t.setHighScore(),t.setState({clicked:[],score:0})},t.characterClick=function(e){var a=e.target.id;t.state.clicked.indexOf(a)>-1?(t.randomizer(),t.restartGame()):(t.randomizer(),t.setState({clicked:t.state.clicked.concat(a),score:t.state.score+1},(function(){12===t.state.score&&(t.randomizer(),t.restartGame())})))},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(d,{highscore:this.state.highscore,score:this.state.score}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},this.state.characters.map((function(a){return n.a.createElement(p,{characterClick:e.characterClick,id:a.id,key:a.id,name:a.name,image:a.image})})))))}}]),a}(i.Component));r.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5850efb8.chunk.js.map