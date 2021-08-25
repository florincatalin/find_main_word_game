/*
	Find Main Word Game v.2.0 (25.08.2021)
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
	document.write("<table id='mytable'>");
	
for(var i = 0; i < table.length; i++) {
	var rand = table[i];
        document.write("<tr" + " " + "id=" + '"' + i + '"' + ">");
    for(var j = 0; j < rand.length; j++) {
		
		if (table[i][j] == "@") {
			
/* 		document.write("<TD style='height:26px;width:26px;border: none !important;'>","","</TD>");	 */
		
		document.write("<td style='height:26px;width:26px;border: none !important;'" + " " + "id=" + '"' + i + "_" + j + '"' + ">", "", "</td>");
		
		} else {
			
		document.write("<td contenteditable='true' onkeyup='literemari(this)' style='height:26px;width:26px; border: 1px solid black;'" + " " + "id=" + '"' + i + "_" + j + '"' + ">", table[i][j], "</td>");
			
/* 			document.write("<td contenteditable='true' onkeyup='literemari(this)' style='height:26px;width:26px; border: 1px solid black;'>",table[i][j],"</td>"); */
		}
	
}
	document.write("</tr>");
}
	document.write("</table>");
	
//sterg literele
    var table = document.getElementById("mytable");
    for (var r = 1, n = table.rows.length-1; r < n; r++) {
        for (var c = 1, m = table.rows[r].cells.length; c < m; c++) {
		table.rows[r].cells[c].innerHTML = "";
        }
    }
	
	//setare indicatori si numere - aici mai trebuie lucrat
var tabelaa = document.getElementById("mytable").rows[0].cells;
for (s = 0; s < tabelaa.length; s++) {
tabelaa[s].style.border = "none";
tabelaa[s].contentEditable = "false";
tabelaa[s].style.userSelect = "none"; 
tabelaa[s].style.color = "#b3002d"; 
}
var randuri = document.getElementById("mytable").rows.length;
randuri = randuri - 1;
//alert(randuri);
var tabelaz = document.getElementById("mytable").rows[randuri].cells;
for (p = 0; p < tabelaz.length; p++) {
tabelaz[p].style.border = "none";
tabelaz[p].contentEditable = "false";
tabelaz[p].style.userSelect = "none";
tabelaz[p].style.color = "#b3002d"; 

}
// sterg chenarul din coloana 1
    var tablec = document.getElementById("mytable");
        for (c = 0; c < randuri; c++) {
		tablec.rows[c].cells[0].style.border = "none";
		tablec.rows[c].cells[0].contentEditable = "false";
//		table.rows[c].cells[0].style.backgroundColor = '#96ff73';
        tablec.rows[c].cells[0].style.userSelect = "none";
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
			   
			   var continutul = table.rows[r].cells[c].innerText;
			   if (continutul !=="") {
		       table.rows[r].cells[c].style.backgroundColor = '#73ff96';	
        }
		
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
		MarcDialogs.alert('Just one letter!');
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

	//verifica continutul celulei la click
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

		
document.onmouseover = function(e) {
    //console.log(e.target.id);
	var upid = e.target.id;
	
		var loc = upid.search("_");
		var rowno = upid.slice(0, loc);
		console.log(rowno);
		if(typeof definitii[rowno-1] !== "undefined") {
		document.getElementById("afisaj").style.display = "inherit";
	    document.getElementById("afisaj").innerHTML = definitii[rowno-1];
	    } 
	    if (typeof definitii[rowno-1] == "undefined" || definitii[rowno] == "") {
        document.getElementById("afisaj").style.display = "none"; 										
	    }							
									}
	
//calculez inaltimea tabelului rezultat
var table = document.getElementById("mytable");
//alert(table.offsetHeight);
	
//afisez in locatie
window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    afisaj.style.top = (y + document.documentElement.scrollTop - table.offsetHeight - 400) + 'px';
    afisaj.style.left = (x + document.documentElement.scrollLeft + 2) + 'px';
};	
