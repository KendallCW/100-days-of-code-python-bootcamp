# 🧪 Password Generator Project
# Day 05 of 100 Days of Code – Python Bootcamp

import random
from data import letters, numbers, symbols

def show_intro():
    print("🔐 Welcome to the PyPassword Generator!\n")

def get_password_requirements():
    # Get number of characters of each type
    nr_letters = int(input("How many letters would you like in your password?\n"))
    nr_symbols = int(input("How many symbols would you like?\n"))
    nr_numbers = int(input("How many numbers would you like?\n"))
    return nr_letters, nr_symbols, nr_numbers

def generate_easy_password(nr_letters, nr_symbols, nr_numbers):
    # Generates password with ordered characters: letters → symbols → numbers
    password = ""
    for _ in range(nr_letters):
        password += random.choice(letters)
    for _ in range(nr_symbols):
        password += random.choice(symbols)
    for _ in range(nr_numbers):
        password += random.choice(numbers)
    return password

def generate_hard_password(nr_letters, nr_symbols, nr_numbers):
    # Randomizes character placement for stronger security
    password_list = []
    for _ in range(nr_letters):
        password_list.append(random.choice(letters))
    for _ in range(nr_symbols):
        password_list.append(random.choice(symbols))
    for _ in range(nr_numbers):
        password_list.append(random.choice(numbers))
    random.shuffle(password_list)  # Mix the order randomly
    return ''.join(password_list)

def play_game():
    show_intro()
    nr_letters, nr_symbols, nr_numbers = get_password_requirements()

    print("\n🧪 Easy Mode Password (ordered):")
    easy = generate_easy_password(nr_letters, nr_symbols, nr_numbers)
    print(easy)

    print("\n🔐 Hard Mode Password (shuffled):")
    hard = generate_hard_password(nr_letters, nr_symbols, nr_numbers)
    print(hard)

# ▶️ Run the generator
if __name__ == "__main__":
    play_game()
