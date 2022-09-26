myDict = {
    "this": "энэ",
    "is": "бол",
    "computer": "компьютер",
    "my": "миний",
    "phone": "утас",
    "good": "сайн",
    
}
a = list(input("Англи үг оруулна уу:").split(" "))
b = list(input("Монгол үг оруулна уу:").split(" "))
s = ""
x = ""
for i in a:
    if i in myDict:
        s+=myDict[i] + " "
for i in b:
    if i in myDict.values():
        x+= list(myDict.keys())[list(myDict.values()).index(i)] + " "
print(s)
print(x)
