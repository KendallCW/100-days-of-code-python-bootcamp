# art.py
def get_rock():
    return '''    ROCK
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)'''

def get_paper():
    return '''    PAPER
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)'''

def get_scissors():
    return '''    SCISSORS
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)'''

ascii_art = {
    "rock": get_rock(),
    "paper": get_paper(),
    "scissors": get_scissors()
}

options = ["rock", "paper", "scissors"]
