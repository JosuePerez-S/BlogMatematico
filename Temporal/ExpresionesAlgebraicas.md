# FUNDAMENTOS-DE-ALGEBRA-JOSUE-PEREZ
## Conversiones de Sistemas Numéricos 

### Ejercicio 73: $00001111_2$ a Decimal
* **Paso 1:** Identificar las posiciones de los bits con valor $1$:
  $$1 \cdot 2^3 + 1 \cdot 2^2 + 1 \cdot 2^1 + 1 \cdot 2^0$$
* **Paso 2:** Calcular las potencias de $2$:
  $$8 + 4 + 2 + 1 = 15$$
* **Resultado:** $15$

### Ejercicio 74: $10011001_2$ a Decimal
* **Paso 1:** Identificar las posiciones de los bits activos ($1$):
  $$1 \cdot 2^7 + 1 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^0$$
* **Paso 2:** Sumar las potencias correspondientes:
  $$128 + 16 + 8 + 1 = 153$$
* **Resultado:** $153$

### Ejercicio 75: $11001100_2$ a Decimal
* **Paso 1:** Identificar las posiciones de los bits activos ($1$):
  $$1 \cdot 2^7 + 1 \cdot 2^6 + 1 \cdot 2^3 + 1 \cdot 2^2$$
* **Paso 2:** Sumar los valores:
  $$128 + 64 + 8 + 4 = 204$$
* **Resultado:** $204$

### Ejercicio 76: $01111011_2$ a Decimal
* **Paso 1:** Identificar las posiciones de los bits activos ($1$):
  $$1 \cdot 2^6 + 1 \cdot 2^5 + 1 \cdot 2^4 + 1 \cdot 2^3 + 1 \cdot 2^1 + 1 \cdot 2^0$$
* **Paso 2:** Sumar los valores:
  $$64 + 32 + 16 + 8 + 2 + 1 = 123$$
* **Resultado:** $123$

### Ejercicio 77: $00000000 \; 11111111_2$ a Decimal
* **Paso 1:** Omitir los ceros a la izquierda y calcular el valor del byte inferior ($11111111_2$):
  $$2^7 + 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0$$
* **Paso 2:** Sumar todos los valores (o usar la fórmula $2^8 - 1$):
  $$128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255$$
* **Resultado:** $255$

### Ejercicio 78: $00000010 \; 00000000_2$ a Decimal
* **Paso 1:** Identificar la única posición activa, que corresponde al bit $9$ (empezando desde $0$):
  $$1 \cdot 2^9$$
* **Paso 2:** Calcular la potencia de $2$:
  $$2^9 = 512$$
* **Resultado:** $512$

### Ejercicio 79: $11010101_2$ a Octal
* **Paso 1:** Agrupar en bloques de 3 bits de derecha a izquierda:
  $$011 \quad 010 \quad 101$$
* **Paso 2:** Convertir cada bloque a su equivalente octal:
  * $011_2 = 3$
  * $010_2 = 2$
  * $101_2 = 5$
* **Resultado:** $325_8$

### Ejercicio 80: $01101110_2$ a Octal
* **Paso 1:** Agrupar en bloques de 3 bits de derecha a izquierda:
  $$001 \quad 101 \quad 110$$
* **Paso 2:** Convertir cada grupo:
  * $001_2 = 1$
  * $101_2 = 5$
  * $110_2 = 6$
* **Resultado:** $156_8$

### Ejercicio 81: $10110011_2$ a Octal
* **Paso 1:** Agrupar en bloques de 3 bits de derecha a izquierda:
  $$010 \quad 110 \quad 011$$
* **Paso 2:** Convertir cada grupo:
  * $010_2 = 2$
  * $110_2 = 6$
  * $011_2 = 3$
* **Resultado:** $263_8$

### Ejercicio 82: $00000000 \; 11111111_2$ a Octal
* **Paso 1:** Agrupar los 16 bits en bloques de 3 bits de derecha a izquierda:
  $$000 \quad 000 \quad 000 \quad 011 \quad 111 \quad 111$$
* **Paso 2:** Convertir cada grupo:
  * $000_2 = 0$, $000_2 = 0$, $000_2 = 0$
  * $011_2 = 3$
  * $111_2 = 7$
  * $111_2 = 7$
* **Resultado:** $000377_8$ (o simplemente $377_8$)

### Ejercicio 83: $00000011 \; 11000000_2$ a Octal
* **Paso 1:** Agrupar los 16 bits en bloques de 3 bits:
  $$000 \quad 000 \quad 001 \quad 111 \quad 000 \quad 000$$
