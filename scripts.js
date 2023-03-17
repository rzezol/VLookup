var _keyValueDict = {};

function execute(){
    
    _keyValueDict = {};
    fillKeyValueDictionary();
    matchValuesByKeysInDictionary();
}


function fillKeyValueDictionary(){

    var keyValueStrings = document.getElementById("KeyValuePairs").value.split('\n');  
    keyValueStrings.forEach(keyValueString => {
        addKeyValueToDict(keyValueString);
    });

}


function matchValuesByKeysInDictionary(){

    document.getElementById("Result").innerHTML = "";

    var keysStrings = document.getElementById("Keys").value.split('\n');
    keysStrings.forEach(keyString => {
        if (keyString.length == 0){
            document.getElementById("Result").innerHTML += "&#13;&#10;";
        }
        else{
            var value = _keyValueDict[keyString];
            if (typeof value !== 'undefined'){
                document.getElementById("Result").innerHTML += value + "&#13;&#10;";
            }
            else{
                document.getElementById("Result").innerHTML += "&#13;&#10;";
            }
        }
    });

}


function addKeyValueToDict(keyValueString){

    var keyValueArray = keyValueString.split('\t');
    const keyOnRight = document.getElementById("KeyOnRight").checked;
    if (!keyOnRight){
        if (keyValueArray.length >= 2){
            if (keyValueArray[0].length > 0){
                _keyValueDict[keyValueArray[0]] = keyValueArray[1];
            }
        }
        else if (keyValueArray.length == 1){
            if (keyValueArray[0].length > 0){
                _keyValueDict[keyValueArray[0]] = "";
            }
        }
        else{
            //nothing
        }
    }
    else{
        if (keyValueArray.length >= 2){
            if (keyValueArray[1].length > 0){
                _keyValueDict[keyValueArray[1]] = keyValueArray[0];
            }
        }
        else if (keyValueArray.length == 1){
            if (keyValueArray[1].length > 0){
                _keyValueDict[keyValueArray[1]] = "";
            }
        }
        else{
            //nothing
        }
    }

}
