# game.py
# Funciones auxiliares para el juego del ahorcado

def initialize_display(word):
    # Crea una lista de guiones bajos según la longitud de la palabra
    return ["_" for _ in word]

def update_display(word, display, guess):
    # Reemplaza los guiones con la letra adivinada
    for index, letter in enumerate(word):
        if letter == guess:
            display[index] = guess
    return display

def is_duplicate(guess, guessed_letters):
    # Verifica si la letra ya fue adivinada
    return guess in guessed_letters

def is_word_complete(display):
    # Comprueba si se han revelado todas las letras
    return "_" not in display

def print_display(display):
    # Muestra el estado actual de la palabra
    print(" ".join(display))
