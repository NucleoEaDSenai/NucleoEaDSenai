function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rJN5RMEz6d":
        Script1();
        break;
      case "6gwXXwZhUqa":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('677Jfd6iyKs');
const duration = 750;
const easing = 'ease-out';
const id = '5kIlInBJzNB';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('66amHUBI3tV');
const duration = 750;
const easing = 'ease-out';
const id = '6YkLwrGNodC';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