* **Paso 2:** Convertir cada grupo:
  * $000_2 = 0$, $000_2 = 0$
  * $001_2 = 1$
  * $111_2 = 7$
  * $000_2 = 0$, $000_2 = 0$
* **Resultado:** $001700_8$ (o $1700_8$)

### Ejercicio 84: $00000101 \; 01010101_2$ a Octal
* **Paso 1:** Agrupar los 16 bits en bloques de 3 bits:
  $$000 \quad 000 \quad 101 \quad 010 \quad 101 \quad 101$$
* **Paso 2:** Convertir cada grupo:
  * $000_2 = 0$, $000_2 = 0$
  * $101_2 = 5$
  * $010_2 = 2$
  * $101_2 = 5$
  * $101_2 = 5$
* **Resultado:** $005255_8$ (o $5255_8$)

### Ejercicio 85: $11011010_2$ a Hexadecimal
* **Paso 1:** Agrupar en bloques de 4 bits de derecha a izquierda:
  $$1101 \quad 1010$$
* **Paso 2:** Convertir cada nible a hexadecimal ($13 = \text{D}$, $10 = \text{A}$):
  * $1101_2 = 13 \rightarrow \text{D}$
  * $1010_2 = 10 \rightarrow \text{A}$
* **Resultado:** $\text{DA}_{16}$

### Ejercicio 86: $01111100_2$ a Hexadecimal
* **Paso 1:** Agrupar en bloques de 4 bits:
  $$0111 \quad 1100$$
* **Paso 2:** Convertir cada nible ($12 = \text{C}$):
  * $0111_2 = 7$
  * $1100_2 = 12 \rightarrow \text{C}$
* **Resultado:** $7\text{C}_{16}$

### Ejercicio 87: $10110101_2$ a Hexadecimal
* **Paso 1:** Agrupar en bloques de 4 bits:
  $$1011 \quad 0101$$
* **Paso 2:** Convertir cada nible ($11 = \text{B}$):
  * $1011_2 = 11 \rightarrow \text{B}$
  * $0101_2 = 5$
* **Resultado:** $\text{B5}_{16}$

### Ejercicio 88: $11110000 \; 10100101_2$ a Hexadecimal
* **Paso 1:** Agrupar los 16 bits en bloques de 4 bits:
  $$1111 \quad 0000 \quad 1010 \quad 0101$$
* **Paso 2:** Convertir cada nible:
  * $1111_2 = 15 \rightarrow \text{F}$
  * $0000_2 = 0$
  * $1010_2 = 10 \rightarrow \text{A}$
  * $0101_2 = 5$
* **Resultado:** $\text{F0A5}_{16}$

### Ejercicio 89: $00001111 \; 00001111_2$ a Hexadecimal
* **Paso 1:** Agrupar en bloques de 4 bits:
  $$0000 \quad 1111 \quad 0000 \quad 1111$$
* **Paso 2:** Convertir cada nible:
  * $0000_2 = 0$
  * $1111_2 = 15 \rightarrow \text{F}$
  * $0000_2 = 0$
  * $1111_2 = 15 \rightarrow \text{F}$
* **Resultado:** $0\text{F0F}_{16}$

### Ejercicio 90: $10000000 \; 00000001_2$ a Hexadecimal
* **Paso 1:** Agrupar en bloques de 4 bits:
  $$1000 \quad 0000 \quad 0000 \quad 0001$$
* **Paso 2:** Convertir cada nible:
  * $1000_2 = 8$
  * $0000_2 = 0$
  * $0000_2 = 0$
  * $0001_2 = 1$
* **Resultado:** $8001_{16}$

### Ejercicio 91: $325_8$ a Binario
* **Paso 1:** Convertir cada dígito octal a su grupo de 3 bits:
  * $3 = 011_2$
  * $2 = 010_2$
  * $5 = 101_2$
* **Paso 2:** Unir los bloques:
  $$011010101_2$$
* **Resultado:** $011010101_2$

### Ejercicio 92: $156_8$ a Binario
* **Paso 1:** Convertir cada dígito octal a 3 bits:
  * $1 = 001_2$
  * $5 = 101_2$
  * $6 = 110_2$
* **Paso 2:** Unir los bloques:
  $$001101110_2$$
* **Resultado:** $001101110_2$

### Ejercicio 93: $377_8$ a Binario
* **Paso 1:** Convertir cada dígito octal a 3 bits:
  * $3 = 011_2$
  * $7 = 111_2$
  * $7 = 111_2$
* **Paso 2:** Unir los bloques:
  $$011111111_2$$
* **Resultado:** $011111111_2$

