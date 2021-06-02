import copy
import random
import copy
# Consider using the modules imported above.

class Hat:
	def __init__(self, **kwargs):
		self.contents = []
		for key, value in kwargs.items():
			self.contents.extend([key] * value)
		
	def draw(self, num):
		balls = self.contents
		if len(self.contents) < num:
			return balls
		draws = []

		for _ in range(num):			
			index = random.randrange(len(balls))
			ball = balls.pop(index)
			draws.append(ball)
		return draws


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
	probability = 0
	
	def examine(drewBalls):
		result = dict()
		for ball in drewBalls:
			if ball in result:
				result[ball] += 1
			else:
				result[ball] = 1
		
		for key, value in expected_balls.items():
			if (key not in result) or (result[key] < value):
				return False
		return True

	for _ in range(num_experiments):
		newHat = copy.deepcopy(hat)
		drewBalls = newHat.draw(num_balls_drawn)
		probability += 1 if examine(drewBalls) else 0


	return probability / num_experiments