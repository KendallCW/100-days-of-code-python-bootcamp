# 🏴‍☠️ Treasure Island
# Day 03 of 100 Days of Code – Python Bootcamp

from art import logo  # Loads the ASCII art from a separate file to display at the start

# Shows the game intro and the logo
def intro():
    print(logo)
    print("\n🏴‍☠️ Welcome to Treasure Island.\n")
    print("Your mission is to find the treasure... if you're bold enough to survive the journey. 🌴💀\n")

# First decision: Choose left or right in the cave
def first_choice():
    print("\nYou step into a misty cave.")
    print("Two paths lie ahead—one lit faintly to the left, the other swallowed in darkness to the right.")

    while True:
        choice = input("Do you go 'left' or 'right'? ").lower()
        if choice == "left":
            print("\nYou follow the torchlight, boots echoing against the damp stone...\n")
            return True  # Player survives and continues
        elif choice == "right":
            print("\nYou plummet into a hidden pit. 🕳️\nGame Over.\n")
            return False  # Player loses
        else:
            print("⚠️ Choose 'left' or 'right'.")  # Input validation prompt

# Second decision: Swim or wait for the boat
def second_choice():
    print("The tunnel opens into a wide underground chamber.")
    print("A silent black lake stretches out before you.")

    while True:
        choice = input("Do you 'wait' for a boat or 'swim' across? ").lower()
        if choice == "wait":
            print("\nA ghostly rowboat emerges. You climb aboard...\n")
            return True
        elif choice == "swim":
            print("\nA glowing red-eyed trout grabs your leg. 🐟\nGame Over.\n")
            return False
        else:
            print("⚠️ Choose 'wait' or 'swim'.")

# Third decision: Pick the correct door
def third_choice():
    print("⚔️ You reach a glowing chamber with three magical doors.")
    print("One is blue, one is red, and one is yellow. Or you can walk deeper instead.")

    while True:
        choice = input("What do you choose? 'blue', 'red', 'yellow', or 'walk'? ").lower()
        if choice == "yellow":
            print("\n✨ Treasure found! You Win! 🏆\n")
            return True
        elif choice == "blue":
            print("\nFrozen beasts surround you. 💀 Game Over.\n")
            return False
        elif choice == "red":
            print("\nFlames consume you. 💀 Game Over.\n")
            return False
        elif choice == "walk":
            print("\nYou fall into a trap. 💀 Game Over.\n")
            return False
        else:
            print("⚠️ Choose 'blue', 'red', 'yellow', or 'walk'.")

# Starts the full game sequence
def play_game():
    intro()
    if not first_choice(): return
    if not second_choice(): return
    third_choice()

# ▶️ Begin the adventure
play_game()