### Ejercicio 94: $01777_8$ a Binario
* **Paso 1:** Convertir cada uno de los 5 dígitos octales a 3 bits:
  * $0 = 000_2$
  * $1 = 001_2$
  * $7 = 111_2$
  * $7 = 111_2$
  * $7 = 111_2$
* **Paso 2:** Unir los bloques:
  $$000001111111111_2$$
* **Resultado:** $000001111111111_2$

### Ejercicio 95: $03700_8$ a Binario
* **Paso 1:** Convertir cada dígito octal a 3 bits:
  * $0 = 000_2$
  * $3 = 011_2$
  * $7 = 111_2$
  * $0 = 000_2$
  * $0 = 000_2$
* **Paso 2:** Unir los bloques:
  $$000011111000000_2$$
* **Resultado:** $000011111000000_2$

### Ejercicio 96: $05255_8$ a Binario
* **Paso 1:** Convertir cada dígito octal a 3 bits:
  * $0 = 000_2$
  * $5 = 101_2$
  * $2 = 010_2$
  * $5 = 101_2$
  * $5 = 101_2$
* **Paso 2:** Unir los bloques:
  $$000101010101101_2$$
* **Resultado:** $000101010101101_2$

### Ejercicio 97: $\text{DA}_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a un nible (4 bits):
  * $\text{D} = 13 = 1101_2$
  * $\text{A} = 10 = 1010_2$
* **Paso 2:** Unir los bloques:
  $$11011010_2$$
* **Resultado:** $11011010_2$

### Ejercicio 98: $7\text{C}_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a 4 bits:
  * $7 = 0111_2$
  * $\text{C} = 12 = 1100_2$
* **Paso 2:** Unir los bloques:
  $$01111100_2$$
* **Resultado:** $01111100_2$

### Ejercicio 99: $\text{B5}_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a 4 bits:
  * $\text{B} = 11 = 1011_2$
  * $5 = 0101_2$
* **Paso 2:** Unir los bloques:
  $$10110101_2$$
* **Resultado:** $10110101_2$

### Ejercicio 100: $\text{F0A5}_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a 4 bits:
  * $\text{F} = 15 = 1111_2$
  * $0 = 0000_2$
  * $\text{A} = 10 = 1010_2$
  * $5 = 0101_2$
* **Paso 2:** Unir los bloques:
  $$1111000010100101_2$$
* **Resultado:** $1111000010100101_2$

### Ejercicio 101: $0\text{F0F}_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a 4 bits:
  * $0 = 0000_2$
  * $\text{F} = 15 = 1111_2$
  * $0 = 0000_2$
  * $\text{F} = 15 = 1111_2$
* **Paso 2:** Unir los bloques:
  $$0000111100001111_2$$
* **Resultado:** $0000111100001111_2$

### Ejercicio 102: $8001_{16}$ a Binario
* **Paso 1:** Convertir cada dígito hexadecimal a 4 bits:
  * $8 = 1000_2$
  * $0 = 0000_2$
  * $0 = 0000_2$
  * $1 = 0001_2$
* **Paso 2:** Unir los bloques:
  $$1000000000000001_2$$
* **Resultado:** $1000000000000001_2$

---

## Clasificación de Polinomios 

### Ejercicio 103: $5n + 5$
* **Paso 1:** Contar el número de términos: Tiene $2$ términos ($5n$ y $5$), por lo que es un **binomio**.
* **Paso 2:** Identificar el exponente más alto de la variable: La variable $n$ tiene exponente $1$, por lo que es de **grado 1 (lineal)**.
* **Resultado:** Binomio lineal (Grado 1, 2 términos)

### Ejercicio 104: $-10p^3 - 6 + 9p^2 - 4p^5 - 2p^8$
* **Paso 1:** Contar los términos: Contiene $5$ términos.
* **Paso 2:** Determinar el término con el mayor exponente: El término de mayor exponente es $-2p^8$, cuyo exponente es $8$.
* **Resultado:** Polinomio de octavo grado de 5 términos

### Ejercicio 105: $7x^8$
* **Paso 1:** Contar los términos: Tiene un solo término, por lo que es un **monomio**.
* **Paso 2:** Determinar el exponente de la variable: El exponente es $8$.
* **Resultado:** Monomio de octavo grado

### Ejercicio 106: $-2n + n^4 + 10n^6$
* **Paso 1:** Contar los términos: Consta de $3$ términos, por lo que es un **trinomio**.
* **Paso 2:** Determinar el mayor exponente: El exponente más alto es $6$ (término $10n^6$).
* **Resultado:** Trinomio de sexto grado

### Ejercicio 107: $5$
* **Paso 1:** Contar los términos: Tiene un término único sin variable visible ($5x^0$).
* **Paso 2:** Determinar el grado: Al no tener variable, su grado es $0$.
* **Resultado:** Monomio constante (Grado 0)

