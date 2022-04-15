# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Create a method called even_or_odd and give it a parameter of num
# Inside the method write a conditional which uses interpolation to print #{num} is odd if the number is odd and #{num} is even if the number is even
# Call the function 

def even_or_odd(num)
    if num.even?
        p "#{num} is even"
    else
        p "#{num} is odd" 
    end
end

even_or_odd(num1)
even_or_odd(num2)
even_or_odd(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create a method called no_vowels and give it a parameter of string
# Inside of the method used the delete method to delete vowels from the string
# Print the result
# Call the function

def no_vowels(string)
    p string.delete "aeiouAEIOU"
end

no_vowels(album1)
no_vowels(album2)
no_vowels(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Create a method called palindrome_checker and give it a parameter of string
# Create a conditional inside the method which checks to see whether the string equals itself reversed
# If it does, then print #{string} is a palindrome, if not then print #{string} is not a palindrome
# Call the function

def palindrome_checker(string)
    new_string = string.downcase
    if new_string == new_string.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome_checker(palindrome_tester1)
palindrome_checker(palindrome_tester2)
palindrome_checker(palindrome_tester3)