/*
	Find Main Word Game v.1.0 (19.08.2021)
 Copyright 2021 Florin-Cătălin TOFAN

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
	
	This application uses the code from 
MarcDialogs.js v20170621 - Marc Robledo 2014-2017 - http://www.marcrobledo.com/license
*/

//
function afiseazaRebus(table) {
document.write("<TABLE id='mytable'>");
for(var i = 0; i < integrama.length; i++) {
	var bucata = integrama[i];
        document.write("<TR>");
//
			if (table[i][j] == "▲" || table[i][j] == "▼") {
				document.write("<TD style='height:26px;width:26px;border: none !important; color:green;'>",table[i][j],"</TD>");
				}
//
    for(var j = 0; j < bucata.length; j++) {
//
	if (table[i][j] == "@") {
		    document.write("<TD style='height:26px;width:26px;border: none !important;'>","","</TD>");
		} else {
			document.write("<TD contenteditable='true' onkeyup='literemari(this)' style='height:26px;width:26px; border: 1px solid black;'>",table[i][j],"</TD>");
	}
//	
}
	document.write("</TR>");
}
	document.write("</TABLE>");
//
var tabel = document.getElementById('mytable');
for (var k = 0; k < tabel.rows.length; k++) {
   var firstCol = tabel.rows[k].cells[0]; //first column
   firstCol.style.border = 'none'; // or anything you want to do with first col
   firstCol.contentEditable = "false";
}
//sterg literele
    var table = document.getElementById('mytable');
    for (var r = 1, n = table.rows.length-1; r < n; r++) {
        for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
		table.rows[r].cells[c].innerHTML = "";
        }
    }
}

//afisez integrama
afiseazaRebus(integrama);

//pentru buton
function GetCellValues() {
var sir ="";
    var table = document.getElementById('mytable');
    for (var r = 1, n = table.rows.length-1; r < n; r++) {
        for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
//		console.log(table.rows[r].cells[c].innerHTML);
		sir += table.rows[r].cells[c].innerHTML;
        }
    }
	//alert(sir);
	//alert(solutia);
	if (solutia == sir) {
	//alert("Rezolvat!");
	MarcDialogs.alert('Success! You find the main word!');
		var table = document.getElementById('mytable');
	    for (var r = 1, n = table.rows.length-1; r < n; r++) {
           for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
		table.rows[r].cells[c].style.backgroundColor = '#96ff73';
        }
		}
	} else {
	MarcDialogs.alert("Wrong! <br> take a look at <br> Glossary terms.");
	}
}

window.addEventListener("onkeyup='literemari(this)'", function(e) {
});

function literemari(ctrl) {
    var num = ctrl.innerText; //get its innerHTML
	var unicat = num.length;
	var corectat = "";
    ctrl.innerText = num.toUpperCase();//le face majuscule
	//alert(unicat);
		if (unicat === 1 && num.match(/[a-z]/i)) {
		corectat = corectat.toUpperCase();
		}
		if (!num.match(/[a-z]/i)) {
		MarcDialogs.alert('Just letters!');
		ctrl.innerText = "?";	
		ctrl.style.backgroundColor = '#ffbfbf';
		} else {
		corectat = num.substring(0,1);
		corectat = corectat.toUpperCase();
		ctrl.innerText = corectat;
		ctrl.style.backgroundColor = '#ffff99';
		//alert("eroare de tastare");
		}
}

	//mai vedem
        var tbl = document.getElementById("mytable");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++)
                    tbl.rows[i].cells[j].onclick = function () { getval(this); };
            }
        }
        function getval(cel) {
		var litera = cel.innerHTML;
		var majuscula = litera.toUpperCase();
        //alert(cel.innerHTML);
		//alert(majuscula);
		cel.innerHTML = majuscula;
		}
