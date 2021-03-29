names = ['John', 'Bob', 'Mosh', 'Sarah', 'Mary']
names[0] = 'Jon'
print(names)

numbers = [3, 6, 2, 8, 8, 4, 10]
max = numbers[0]
for number in numbers:
    if number > max:
        max = number
print(max)

numbers.append(20)
print(numbers)
numbers.insert(0, 10)
numbers.pop()
print(number)
numbers.remove(2)
print(numbers.index(3)) #index of the number
print(10 in numbers)
numbers.sort()
print(numbers)

nums = [2, 2, 4, 6, 3, 4, 6, 1]
uniques = []
for number in nums:
    if number not in uniques:
        uniques.append(number)
print(uniques)