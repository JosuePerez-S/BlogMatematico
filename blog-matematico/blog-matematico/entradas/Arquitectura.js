contenidoEntrada = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Simulación MIPS en Java | Blog de Arquitectura</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
<main>
    <h1>Simulación de MIPS en Java: Operaciones Aritméticas</h1>
    <p>En esta entrada explico cómo simular el comportamiento de los registros temporales y las operaciones aritméticas básicas de la arquitectura MIPS (suma, resta, multiplicación y división) utilizando Java.</p>

    <section>
        <h2>Código Fuente en Java</h2>
        <h3>Estructura del Programa</h3>
        <p>Se definen variables enteras que simulan los registros temporales <code>t0</code> y <code>t1</code> para operar con la ALU en Java.</p>
        <h3>Código</h3>
        <pre><code>public class SumaRestaMIPS {
    public static void main(String[] args) {
        int t0 = 50;
        int t1 = 20;
        
        int t2 = t0 + t1;
        int t3 = t0 - t1;
        int t4 = t0 / t1;
        int t5 = t0 * t1;
        
        System.out.print("Resultado Suma: " + t2);
        System.out.print("\\nResultado Resta: " + t3);
        System.out.print("\\nResultado División: " + t4);
        System.out.print("\\nResultado Multiplicación: " + t5);
    }
}</code></pre>
    </section>

    <section>
        <h2>Desarrollo y Ejecución Paso a Paso</h2>
        <h3>Inicialización de Registros</h3>
        <p>Se asignan los valores 50 y 20 a las variables que simulan los registros <code>t0</code> y <code>t1</code>.</p>
        <h3>Operaciones Aritméticas</h3>
        <p><strong>Suma:</strong> <code>t2 = t0 + t1</code> ⇒ 50 + 20 = 70</p>
        <p><strong>Resta:</strong> <code>t3 = t0 - t1</code> ⇒ 50 - 20 = 30</p>
        <p><strong>División:</strong> <code>t4 = t0 / t1</code> ⇒ 50 / 20 = 2</p>
        <p><strong>Multiplicación:</strong> <code>t5 = t0 * t1</code> ⇒ 50 * 20 = 1000</p>
        <h3>Resultado en Consola</h3>
        <p>Resultado Suma: 70</p>
        <p>Resultado Resta: 30</p>
        <p>Resultado División: 2</p>
        <p>Resultado Multiplicación: 1000 ✓</p>
    </section>

    <p><a href="index.html">← Volver al inicio</a></p>
</main>
</body>
</html>`;