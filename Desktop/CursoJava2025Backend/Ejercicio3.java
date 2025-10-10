import java.util.Scanner;

public class Ejercicio3 {
    /* Convertir una temperatura de grados Celsius a Fahrenheit. */
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese temperatura en grados Celcius: ");
        Double Celcius = sc.nextDouble();

        Double Fahrenheit = (Celcius * 9 / 5) + 32;

        System.out.println("La temperatura Fahrenheit es: " + Fahrenheit);
        sc.close();

    }
}
