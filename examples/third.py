import sys, json

def read_data():
	lines = sys.stdin.readlines()
	# these are arguments
	return json.loads(lines[0])

def main():
	lines = read_data()
	# now lines above, contain arguments which can be 
	# a dict or a list, use as you need
	# while sending data back, encode using json
	print json.dumps(lines)


if __name__ == '__main__':
	main()