/*Formatear y limpiar nombres de Menu:té CHAi -->Té Chai */
public class ejercicio5 {

    public static void main(String[] args) {

        String texto = "té CHAi";
        String[] palabras = texto.split("texto");
        StringBuilder resultado = new StringBuilder();
        // Recorro cada palabra y formateo
        for (String palabra : palabras) {

            if (palabra.length() > 0) {
                // convierto primera letra en mayuscula
                String primeraLetra = palabra.substring(0, 1).toUpperCase();

                // convierto el resto en minuscula
                String restoPalabra = palabra.substring(1).toLowerCase();

                // unir y agregar el resultado

                resultado.append(primeraLetra).append(restoPalabra).append("");
            }
        }
        String textoFormateado = resultado.toString().trim();
        System.out.println("Texto original: " + texto);
        System.out.println("Texto formateado: " + textoFormateado);
    }

}
