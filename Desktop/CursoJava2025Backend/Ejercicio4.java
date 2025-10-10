import java.util.Scanner;

public class Ejercicio4 {
    public static void main(String[] args) {
        /* Clasificador de numeros */
        Scanner sc = new Scanner(System.in);

        System.out.println("Ingrese un numero entero: ");
        int numero = sc.nextInt();

        if (numero > 0) {
            System.out.println("El numero es positivo.");
        } else if (numero < 0) {
            System.out.println("El numero es negativo. ");
        } else {
            System.out.println("El numero es cero: ");
        }
        sc.close();

    }
}
