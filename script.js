
		// First row Functions (Deg and F-E)
		function degToRad() {
			if (document.getElementById('btn-deg').innerHTML == "DEG") {
				document.getElementById('btn-deg').innerHTML = "RAD";
				document.calc.clip.value = document.calc.clip.value * Math.PI / 180;
			}
			else {
				document.getElementById('btn-deg').innerHTML = "DEG";
				document.calc.clip.value = document.calc.clip.value * 180 / Math.PI;
			}

		}
		function toExpo() {
			document.calc.clip.value = parseInt(document.calc.clip.value).toExponential();
		}

		// Trigonometry Functions 
		function second() {
			// change all buttons i.e. 2nd, sin-1, cos-1, tan-1, hyp, sec-1, csc-1, cot-1
		}
		function sin() {
			//let ans = eval(document.calc.clip.value * Math.PI/180);
			document.calc.clip.value = Math.sin(document.calc.clip.value);
		}
		function cos() {
			document.calc.clip.value = Math.cos(document.calc.clip.value);
		}
		function tan() {
			document.calc.clip.value = Math.tan(document.calc.clip.value);
		}
		function sec() {
			document.calc.clip.value = Math.sec(document.calc.clip.value);
		}
		function csc() {
			document.calc.clip.value = Math.csc(document.calc.clip.value);
		}
		function cot() {
			document.calc.clip.value = Math.cot(document.calc.clip.value);
		}
		function hyp() {
			document.calc.clip.value = Math.hyp(document.calc.clip.value);
		}


		// Function Functions i.e. rand, ceil, floor
		function rand() {
			document.calc.clip.value = Math.random();
		}
		function ceil() {
			document.calc.clip.value = Math.ceil(eval(document.calc.clip.value));
		}
		function floor() {
			document.calc.clip.value = Math.floor(eval(document.calc.clip.value));
		}


		// Regular Functions
		function second() {
			// change first column buttons i.e. x^3, cuberoot(x), yRoot(x), 2^x, logy(x), e^x
		}
		function clearAll(value) {
			document.calc.clip.value = "0";
		}
		function backspc() {
			var data = document.calc.clip.value;
			document.calc.clip.value = data.substr(0, data.length - 1);
		}

		function square() {
			document.calc.clip.value = Math.pow(eval(document.calc.clip.value), 2);
		}
		function oneByX() {
			document.calc.clip.value = 1 / eval(document.calc.clip.value);
		}
		function abs() {
			document.calc.clip.value = Math.abs(document.calc.clip.value);
		}
		function ePowX() {
			document.calc.clip.value = Math.pow(Math.E, document.calc.clip.value);
		}

		function sqrt() {
			document.calc.clip.value = Math.sqrt(document.calc.clip.value);
		}
		function fact() {
			let n = document.calc.clip.value;
			document.calc.clip.value = factorial(n);
		}
		function factorial(n) {
			if (n == 0 || n == 1) {
				return 1;
			} else {
				return n * factorial(n - 1);
			}
		}

		function xPowerY() {
			document.calc.clip.value += '**';
		}

		function tenPowerX() {
			document.calc.clip.value = Math.pow(10, document.calc.clip.value);
		}

		function log10() {
			document.calc.clip.value = Math.log10(document.calc.clip.value);
		}

		function ln() {
			document.calc.clip.value = Math.log(document.calc.clip.value);
		}
		function changeSign() {
			if (document.calc.clip.value.substring(0, 1) == "-")
				document.calc.clip.value = document.calc.clip.value.substring(1, document.calc.clip.value.length);
			else
				document.calc.clip.value = "-" + document.calc.clip.value;
		}
		// Number Functions
		function number(value) {
			if (document.calc.clip.value == null || document.calc.clip.value == "0" || document.calc.clip.value === "Infinity" || document.calc.clip.value === "NaN")
				document.calc.clip.value = value;
			else
				document.calc.clip.value += value;
				console.log(document.calc.clip.value);
		}
		function equal() {
			document.calc.clip.value = eval(document.calc.clip.value);
		}
