const _extraKeyValueClassName = "ExtraKeyValuePairs";
const _newLineCode = "&#13;&#10;";
var _keyValueDict = {};

function execute(){
    
    _keyValueDict = {};
    fillKeyValueDictionary();
    matchValuesByKeysInDictionary();

}

function addKeyValuePairsTextarea(){

    var parent = document.getElementById("ExecuteRow").parentNode;
    var executeRowElement = document.getElementById("ExecuteRow");
    var trElement = document.createElement("tr");
    var thElement = document.createElement("th");
    thElement.attributes = 'colspan="2"';
    var textAreaElement = document.createElement("textarea");
    textAreaElement.style = "width:98%; height: 300px; margin-left: 100%";
    textAreaElement.className = _extraKeyValueClassName;
    thElement.appendChild(textAreaElement);
    trElement.appendChild(thElement);
    parent.insertBefore(trElement, executeRowElement);

    var areas = document.getElementsByClassName(_extraKeyValueClassName);
}


function fillKeyValueDictionary(){

    var index = 0;

    var keyValueStrings = document.getElementById("KeyValuePairs").value.split('\n');
    keyValueStrings.forEach(keyValueString => {
        addKeyValueToDict(keyValueString, 0);
    });

    index++;
    
    for (var extraKeyValuePairs of document.getElementsByClassName(_extraKeyValueClassName)) {

        var extraKeyValueStrings = extraKeyValuePairs.value.split('\n');
        extraKeyValueStrings.forEach(extraKeyValueString => {
            addKeyValueToDict(extraKeyValueString, index);
        });
        index++;

    };
}


function addKeyValueToDict(keyValueString, indexOfValue){

    //const keyOnRight = document.getElementById("KeyOnRight").checked;

    const keyValueArray = keyValueString.split('\t');
    const keyEndIndex = keyValueString.indexOf('\t');

    const key = keyValueArray[0];
    const value = keyValueString.slice(keyEndIndex+1);

    if (keyValueArray.length >= 2){
        if (key.length > 0){
            var values = _keyValueDict[key];
            if (values === undefined){
                _keyValueDict[key] = [];
                values = _keyValueDict[key];
            }
            values[indexOfValue] = value;
        }
    }
    else if (keyValueArray.length == 1){
        if (key.length > 0){
            var values = _keyValueDict[key];
            if (values === undefined){
                _keyValueDict[key] = [];
                values = _keyValueDict[key];
            }
            values[indexOfValue] = "";
        }
    }
    else{
        //nothing
    }

}


function matchValuesByKeysInDictionary(){

    document.getElementById("Result").innerHTML = "";

    var keysStrings = document.getElementById("Keys").value.split('\n');
    keysStrings.forEach(keyString => {
        if (keyString.length == 0){
            document.getElementById("Result").innerHTML += _newLineCode;
        }
        else{
            var value = _keyValueDict[keyString];
            if (typeof value !== 'undefined'){
                document.getElementById("Result").innerHTML += value.join('\t') + _newLineCode;
            }
            else{
                document.getElementById("Result").innerHTML += _newLineCode;
            }
        }
    });

}