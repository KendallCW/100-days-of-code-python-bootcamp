# 💰 Tip Calculator
# Day 02 of 100 Days of Code – Python Bootcamp

"""
A simple interactive program that:
    - Greets the user
    - Asks for the total bill, desired tip percentage, and number of people
    - Calculates the total amount including tip
    - Divides the amount equally
    - Displays the final amount each person should pay
"""

def get_float(prompt):
    """
    Continuously prompts the user until a valid float is entered.
    Returns the float value.
    """
    while True:
        try:
            return float(input(prompt).strip())
        except ValueError:
            print("❌ Please enter a valid number (e.g. 45.67).")

def get_int(prompt):
    """
    Continuously prompts the user until a valid integer greater than 0 is entered.
    Returns the integer value.
    """
    while True:
        try:
            value = int(input(prompt).strip())
            if value < 1:
                print("❌ Number must be at least 1.")
                continue
            return value
        except ValueError:
            print("❌ Please enter a whole number.")

def calculate_tip():
    """
    Main function that orchestrates the tip calculator.
    Collects all inputs, performs calculations, and displays the result.
    """
    print("👋 Welcome to the tip calculator!")

    # Collect inputs safely
    bill = get_float("💵 What was the total bill? $")
    tip = get_float("💸 What percentage tip would you like to give? ")
    people = get_int("🧑‍🤝‍🧑 How many people will split the bill? ")

    # Calculate total and individual shares
    tip_amount = bill * (tip / 100)
    total_bill = bill + tip_amount
    per_person = round(total_bill / people, 2)

    # Display the final result
    print(f"\n✅ Each person should pay: ${per_person}")

# Run the calculator
calculate_tip()

