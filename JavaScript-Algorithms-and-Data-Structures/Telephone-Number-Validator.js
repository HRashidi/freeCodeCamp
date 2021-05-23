function telephoneCheck(str) {
	
	// 1 (555)555-5555
	let re1 = /^1?[- ]?\(([0-9]{3})\)[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
	
	// 1 555-555-5555
	let re2 = /^1?[- ]?([0-9]{3})[- ]?([0-9]{3})[- ]?([0-9]{4})$/;

	return re1.test(str) || re2.test(str);
}


let res = telephoneCheck("(555)555-5555");
console.log(res);


//	 ^        # Assert position at the beginning of the string.
//	 \(       # Match a literal "("
//	 ?      #   between zero and one time.
//	 (        # Capture the enclosed match to backreference 1:
//	 [0-9]  #   Match a digit
//	 	{3}  #     exactly three times.
//	 )        # End capturing group 1.
//	 \)       # Match a literal ")"
//	 ?      #   between zero and one time.
//	 [-. ]    # Match one hyphen, dot, or space
//	 ?      #   between zero and one time.
//	 ⋯       # [Match the remaining digits and separator.]
//	 $        # Assert position at the end of the string.