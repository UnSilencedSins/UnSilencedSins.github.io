var sets = 0;
            
Array.prototype.randomize = function () {
    return this[Math.floor(Math.random()*this.length)];
}
            
function getRandom(set)
{
    var items = [];
    var form = document.getElementById("form" + set).getElementsByClassName("item");

    for(i = 0; i < form.length; i++)
    {
        items[i] = form[i].value;
    }

    document.getElementById("chosenItem" + set).innerHTML = "The choice is: " + items.randomize();

    return false;
}
            
function addItem(toForm)
{
    var form = document.getElementById(toForm);

    var br = document.createElement("br");

    var addButton = form.removeChild(form.getElementsByClassName("buttons")[0]);
    var getButton = form.removeChild(form.getElementsByClassName("buttons")[0]);

    var newItem = document.createElement("input");
    newItem.setAttribute("type", "text");
    newItem.setAttribute("class", "item");
    newItem.setAttribute("maxlength", "15");

    document.getElementById(toForm).appendChild(newItem);
    document.getElementById(toForm).appendChild(br);

    document.getElementById(toForm).appendChild(addButton);
    document.getElementById(toForm).appendChild(getButton);

    newItem.focus();
}

function addList()
{
   var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "set");
    newDiv.setAttribute("id", "set" + sets);

    document.getElementById("topDog").appendChild(newDiv);

    var newForm = document.createElement("form");
    newForm.setAttribute("id", "form" + sets);
    newForm.setAttribute("class", "forms");

    document.getElementById("set" + sets).appendChild(newForm);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "item");
    input.setAttribute("maxlength", "15");
    var br = document.createElement("br");

    document.getElementById("form" + sets).appendChild(input);
    document.getElementById("form" + sets).appendChild(br);

    var addButton = document.createElement("input");
    addButton.setAttribute("type", "button");
    addButton.setAttribute("onClick", "addItem('form" + sets + "')");
    addButton.setAttribute("value", "Add an item");
    addButton.setAttribute("class", "buttons");

    document.getElementById("form" + sets).appendChild(addButton);

     var getButton = document.createElement("input");
    getButton.setAttribute("type", "button");
    getButton.setAttribute("onClick", "getRandom('" + sets + "')");
    getButton.setAttribute("value", "Get a random item");
    getButton.setAttribute("class", "buttons");

     document.getElementById("form" + sets).appendChild(getButton);

    var newP = document.createElement("p");
    newP.setAttribute("id", "chosenItem" + sets);

    document.getElementById("set" + sets).appendChild(newP);

     input.focus();

    sets++;
}