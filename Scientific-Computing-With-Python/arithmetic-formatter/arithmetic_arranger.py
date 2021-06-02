def arithmetic_arranger(problems, resultFlag = False):
	# validation
	if len(problems) > 5: return "Error: Too many problems."

	output = [""] * (4 if resultFlag else 3)
	space = "    "
	firstIter = True
	for item in problems:
		opIsPlus = True
		itemParts = item.split("+")

		if len(itemParts) == 1:
			opIsPlus = False
			itemParts = item.split("-")
		
		if len(itemParts) != 2:
			return "Error: Operator must be '+' or '-'."

		try:
			a,b = int(itemParts[0].strip()), int(itemParts[1].strip())
		except:
			return "Error: Numbers must only contain digits."
		
		if a > 9999 or b > 9999:
			return "Error: Numbers cannot be more than four digits."
		
		c = a + b if opIsPlus else a - b

		lenA = len(str(a))
		lenB = len(str(b))
		lenC = len(str(c))
		length = max(lenA, lenB)
		
		output[0] += (space if not firstIter else "") + " " * (length + 2 - lenA) + str(a)
		output[1] += (space if not firstIter else "") + ("+" if opIsPlus else "-") + " " + " " * (length - lenB) + str(b)
		output[2] += (space if not firstIter else "") + "-" * (length + 2)
		if resultFlag:
			output[3] += (space if not firstIter else "") + " " * (length + 2 - lenC) + str(c) 

		firstIter = False

	return "\n".join(output)