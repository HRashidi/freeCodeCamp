def string2time(string, noon = False):
	if noon: noon = 12
	[hour, minute ] = string.strip().split(":")

	return (int(hour) + noon, int(minute))

def dayOfWeek(day, duration):
	if not day: return ""
	days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

	index = ([el.lower() for el in days].index(day.lower()) + duration) % 7
	return ", {}".format(days[index])

def add_time(start, duration, day = False):

	# function
	start, noon = start.split(" ")
	noon = noon == 'PM'
	[startH, startM] = string2time(start, noon)
	[durationH, durationM] = string2time(duration)

	#=== Adding ===
	carryH, newM = (startM + durationM) // 60, (startM + durationM) % 60
	carryD, newH = (startH + durationH + carryH) // 24, (startH + durationH + carryH) % 24

	newH, noon = newH % 12, newH >= 12
	newH = newH if newH else newH + 12
	noon = 'PM' if noon else 'AM'

	output = "{hour}:{minute:02d} {noon}".format(hour= newH, minute = newM, noon=noon)

	# Week of day
	output += dayOfWeek(day, carryD)
	# next day
	if carryD == 1:
		output += " (next day)"
	elif carryD > 1:
		output += " ({} days later)".format(carryD)

	return output