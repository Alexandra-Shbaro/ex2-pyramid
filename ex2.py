number = int(input("Enter a number: "))

for i in range(number):
    if i == 0:
        print(i + 1)
    else:
        str_val = "1 "
        initial_val = 1
        
        for j in range(i):
            initial_val += 2
            str_val += str(initial_val) + " "
        
        print(str_val)
