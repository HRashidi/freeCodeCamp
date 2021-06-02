class Category:

	def __init__(self, name):
		self.fund = 0
		self.spent = 0
		self.ledger = []
		self.name = name

	def __str__(self):
		half = (30 - len(self.name)) // 2
		table = "*" * half + self.name + "*" * half
		table += ("*" if len(table) == 29 else "") + "\n"
		
		for item in self.ledger:
			desc  = item["description"][:23]
			value = "{:.2f}".format(item["amount"])[:7]

			table += desc + " " * (30 - len(desc) - len(value)) + value + "\n"
		
		table += "Total: {:0.2f}".format(self.fund)
		return table

	def deposit(self, amount, description = ""):
		self.fund += amount
		self.ledger.append({"amount": amount, "description": description})

	def withdraw(self, amount, description = ""):
		if not self.check_funds(amount):
			return False

		self.ledger.append({"amount": -amount, "description": description})
		self.fund -= amount
		self.spent += amount
		return True

	def get_balance(self):
		return self.fund

	def transfer(self, amount, category):
		result = self.withdraw(amount, "Transfer to {}".format(category.name))
		if result:
			category.deposit(amount, "Transfer from {}".format(self.name))
			self.spent += amount
		return result

	def check_funds(self, amount):
		return True if self.fund >= amount else False

def create_spend_chart(categories):
	cats = []
	maxLength = 0
	total = 0
	for cat in categories:
		if len(cat.name) > maxLength: maxLength = len(cat.name)
		total += cat.spent
		cats.append((cat.spent, cat.name))

	# title
	chart = ["Percentage spent by category"]

	# chart
	for i in range(100, -1, -10):
		line = "{:3d}".format(i) + "| "
		for percent, _ in cats:
			line += "o  " if round(percent / total * 100) >= i else "   "
		chart.append(line)

	# hr line
	line = " " * 4 + "-" * (len(chart[-1]) - 4)
	chart.append(line)

	# names
	for i in range(maxLength):
		line = " " * 5
		for _, name in cats:
			line += "{}  ".format(name[i]) if len(name) > i else "   "
		chart.append(line)

	return "\n".join(chart)