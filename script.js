let BTN = document.getElementById("calc");

BTN.addEventListener("click", A);

 function A () {
   let Risk = document.getElementById("risk").value;
 	let Entry = document.getElementById("entry").value;
   let SL = document.getElementById("sl").value;
	let TST = document.getElementById("tst");	
	let t1 = document.getElementById("T1");
	let t2 = document.getElementById("T2");
	let t3 = document.getElementById("T3");
	let t4 = document.getElementById("T4");

	let slps = Entry - SL;

	n4.innerText = Entry - SL;
	TST.innerText = Risk / (Entry - SL);

	t1.innerText = (-1 * (- Entry - slps));
	t2.innerText = (-1 * (- Entry - (slps * 2)));
	t3.innerText = (-1 * (- Entry - (slps * 3)));
	t4.innerText = (-1 * (- Entry - (slps * 5)));

	let cap = document.getElementById("capital");

	cap.innerText =parseInt( Entry * TST.innerText);
}
