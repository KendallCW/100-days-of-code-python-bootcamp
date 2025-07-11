# 🎹 Phrase Composer Project
# Day 06 of 100 Days of Code – Python Bootcamp

# Capitalizes and trims the user-provided name
def format_name(name):
    return name.strip().capitalize()

# Builds a present-tense phrase
def sentence_present(name, verb, obj):
    return f"{name} is {verb}ing {obj} right now!"

# Builds a future-tense phrase
def sentence_future(name, verb, obj):
    return f"One day, {name} will {verb} {obj}."

# Builds a personalized "love to do" phrase
def sentence_loves(name, verb, obj):
    return f"{name} loves to {verb} {obj}."

# Main function to run the interactive composer
def run_composer():
    print("🎹 Welcome to the Phrase Composer Playground!\n")

    # Collect user input
    name = format_name(input("Enter a name: "))
    verb = input("Enter a verb: ").strip()
    obj = input("Enter an object: ").strip()

    # Display phrases built using functions
    print("\n🔧", sentence_loves(name, verb, obj))
    print("🧠", sentence_present(name, verb, obj))
    print("🎯", sentence_future(name, verb, obj))

# Run the composer only if this script is executed directly
if __name__ == "__main__":
    run_composer()
