a=" rm -rf ~/snap/opera && sudo rm -rf /var/snap/opera && sudo rm -rf /var/lib/snapd/snaps/opera*"

b=a.replace("opera","postman")

print(b)