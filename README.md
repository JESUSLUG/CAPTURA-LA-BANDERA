# CTF PRINCIPIANTES
```
   #      #      #    ###    #   #  #   #
  # #    # #    # #    #     ## ##   # #
 #   #  #   #  #   #   #     # # #    #
 #####  #####  #####   #     # # #   # #
 #   #  #   #  #   #   #     #   #   # #
 #   #  #   #  #   #  ###    #   #  #   #
```

## AYUDA
El colectivo "Cybershadow" ha lanzado un llamado de auxilio a la comunidad de hackers. Se han infiltrado en una red global de corporaciones corruptas y gobiernos autoritarios que están llevando a cabo actividades ilegales y violaciones de la privacidad. La red se conoce como "DarkWeb Enterprises" y se dedica a la explotación de datos y la censura en línea.   
Gracias a nuestro espia dentro de la coorporacion, logramos un puente entre nosotros y ellos. Con esto, tenemos la IP de su servidor en nuestra red. Ahora a nosotros nos toca lograr entrar a este servidor por medio de SSH, por medio de recoleccion pasiva de datos de su administrador de servidor. 

Nuestro agente encubierto en la red ha proporcionado pistas en forma de enigmas. Si es atrapado, la información que descubran será incomprensible y sin valor para ellos.
Ahora te toca a ti lograr entrar.
Lo primero que tienes que hacer encontrar una url, no sabemos cual... 
```
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣷⣶⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠛⠻⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣁⠀⠀⠀⠀⣀⣤⣶⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⠛⠉⠛⠶⠀⠀⢐⠿⠋⠀⢨⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⢷⣿⣿⣶⠀⠀⠉⢶⣿⣿⠿⢿⣿⣿⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣶⡶⠂⠀⣀⠀⢀⡄⠐⢲⡾⣻⣿⣿⣿⠇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣯⢿⡶⣶⣿⣟⣿⡶⠶⣿⢣⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣾⣿⣿⣿⣧⠛⠒⠠⣤⣤⠶⠾⢣⣿⣿⣿⣿⣿⣤⣀⠀⠀⠀
⢀⣠⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⢿⣿⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
```

## RWwgYWRtaW5pc3RyYXJvIGRlIHNlcnZpbm9yIGVz 
01001010 01101111 01110011 01100101 00100000 01010011 01100001 01101100 01110110 01100001 01100100 01101111 01110010 00100000 01001101 01101111 01101010 01101001 01100011 01100001 00100000 01000011 01100001 01100010 01110010 01100101 01110010 01100001

## bWUgcGFyZWNlIHF1ZSBzdSB1c3VpcyBlcyBsYSBwcmltZXJhIGxldHRhIGRlIHN1IG5hbW9yZSB5IGVsIG5hbW9yZSBkZSBzbyBsdWVuZ2FlIGZhdm9yaXRvLg==


## ....
Enigma de seguridad, clave de acceso al abrigo,
Es tu identidad en el juego, donde eres un prodigio.
En la oficina, labor y deber son tu sino,
¿Qué palabra secreta es la que aquí busco en este camino?



