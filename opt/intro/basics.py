# Print 1-255 
# Print all the integers from 1 to 255.

def print_1_to_255():
    "Print all the integers from 1 to 255."
    number=1
    while number<=255:
        print(number)
        number+=1


# Print Ints and Sum 0-255 
# Print integers from 0 to 255, and the sum so far.

# Find and Print Max 
# Print the largest element in a given array. 

# Print Odds 1-255 
# Prints all odd integers from 1 to 255

# Array with Odds
# Create an array with odd integers from 1-255.
def array_with_odds():
    'creates an array with odds'
    new_array=[i for i in range(1,256,2)]
    return new_array

# Iterate and Print Array 
# Print all values in a given array. 

# Get and Print Average 
# Analyze an arrays values and print the average.

# Greater than Y 
# Count and print the number of array values less than a given Y. 
def greater_than_y(arr, y):
    'Count and print the number of array values less than a given Y.'
    count=0
    for number in arr:
        if number>y:
            count+=1
    print(count)
    return count


# Max, Min, Average 
# Given an array, print max, min and average values. 

# Square the Values 
# Given an array, square each value in the array.  

# Zero Out Negative Numbers 
# Set negative array values to zero.  

# Shift Array Values
# Shift array values: drop the first and leave '0' at end.  

# Swap String for Array Negative Values
# Replace any negative array values with 'Dojo'. 


if __name__ == "__main__":
   x = {}
   x['newthing'] = 42
   print(x['newthing'])
