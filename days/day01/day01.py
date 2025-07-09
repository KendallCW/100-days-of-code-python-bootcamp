# 🎸 Band Name Generator
# Day 01 of 100 Days of Code – Python Bootcamp

def generate_band_name():
    print("👋 Greetings, Stranger!")
    
    # Prompt the user for inputs
    city = input("🌆 Which city did you grow up in?\n").strip()
    pet = input("🐶 What is the name of your pet?\n").strip()
    
    # Generate and display the band name
    band_name = f"{city} {pet}"
    print(f"\n🎤 Your band name could be: {band_name}")

# Run the generator
generate_band_name()
