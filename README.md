# Talleres Desarrollo Web Backend

---

## 1. Requisitos previos

- Node.js
- Git
- Acceso al repositorio:
  `https://github.com/adechlien/talleres-dllo-backend`

---

## 2. Instalación

Clona el repositorio
```bash
git clone https://github.com/adechlien/talleres-dllo-backend
cd talleres-dllo-backend
```

Instala dependencias
```bash
npm install
```

---

## 3. Ejecución

Levanta el servidor
```bash
npm run start
```

Prueba el funcionamiento de la API
```bash
curl http://localhost:3000
```

La salida debe ser
```json
{"message":"API Funcionando"}
```

---

## 5. Prueba

### **Taller 1**

- **Archivo original:** `taller-01.js`
- **Archivo de rutas:** `src/routes/taller-01.routes.js`
- **Prefijo de las rutas:** `/api/taller-01`

**Funciones disponibles**

1. `convertidorTemp`
2. `resolvedor`
3. `mejorParidad`
4. `peorParidad`

---

#### **convertidorTemp**
Desarrolle una función llamada `convertidorTemp` que reciba una temperatura en centígrados y retorne la temperatura en fahrenheit.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-01/convertidorTemp -H "Content-Type: application/json" -d '{"celsius": 20}'
```

**Output**
```bash
{
    "celsius":20,"fahrenheit":68
}
```

---

#### **Resolvedor**
Desarrolle una función llamada `resolvedor` que retorne el valor de la fórmula general cuadrática. La función debe permitir, con el uso de parámetros, elegir si se quiere el resultado negativo o positivo.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-01/resolvedor -H "Content-Type: application/json" -d '{"a":1,"b":5,"c":4,"opt":"p"}'
```

**Output**
```bash
{
  "a": 1,
  "b": 5,
  "c": 4,
  "opt": "p",
  "resultado": -1
}
```

---

#### **mejorParidad**
Desarrolle una función llamada `mejorParidad` que, de la mejor manera posible, resuelva y retorne la paridad de un número.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-01/mejorParidad -H "Content-Type: application/json" -d '{"n": 7}'
```

**Output**
```bash
{
  "n": 7,
  "esPar": false,
  "valor": 1
}
```

---

#### **peorParidad**
Desarrolle una función llamada `peorParidad` que, de la peor manera posible, resuelva y retorne la paridad de un número. Solo es necesario "resolver" hasta el número 10.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-01/peorParidad -H "Content-Type: application/json" -d '{"n": 7}'
```

**Output**
```bash
{
  "n": 7,
  "esPar": false,
  "valor": 1
}
```

---

### **Taller 2**

* **Archivo original:** `taller-02.js`
* **Archivo de rutas:** `src/routes/taller-02.routes.js`
* **Prefijo de las rutas:** `/api/taller-02`

**Funciones disponibles**

1. `findMax`
2. `includes`
3. `sum`
4. `missingNumbers`

---

#### **findMax**
Desarrolle una función llamada `findMax` que reciba una lista de números por parámetro y retorne el mayor valor.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-02/findMax -H "Content-Type: application/json" -d '{"numbers":[3,17,-1,4,-19]}'
```

**Output**
```bash
{
  "numbers": [3, 17, -1, 4, -19],
  "max": 17
}
```

---

#### **includes**

Desarrolle una función llamada `includes` que reciba una lista de números y un número por parámetro y retorne un booleano representando si el número se encuentra en la lista.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-02/includes -H "Content-Type: application/json" -d '{"numbers":[3,17,-1,4,-19],"number":4}'
```

**Output**
```bash
{
  "numbers": [3, 17, -1, 4, -19],
  "number": 4,
  "includes": true
}
```

---

#### **sum**

Desarrolle una función llamada `sum` que reciba una lista de números y retorne la suma de los elementos de la lista.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-02/sum -H "Content-Type: application/json" -d '{"numbers":[3,17,-1,4,-19]}'
```

**Output**
```bash
{
  "numbers": [3, 17, -1, 4, -19],
  "sum": 4
}
```

---

#### **missingNumbers**

Desarrolle una función llamada `missingNumbers` que reciba una lista de números y retorne una lista de los números faltantes entre el menor y mayor de la lista.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-02/missingNumbers -H "Content-Type: application/json" -d '{"numbers":[7,2,4,6,3,9]}'
```

**Output**
```bash
{
  "numbers": [7, 2, 4, 6, 3, 9],
  "faltantes": [5, 8]
}
```

---

### **Taller 3**

* **Archivo original:** `taller-03.js`
* **Archivo de rutas:** `src/routes/taller-03.routes.js`
* **Prefijo de las rutas:** `/api/taller-03`

**Funciones disponibles**

1. `desglosarString`
2. `twoSum`
3. `conversionRomana`
4. `descomposicion`

---

#### **desglosarString**
Desarrolle una función llamada `desglosarString` que reciba una string, y la string `"vocales"` o `"consonantes"`, y retorne la cantidad de vocales o consonantes de la string recibida.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-03/desglosarString -H "Content-Type: application/json" -d '{"texto":"murcielagos","tipo":"vocales"}'
```

**Output**
```bash
{
  "texto": "murcielagos",
  "tipo": "vocales",
  "cantidad": 5
}
```

---

#### **twoSum**
Desarrolle una función llamada `twoSum` que reciba una lista de números enteros y otro número entero y retorne los índices de los números del arreglo que sumados sean el otro número.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-03/twoSum -H "Content-Type: application/json" -d '{"numbers":[2,7,11,15],"target":9}'
```

**Output**
```bash
{
  "numbers": [2, 7, 11, 15],
  "target": 9,
  "indices": [0, 1]
}
```

---

#### **conversionRomana**
Desarrolle una función llamada `conversionRomana` que reciba una string de cifras romanas y retorne el equivalente en cifras arábigas.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-03/conversionRomana -H "Content-Type: application/json" -d '{"romano":"MCMXCVII"}'
```

**Output**
```bash
{
  "romano": "MCMXCVII",
  "valor": 1997
}
```

---

#### **descomposicion**
Desarrolle una función llamada `descomposicion` que reciba una string de palabras separada por comas, donde la primera palabra es la palabra a descomponer y el resto son el diccionario a utilizar. La función debe retornar las dos palabras del diccionario que compongan la palabra a descomponer.

**Ejemplo**
```bash
curl -X POST http://localhost:3000/api/taller-03/descomposicion -H "Content-Type: application/json" -d '{"cadena":"malhumor,al,hum,humor,m,mal,malhu"}'
```

**Output**
```bash
{
  "cadena": "malhumor,al,hum,humor,m,mal,malhu",
  "pares": ["mal", "humor"]
}
```
---

## *El fin.*
