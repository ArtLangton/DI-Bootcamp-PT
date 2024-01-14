let astlength = 6;
//we have 6 lines that needs to be crated, hence we will already define
//the row length/
let ast = '';
// no spaces
for (let i = 1; i<=astlength; i++){
	ast +="*";
	console.log(ast);
}

let astsLength = 6;
let asts='';
for (let i = 1; i <= astsLength; i++){
	for (let j = 1; j <= i; j++){
		asts +="*";
	}
	console.log(asts);
	asts = '';
}