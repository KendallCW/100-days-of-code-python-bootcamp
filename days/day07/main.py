# 🎯 Hangman Game
# Day 07 of 100 Days of Code – Python Bootcamp
# Works with external files: hangman_words.py, hangman_art.py, game.py

import random
from hangman_words import word_list          # List of valid words
from hangman_art import stages, logo         # Hangman visual art + intro logo
from game import (                           # Core game functions
    initialize_display,
    update_display,
    is_duplicate,
    is_word_complete,
    print_display
)

def play_hangman():
    chosen_word = random.choice(word_list)   # Select a random word
    lives = 6                                 # Total lives a player has
    display = initialize_display(chosen_word) # Create initial blank display
    guessed_letters = []                      # Track user guesses

    print(logo)
    print(f"(Debug) The word is: {chosen_word}")  # Optional for dev/testing

    game_over = False

    while not game_over:
        print(f"\n{'*' * 20} {lives}/6 LIVES LEFT {'*' * 20}")
        print_display(display)

        guess = input("Guess a letter: ").lower()

        # Handle repeat guesses
        if is_duplicate(guess, guessed_letters):
            print(f"You've already guessed '{guess}'. Try again.")
            continue

        guessed_letters.append(guess)

        # Handle correct and incorrect guesses
        if guess in chosen_word:
            display = update_display(chosen_word, display, guess)
        else:
            lives -= 1
            print(f"'{guess}' is not in the word. You lost a life.")

        # Check win/lose conditions
        if is_word_complete(display):
            game_over = True
            print_display(display)
            print("🎉 YOU WIN! 🎉")
        elif lives == 0:
            game_over = True
            print(f"\n💀 YOU LOSE! The word was: {chosen_word}")

        # Show current hangman stage
        print(stages[lives])

# Only runs if executed directly (not imported)
if __name__ == "__main__":
    play_hangman()
