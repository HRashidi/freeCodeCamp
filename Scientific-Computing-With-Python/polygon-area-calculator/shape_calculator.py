import math
class Rectangle:
	
	def __init__(self, width, height):
		self.width = width
		self.height = height

	def __str__(self):
		return "Rectangle(width={}, height={})".format(self.width, self.height)
	
	def set_width(self, width):
		self.width = width

	def set_height(self, height):
		self.height = height

	def get_area(self):
		return self.width * self.height

	def get_perimeter(self):
		return 2 * self.width + 2 * self.height

	def get_diagonal(self):
		return math.sqrt(self.width ** 2 + self.height ** 2)

	def get_picture(self):
		if self.width > 50 or self.height > 50:
			return "Too big for picture."
		
		shape = ("*" * self.width + "\n" ) * self.height
		return shape
		
	def get_amount_inside(self, item):
		columns = self.width // item.width
		rows = self.height // item.height
		return  columns * rows


class Square(Rectangle):
	def __init__(self, width):
		super().__init__(width, width)

	def __str__(self):
		return "Square(side={})".format(self.width)
	
	def set_side(self, width):
		self.width = width
		self.height = width

	def set_width(self, width):
		self.width = width
		self.height = width

	def set_height(self, height):
		self.width = height
		self.height = height