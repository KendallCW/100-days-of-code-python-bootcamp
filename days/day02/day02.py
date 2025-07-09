# 💰 Tip Calculator – Day 02 of 100 Days of Code (Python Bootcamp)

def calculate_tip():
    """
    Collects user input about bill, tip percentage, and number of people.
    Calculates how much each person should pay and displays it.
    """

    # Welcome message
    print("Welcome to the tip calculator!")

    # Get the bill, tip percentage, and number of people
    bill = float(input("What was the total bill? $").strip())
    tip = float(input("What percentage tip would you like to give? ").strip())
    people = int(input("How many people will split the bill? ").strip())

    # Calculate the total bill including tip
    tip_amount = bill * (tip / 100)
    total_bill = bill + tip_amount
    per_person = round(total_bill / people, 2)

    # Display the result
    print(f"Each person should pay: ${per_person}")

# Run the calculator
calculate_tip()
