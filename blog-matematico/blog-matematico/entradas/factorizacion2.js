contenidoEntrada = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Factorización II | Blog de Álgebra</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
<main>
    <h1>Factorización II</h1>
    <p>En esta entrada explico cuatro casos de factorización: suma de cubos,
    diferencia de cubos, trinomios de la forma x² + bx + c y trinomios de la
    forma ax² + bx + c (aspa simple). Al final dejo una estrategia para decidir
    qué caso aplicar.</p>

    <section>
        <h2>Suma de cubos</h2>
        <h3>Cómo reconocerlo</h3>
        <p>Es un binomio donde cada término tiene raíz cúbica exacta y los dos
        están unidos por un signo más: a³ + b³.</p>
        <h3>Procedimiento</h3>
        <p>Primero saco la raíz cúbica de cada término para encontrar a y b.
        Luego armo dos factores: el binomio (a + b) y un trinomio formado por
        a², menos a·b, más b².</p>
        <p><strong>Fórmula:</strong> a³ + b³ = (a + b)(a² − ab + b²)</p>
        <h3>Ejemplo resuelto</h3>
        <p>Factorizar 64x³ + 27.</p>
        <p>∛(64x³) = 4x y ∛27 = 3, entonces a = 4x y b = 3.</p>
        <p>64x³ + 27 = (4x + 3)(16x² − 12x + 9)</p>
        <h3>Comprobación</h3>
        <p>(4x + 3)(16x² − 12x + 9) = 64x³ − 48x² + 36x + 48x² − 36x + 27
        = 64x³ + 27 ✓</p>
    </section>

    <section>
        <h2>Diferencia de cubos</h2>
        <h3>Cómo reconocerlo</h3>
        <p>Es un binomio de dos cubos perfectos separados por un signo menos:
        a³ − b³.</p>
        <h3>Procedimiento</h3>
        <p>Saco las raíces cúbicas para hallar a y b. El primer factor es
        (a − b) y el segundo es a² + ab + b², con todos los signos positivos.</p>
        <p><strong>Fórmula:</strong> a³ − b³ = (a − b)(a² + ab + b²)</p>
        <h3>Ejemplo resuelto</h3>
        <p>Factorizar 125m³ − 8.</p>
        <p>a = 5m y b = 2.</p>
        <p>125m³ − 8 = (5m − 2)(25m² + 10m + 4)</p>
        <h3>Comprobación</h3>
        <p>(5m − 2)(25m² + 10m + 4) = 125m³ + 50m² + 20m − 50m² − 20m − 8
        = 125m³ − 8 ✓</p>
    </section>

    <section>
        <h2>Trinomios de la forma x² + bx + c</h2>
        <h3>Cómo reconocerlo</h3>
        <p>Tiene tres términos y el coeficiente de x² es 1.</p>
        <h3>Procedimiento</h3>
        <p>Escribo dos paréntesis que empiezan con x: (x   )(x   ). Después busco
        dos números que multiplicados den c y sumados den b, y los coloco con su
        signo, uno en cada paréntesis.</p>
        <h3>Ejemplo resuelto</h3>
        <p>Factorizar x² + 2x − 35.</p>
        <p>Dos números que multiplicados den −35 y sumados den 2: 7 y −5.</p>
        <p>x² + 2x − 35 = (x + 7)(x − 5)</p>
        <h3>Comprobación</h3>
        <p>(x + 7)(x − 5) = x² − 5x + 7x − 35 = x² + 2x − 35 ✓</p>
    </section>

    <section>
        <h2>Trinomios de la forma ax² + bx + c (aspa simple)</h2>
        <h3>Cómo reconocerlo</h3>
        <p>Tiene tres términos y el coeficiente de x² es distinto de 1.</p>
        <h3>Procedimiento</h3>
        <p>Descompongo ax² en dos factores y c en otros dos. Los acomodo en dos
        filas y multiplico en cruz (el aspa). Si la suma de los dos productos
        cruzados da el término central bx, la combinación es correcta. Si no,
        pruebo con otra. Los factores se leen en horizontal.</p>
        <h3>Ejemplo resuelto</h3>
        <p>Factorizar 6x² + 11x − 10.</p>
        <p>6x² = 3x · 2x y −10 = (−2) · 5.</p>
        <p>Aspa: 3x · 5 = 15x y 2x · (−2) = −4x. Suma: 15x − 4x = 11x ✓</p>
        <p>6x² + 11x − 10 = (3x − 2)(2x + 5)</p>
        <h3>Comprobación</h3>
        <p>(3x − 2)(2x + 5) = 6x² + 15x − 4x − 10 = 6x² + 11x − 10 ✓</p>
    </section>

    <section>
        <h2>Estrategia de factorización</h2>
        <p>Para decidir qué caso aplicar, sigo estos pasos en orden:</p>
        <ol>
            <li><strong>Factor común.</strong> Reviso si todos los términos
            comparten un factor. Si es así, lo extraigo primero (Factorización I).</li>
            <li><strong>Cuento los términos</strong> de lo que queda:
                <ul>
                    <li><strong>2 términos:</strong> si son cuadrados perfectos
                    con signo menos, es diferencia de cuadrados (Factorización I).
                    Si son cubos perfectos, es suma de cubos (signo +) o
                    diferencia de cubos (signo −).</li>
                    <li><strong>3 términos:</strong> si el primero y el último
                    son cuadrados perfectos y el central es el doble producto de
                    sus raíces, es trinomio cuadrado perfecto (Factorización I).
                    Si no, y el coeficiente de x² es 1, uso x² + bx + c. Si ese
                    coeficiente es distinto de 1, uso el aspa simple.</li>
                    <li><strong>4 o más términos:</strong> intento factorizar
                    por agrupación (Factorización I).</li>
                </ul>
            </li>
            <li><strong>Reviso cada factor.</strong> Si alguno se puede
            factorizar más, repito la estrategia hasta que ya no se pueda.</li>
            <li><strong>Compruebo</strong> multiplicando los factores: debo
            obtener la expresión original.</li>
        </ol>
    </section>

    <p><a href="index.html">← Volver al inicio</a></p>
</main>
</body>
</html>`