import java.util.Scanner;

public class Ejercicio1 {

    public static void main(String[] args) {

        System.out.println("Hola mundo!!");

        Scanner sc = new Scanner(System.in);

        System.out.println("Ingresa tu nombre:");
        String nombre = sc.nextLine();

        System.out.println("Ingresa tu edad:");
        int edad = sc.nextInt();

        System.out.println("Ingresa tu altura : ");
        double altura = sc.nextDouble();

        System.out.println("Mi nombre es: " + nombre);
        System.out.println("Y mi edad es: " + edad);
        System.out.println("Mi altura es: " + altura);

        sc.close();
    }
}