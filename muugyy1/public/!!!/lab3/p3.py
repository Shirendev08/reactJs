str = input("Гараас утга оруул")
a = 0
b = 0
c = 0
d = 0
e = 0
for i in str:
    if i == "a":
        a+=1
    elif i == "b":
        b+=1
    elif i == "c":
        c+=1
    elif i == "d":
        d+=1
    elif i == "e":
        e+=1
print(f"a: {a} b:{b} c:{c} d:{d} e:{e}")