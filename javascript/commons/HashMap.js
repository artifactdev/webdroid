/*******************************************************************************
 * Created on 2011
 *
 * Copyright(c) 1995 - 2011 T-Systems Multimedia Solutions GmbH
 * Riesaer Str. 5, 01129 Dresden
 * All rights reserved.
 *******************************************************************************/

function HashMap() {
    // members
    this.keyArray = new Array(); // Keys
    this.valArray = new Array(); // Values
}

HashMap.prototype.put = function(key, val) {
    var elementIndex = this.findIt(key);

    if (elementIndex == (-1)) {
        this.keyArray.push(key);
        this.valArray.push(val);
    } else {
        this.valArray[elementIndex] = val;
    }
};

HashMap.prototype.get = function(key) {
    var result = null;
    var elementIndex = this.findIt(key);

    if (elementIndex != (-1)) {
        result = this.valArray[elementIndex];
    }

    return result;
};

HashMap.prototype.getKeyAt = function(index) {
    if (index >= this.keyArray.length) {
        return null;
    }

    return this.keyArray[index];
};

HashMap.prototype.remove = function(key) {
    var elementIndex = this.findIt(key);

    if (elementIndex != (-1)) {
        this.keyArray = this.keyArray.removeAt(elementIndex);
        this.valArray = this.valArray.removeAt(elementIndex);
    }
};

HashMap.prototype.size = function() {
    return (this.keyArray.length);
};

HashMap.prototype.clear = function() {
    this.keyArray = new Array();
    this.valArray = new Array();
};

HashMap.prototype.keySet = function() {
    return (this.keyArray);
};

HashMap.prototype.valueSet = function() {
    return (this.valArray);
};

HashMap.prototype.toString = function() {
    var result = "";

    for ( var i = 0; i < this.keyArray.length; i++) {
        result += "Key: " + this.keyArray[i] + " \tValue: " + this.valArray[i] + "\n";
    }
    return result;
};

HashMap.prototype.findIt = function(key) {
    var result = (-1);

    for ( var i = 0; i < this.keyArray.length; i++) {
        if (this.keyArray[i] == key) {
            result = i;
            break;
        }
    }
    return result;
};

HashMap.prototype.getAsString = function() {
    var result = "";

    for ( var i = 0; i < this.valArray.length; i++) {
        if (result.length > 0) {
            result += ",";
        }
        result += this.valArray[i];
    }
    return result;
};

HashMap.prototype.getIdsAsString = function() {
    var result = "";

    for ( var i = 0; i < this.keyArray.length; i++) {
        if (result.length > 0) {
            result += ",";
        }
        result += this.keyArray[i];
    }
    return result;
};

Array.prototype.removeAt = function(index) {
    var part1 = this.slice(0, index);
    var part2 = this.slice(index + 1);

    return (part1.concat(part2));
};
