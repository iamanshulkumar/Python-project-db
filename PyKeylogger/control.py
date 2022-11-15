from pynput.mouse import Controller
from pynput.keyboard import Controller

# Controlling your mouse
# From top-left of the screen you can imagine the top-left to be (0,0)
def controlMouse():
	mouse = Controller()
	mouse.position = (100,200) # (move Left to right, top to bottom)

#controlMouse()

# Controlling your keyboard
def controlKeyboard():
	keyboard = Controller()
	keyboard.type("i am in control now! ")

controlKeyboard()

# Listing to your mouse

# Listing to your keyboard - will be finall used in our kelogger

