try:
    age = int(input('Age: '))
    income = 2000
    risk = income / age
except ZeroDivisionError:
    print ('Age Cannot be 0.')
except ValueError:
    print("Invalid value")