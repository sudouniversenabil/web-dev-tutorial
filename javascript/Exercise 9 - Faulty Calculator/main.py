import random
while True:
    a=float(input("input the value of a: "))
    sign=input("input the ")
    b=float(input("input the value of b: "))
    if 10>=a:
        if sign == "+":
            print("the ans is ", a-b)
        elif sign == "-":
            print("the ans is ", a+b)

        elif sign == "*":
           print("the ans is ", a/b)
        elif sign == "/":
            print("the ans is ", a*b)
    else:
        if sign == "+":
            print("The answer is", a + b)

        elif sign == "-":
            print("The answer is", a - b)

        elif sign == "*":
            print("The answer is", a * b)

        elif sign == "/":
            print("The answer is", a / b)