
#conditional
has_high_income = True
has_good_credit = False
if has_good_credit or has_high_income:
    print("Eligible for loan")

    weight = int(input('Weight: '))
unit = input('(L)ls or (K)g: ')
if unit.upper() == "L":
    converted = weight * 0.45
    print(f"You are {converted} kilos")
else:
    converted = weight / 0.45
    print(f"You are {converted} pounds")
    
    