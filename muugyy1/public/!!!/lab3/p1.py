a = int(input("Тоо оруулна уу"))
b = int(input("Тоо оруулна уу"))
c = int(input("Тоо оруулна уу"))
if a>b and a>c:
    print(f"Хамгийн их тоо {a}")
elif b>a and b>c:
    print(f"Хамгийн их тоо {b}")
elif c>a and c>a:
    print(f"Хамгийн их тоо {c}")
if a<b and a<c:
    print(f"Хамгийн бага тоо {a}")
elif b<a and b<c:
    print(f"Хамгийн бага тоо {b}")
elif c<a and c<a:
    print(f"Хамгийн бага тоо {c}")
print((a+b+c)/3)