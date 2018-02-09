'use strict';

const format = function (numbers,n) {
        var results = "";
	var longest = numbers.reduce(function (a, b) { return a.length > b.length ? a : b; });
	var max_length = String(longest).length;

            for (var i=0; i<numbers.length; i++) {
		if(i!==0 && i%n===0)              
                {results += "\n";}
		if(i%n!==0 && i%(n-1)!==0)
		{results += " ";}
		results += String(numbers[i]).padStart(max_length);
            }

	alert(results);	
 	return results;
    }
