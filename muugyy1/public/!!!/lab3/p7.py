a = input("Регистрээ оруулна уу:")
lastName, FirstName = map(str, input("Овог нэрээ оруулна уу:").split())
on = ""
sar = ""
udur = ""
if int(a[2:4])>22:
    print(a[2:4])
    on = 1900 + int(a[2:4])
else:
    on = 2000 + int(a[2:4])
if on>2000:
    sar = int(a[4:6]) - 20
    sar = "0" + str(sar)
else:
    sar = int(a[4:6])
    sar = "0" + str(sar)
udur = a[6:8]
print(f"{on}-{sar}-{udur}")
print(f"{lastName[0]}.{FirstName}")
print(f"{lastName} Овогтой {FirstName}")