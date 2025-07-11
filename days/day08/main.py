🔐 Caesar Cipher
# Day 08 of 100 Days of Code – Python Bootcamp
# Works with external files: _art.py
# Encrypts or decrypts messages by shifting letters in the alphabet

import art

# Print ASCII logo from art.py
print(art.logo)

# Standard lowercase alphabet
alphabet = [chr(i) for i in range(97, 123)]  # Generates ['a', 'b', ..., 'z']

def caesar(original_text, shift_amount, encode_or_decode):
    # Holds the final encrypted or decrypted output
    output_text = ""

    # Flip direction if decoding
    if encode_or_decode == "decode":
        shift_amount *= -1

    # Go letter by letter
    for letter in original_text:
        if letter not in alphabet:
            output_text += letter  # Preserve punctuation, numbers, spaces
        else:
            # Find the index of the letter and apply the shift
            shifted_position = (alphabet.index(letter) + shift_amount) % len(alphabet)
            output_text += alphabet[shifted_position]

    print(f"Here is the {encode_or_decode}d result: {output_text}")

# Keeps the loop running for multiple attempts
should_continue = True

while should_continue:
    # Gather user input
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    # Run Caesar logic
    caesar(original_text=text, shift_amount=shift, encode_or_decode=direction)

    # Ask whether to repeat
    restart = input("Type 'yes' if you want to go again. Otherwise, type 'no'.\n").lower()
    if restart == "no":
        should_continue = False
        print("Goodbye")
