import java.util.Scanner;

public class Ejercicio2 {
    /*
     * Objetivo: Pedirle al usuario la base y la altura de un
     * rectángulo y calcular su área.
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingresa la base : ");
        float base = sc.nextFloat();
        System.out.println("Ingresa la altura: ");
        float altura = sc.nextFloat();
        Float area = base * altura;
        System.out.println("El area del rectangulo es de : " + area);
        sc.close();
        /* En este caso , esta declarado por float para ocupar menos espacio */

    }

}
