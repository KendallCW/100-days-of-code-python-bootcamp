# 🎮 Rock, Paper, Scissors
# Day 04 of 100 Days of Code – Python Bootcamp

import random
from art import ascii_art, options  # Import ASCII graphics and valid choices

# Show game title and welcome message
def show_intro():
    print("🎮 Rock, Paper, Scissors - Best of Destiny!\n")

# Get a valid move from the user
def get_user_choice():
    while True:
        choice = input("Your move? (rock, paper, scissors): ").lower()
        if choice in options:
            return choice
        print("⚠️ Invalid choice. Try again.\n")

# Randomly select computer's move
def get_computer_choice():
    return random.choice(options)

# Display both choices using ASCII art
def display_choices(user_choice, computer_choice):
    print("\n🔹 You chose:")
    print(ascii_art[user_choice])
    print("🔸 Computer chose:")
    print(ascii_art[computer_choice])

# Decide who wins based on classic rules
def determine_winner(user_choice, computer_choice):
    if user_choice == computer_choice:
        print("🤝 It's a tie!\n")
    elif (
        (user_choice == "rock" and computer_choice == "scissors") or
        (user_choice == "paper" and computer_choice == "rock") or
        (user_choice == "scissors" and computer_choice == "paper")
    ):
        print("🏆 You win!\n")
    else:
        print("💻 I win! Better luck next time.\n")

# Ask user if they want to play again
def ask_play_again():
    while True:
        play_again = input("Do you want to play another round? (yes/no): ").lower()
        if play_again == "yes":
            return True
        elif play_again == "no":
            print("🎉 Thanks for playing! See you next time.")
            return False
        print("🤔 I didn't catch that. Please type 'yes' or 'no'.\n")

# Main function that runs the full game loop
def play_game():
    show_intro()
    while True:
        user = get_user_choice()
        computer = get_computer_choice()
        display_choices(user, computer)
        determine_winner(user, computer)
        if not ask_play_again():
            break

# Start game only if script is run directly
if __name__ == "__main__":
    play_game()