### Ejercicio 108: $5v^7$
* **Paso 1:** Contar los términos: Es un único término (**monomio**).
* **Paso 2:** Determinar el exponente: El exponente de $v$ es $7$.
* **Resultado:** Monomio de séptimo grado

---

##  Problemas de Aplicación 

### Ejercicio 109
* **Enunciado:** Trabajar juntos toma $3.08$ horas. Una persona sola tarda $8$ horas. Determinar cuánto tarda la segunda persona ($J$).
* **Paso 1:** Plantear la ecuación de tasas de trabajo combinadas:
  $$\frac{1}{8} + \frac{1}{J} = \frac{1}{3.08}$$
* **Paso 2:** Despejar $\frac{1}{J}$:
  $$\frac{1}{J} = \frac{1}{3.08} - \frac{1}{8}$$
* **Paso 3:** Calcular el valor numérico:
  $$\frac{1}{J} \approx 0.32467 - 0.125 = 0.19967$$
* **Paso 4:** Obtener $J$:
  $$J = \frac{1}{0.19967} \approx 5.008 \approx 5 \text{ horas}$$
* **Resultado:** $5$ horas

### Ejercicio 110
* **Enunciado:** Una persona tarda $5$ horas y otra $7$ horas en completar una tarea solos. Determinar cuánto tardan si trabajan juntas.
* **Paso 1:** Sumar las tasas de trabajo individuales:
  $$\text{Tasa combinada} = \frac{1}{5} + \frac{1}{7} = \frac{7 + 5}{35} = \frac{12}{35}$$
* **Paso 2:** Invertir la tasa para obtener el tiempo total ($t$):
  $$t = \frac{35}{12} \approx 2.9167 \text{ horas}$$
* **Resultado:** $\frac{35}{12}$ horas ($\approx 2.92$ horas)

### Ejercicio 111
* **Enunciado:** Un vehículo tarda $10$ horas a una velocidad $v$, haciendo el mismo recorrido que otro que tarda $6$ horas a $310\text{ km/h}$.
* **Paso 1:** Calcular la distancia total utilizando el segundo vehículo ($d = v \cdot t$):
  $$d = 310 \text{ km/h} \times 6 \text{ h} = 1860 \text{ km}$$
* **Paso 2:** Calcular la velocidad $v$ necesaria para cubrir esa distancia en $10$ horas:
  $$v = \frac{d}{t} = \frac{1860 \text{ km}}{10 \text{ h}} = 186 \text{ km/h}$$
* **Resultado:** $186\text{ km/h}$

### Ejercicio 112
* **Enunciado:** Un objeto se desplaza a $35\text{ km/h}$ durante un tiempo $t$, recorriendo la misma distancia que uno a $49\text{ km/h}$ durante $10$ horas.
* **Paso 1:** Calcular la distancia recorrida:
  $$d = 49 \text{ km/h} \times 10 \text{ h} = 490 \text{ km}$$
* **Paso 2:** Despejar el tiempo $t$:
  $$t = \frac{490 \text{ km}}{35 \text{ km/h}} = 14 \text{ horas}$$
* **Resultado:** $14$ horas

### Ejercicio 113
* **Enunciado:** Se mezclan $1$ litro de solución al $30\%$ con $4$ litros de solución al $20\%$. Hallar el porcentaje final de la mezcla.
* **Paso 1:** Calcular la cantidad total del componente activo:
  $$\text{Cantidad activa} = 1(0.30) + 4(0.20) = 0.30 + 0.80 = 1.10 \text{ litros}$$
* **Paso 2:** Calcular el volumen total de la mezcla:
  $$\text{Volumen total} = 1 + 4 = 5 \text{ litros}$$
* **Paso 3:** Calcular la concentración final:
  $$\text{Concentración} = \frac{1.10}{5} = 0.22 \rightarrow 22\%$$
* **Resultado:** $22\%$

### Ejercicio 114
* **Enunciado:** Se mezclan $7$ litros al $11\%$ con $6$ litros al $24\%$. Determinar la concentración resultante.
* **Paso 1:** Calcular el contenido activo total:
  $$\text{Cantidad activa} = 7(0.11) + 6(0.24) = 0.77 + 1.44 = 2.21 \text{ litros}$$
* **Paso 2:** Calcular el volumen total:
  $$\text{Volumen total} = 7 + 6 = 13 \text{ litros}$$
* **Paso 3:** Obtener el porcentaje final:
  $$\text{Concentración} = \frac{2.21}{13} = 0.17 \rightarrow 17\%$$
* **Resultado:** $17\%$
