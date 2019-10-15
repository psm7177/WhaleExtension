let palette = document.getElementById("palette");
let change = document.getElementById("change");
let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");
let o = document.getElementById("o");


whale.tabs.executeScript(
    {
        file: "canvas.js"
    });

function clearCanvas()
{
    whale.tabs.executeScript(
        {
            code: "ctx.clearRect(0, 0, 1920, 1080);ctx.beginPath();"
        });
    
}
function chanageColor(object)
{
    clearCanvas();
    whale.tabs.executeScript(
    {
        code: "var color = \""+object.style.background+"\";"
    });
    whale.tabs.executeScript({
        file: "changeColor.js"
    });
}

function Palette(r,g,b,o)
{
    this.r = r;
    this.g = g;
    this.b = b;
    this.o = o;
}

Palette.prototype.GetString = function()
{
    return "rgba("+this.r+", "+this.g+", "+this.b+", "+this.o+")";
}

function Manager()
{
    this.List = new Array(0);
    this.size = 0;
}

Manager.prototype.addList= function(obj)
{
    this.List.push(obj);
}

Manager.prototype.View = function()
{
    var code = "";
    for(var i = 0 ; i < manager.List.length; i++)
    {
        var item = manager.List[i];
        if(i % 5 == 0)
        {
            code += "<tr>";
        }
        code += "<td><div class=\"color\" style=\"background: "+ item.GetString()+"\"></div></td>";

        if(i+1 == manager.List.length)
        {
            code += "<td><div class=\"AddColor\">&#43;</div></td>";
        }
        if(i % 5 == 4)
        {
            code += "</tr>";
        }
    }
    
    palette.innerHTML = code;

    var colors = document.getElementsByClassName("color");

    for(var i = 0; i < colors.length; i++)
    {
        colors[i].onclick = function()
        {
            chanageColor(this);
        }
    }
}
var manager = new Manager();

manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.addList(new Palette(255,0,0,0.1));
manager.View();
