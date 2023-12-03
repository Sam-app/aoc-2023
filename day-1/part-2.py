import os
import re
import sys

digit_map = {
        'one': 'o1ne', 'two': 't2wo', 'three': 'th3ee', 
      'four': 'fo4ur', 'five': 'fi5ve', 'six': 's6ix', 'seven': 'se7en', 
      'eight': 'ei8ht', 'nine': 'ni9ne',
  }

def main():
  filename = './input.txt'

  if not os.path.exists(filename):
    print("Error: File '%s' not found" % filename)
    return

  try:
    with open(filename) as f:
      lines = f.readlines()

      total_sum = 0
      for line in lines:
          line = line.strip().lower()

          for word, digit in digit_map.items():
              line = line.replace(word, digit)

          digits = re.findall(r'\d', line)
          if digits:
              first_digit = digits[0]
              last_digit = digits[-1]
              total_sum += int(first_digit + last_digit)
    print(total_sum)
  except Exception as e:
    print(f"An error occurred: {e}")

if __name__ == "__main__":
  main()