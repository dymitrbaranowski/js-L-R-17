var promise=new Promise((function(o,e){setTimeout((function(){Math.random()>.5?o("Yeeees"):e("Noooo")}),3e3)}));console.log(promise),promise.then((function(o){return o+"😊"})).then((function(o){console.log(o,qwerty)})).catch((function(o){console.error(o)})).finally((function(){console.log("after")}));
//# sourceMappingURL=index.023fc68f.js.map
