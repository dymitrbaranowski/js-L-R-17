var content=document.querySelector(".content"),text=document.querySelector(".text"),counter=8;text.textContent="Залишилось ".concat(counter," секунд");var id=setInterval((function(){counter-=1,text.textContent="Залишилось ".concat(counter," секунд")}),1e3);setTimeout((function(){clearInterval(id),content.style.display="none"}),1e3*counter);
//# sourceMappingURL=index.5a090c1a.js.map
