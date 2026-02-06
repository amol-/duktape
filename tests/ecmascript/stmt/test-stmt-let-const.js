/*===
undefined
ReferenceError
TypeError
SyntaxError
SyntaxError
0 1 2
3
undefined
ReferenceError
1
===*/

(function () {
	{ let x = 1; }
	print(typeof x);

	try {
		print(x);
		let x = 1;
	} catch (e) {
		print(e.name);
	}

	const y = 1;
	try {
		y = 2;
	} catch (e) {
		print(e.name);
	}

	try {
		eval("function f(x) { let x; }");
	} catch (e) {
		print(e.name);
	}
	try {
		eval("function g(x) { const x = 1; }");
	} catch (e) {
		print(e.name);
	}

	var out = [];
	for (let i = 0; i < 3; i++) {
		out.push(function () { return i; });
	}
	print(out[0](), out[1](), out[2]());

	var count = 0;
	for (const k in [1, 2, 3]) {
		count++;
	}
	print(count);
})();

switch (1) {
case 1:
	let s = 1;
	break;
}
print(typeof s);

	try {
		switch (1) {
	case 1:
		/* TDZ across cases. */
		print(s2);
		break;
	case 2:
		let s2 = 2;
		break;
		}
} catch (e) {
	print(e.name);
}

let z = 1;
print(z);
