import sys
import re
import os

def main():
    filename = './input.txt'

    if not os.path.exists(filename):
        print("Error: File '%s' not found" % filename)
        return

    try:
        # Read the file
        with open(filename) as f:
            lines = f.readlines()

        total_sum = 0
        for line in lines:
            line = line.strip().lower()
            print("Line:", line)
           
            digits = re.findall(r'\d', line)
            print("Digits:", digits)
            if digits:
                # Get the first and last digit
                first_digit = digits[0]
                last_digit = digits[-1]
                print("First digit:", first_digit)
                print("Last digit:", last_digit)
                joined_digits = first_digit + last_digit
                print("Joined digits:", joined_digits)
                total_sum += int(joined_digits)

        # Print the result
        print(total_sum)
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
