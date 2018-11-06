var script=document.createElement('script')
script.setAttribute('src','https://unpkg.com/@widgetbot/crate@^3')
script.setAttribute('async','true')
script.setAttribute('defer','true')
script.onload=function(){
var crate=new Crate({server:'437423842244165633',channel:'488303587991224320',shard:'https://vip1.widgetbot.io'});crate.notify('If you have any problems, i\'m here to help!')}
document.head.appendChild(script)