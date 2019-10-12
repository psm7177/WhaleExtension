let RedGreen = document.getElementById("RedGreen");
let change = document.getElementById("change");
let r = document.getElementById("r");
let g = document.getElementById("g");
let b = document.getElementById("b");
let o = document.getElementById("o");


whale.tabs.executeScript(
    {
        file: "canvas.js"
    });

RedGreen.onclick = function()
{
    whale.tabs.executeScript(
        {
            file: "color.js"
        }
    );
}

change.onclick = function()
{
    clearCanvas();
    whale.tabs.executeScript(
        {
            code: "var color = \"rgba("+r.value+","+g.value+","+b.value+", "+o.value+")\";"
        });
    whale.tabs.executeScript(
        {
            file: "changeColor.js"
        })
};

function clearCanvas()
{
    whale.tabs.executeScript(
        {
            code: "ctx.clearRect(0, 0, 1920, 1080);ctx.beginPath();"
        });
    
}
