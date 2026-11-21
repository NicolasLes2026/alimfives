(function(){
var P=[["index.html","Accueil"],["calendrier.html","Calendrier"],["espaces.html","Espaces"],["gouvernance.html","Gouvernance"],["finances.html","Finances"]];
var cur=location.pathname.split("/").pop()||"index.html";
var l=document.createElement("link");l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap";document.head.appendChild(l);
var c=document.createElement("style");
c.textContent=":root{--navh:48px}.sitenav{height:48px;display:flex;align-items:center;gap:4px;padding:0 12px;overflow-x:auto;white-space:nowrap;background:#16212E;font:500 14px 'Instrument Sans',system-ui,sans-serif}.sitenav a{color:#C5CED8;text-decoration:none;padding:6px 12px;border-radius:6px}.sitenav a:hover{color:#fff}.sitenav a[aria-current]{background:#E8EDF2;color:#16212E}.sitenav a:focus-visible{outline:2px solid #4CC3E6}";
document.head.appendChild(c);
var n=document.createElement("nav");n.className="sitenav";n.setAttribute("aria-label","Navigation du site");
n.innerHTML=P.map(function(p){return '<a href="'+p[0]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a>'}).join("");
document.body.insertBefore(n,document.body.firstChild);
})();
