var day=document.querySelector(".date-day"),date=document.querySelector(".date"),month=document.querySelector(".date-month"),year=document.querySelector(".date-year"),digitalClock=document.querySelector(".digital-clock"),arrowSecond=document.querySelector(".clock-seconds__arrow"),arrowMinutes=document.querySelector(".clock-minutes__arrow"),arrowHours=document.querySelector(".clock-hours__arrow"),namesOfMonth=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],arrDay=["Неділя","Понеділок","Вівторок","Середа","Четвер","П`ятниця","Субота"];setInterval((function(){var t=new Date,e=arrDay[t.getDay()],o=t.getDate(),r=namesOfMonth[t.getMonth()],a=t.getFullYear(),n=t.getHours(),c=t.getMinutes(),d=t.getSeconds(),u=6*d,l=6*c,s=30*n+.5*c;console.log(u);var y="".concat(n.toString().padStart(2,"0")," : ").concat(c.toString().padStart(2,"0")," : ").concat(d.toString().padStart(2,"0"));day.textContent=e,date.textContent=o,month.textContent=r,year.textContent=a,digitalClock.textContent="Поточний час: ".concat(y),arrowSecond.style.transform="rotate(".concat(u,"deg)"),arrowMinutes.style.transform="rotate(".concat(l,"deg)"),arrowHours.style.transform="rotate(".concat(s,"deg)")}),1e3);
//# sourceMappingURL=index.bc0ed4b7.js.map
