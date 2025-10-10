package com.amichi.main;

import com.amichi.dao.ArticuloDAO; // IMPORTACIÓN CLAVE 1
import com.amichi.modelo.Articulo; // IMPORTACIÓN CLAVE 2
import java.util.Scanner;
import java.util.List;

public class Main {

    private static ArticuloDAO dao = new ArticuloDAO();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int opcion;

        do {
            mostrarMenu();
            opcion = leerEntero("Seleccione una opción: ");

            switch (opcion) {
                case 1:
                    crearArticulo();
                    break;
                case 2:
                    listarArticulos();
                    break;
                case 3:
                    modificarArticulo();
                    break;
                case 4:
                    eliminarArticulo();
                    break;
                case 5:
                    System.out.println("Saliendo del programa. ¡Adiós!");
                    break;
                default:
                    System.out.println("Opción no válida. Intente de nuevo.");
            }
        } while (opcion != 5);
        scanner.close();
    }

    // --- MÉTODOS DE SOPORTE ---
    private static void mostrarMenu() {
        System.out.println("\n--- CRUD DE ARTÍCULOS ---");
        System.out.println("1. Crear Artículo");
        System.out.println("2. Listar Artículos");
        System.out.println("3. Modificar Artículo");
        System.out.println("4. Eliminar Artículo");
        System.out.println("5. Salir");
    }

    private static String leerTexto(String mensaje) {
        System.out.print(mensaje);
        scanner.nextLine();
        String texto = scanner.nextLine();
        return texto;
    }

    private static int leerEntero(String mensaje) {
        System.out.print(mensaje);
        while (!scanner.hasNextInt()) {
            System.out.println("Entrada inválida. Ingrese un número entero.");
            scanner.next();
            System.out.print(mensaje);
        }
        int numero = scanner.nextInt();
        return numero;
    }

    private static double leerDouble(String mensaje) {
        System.out.print(mensaje);
        while (!scanner.hasNextDouble()) {
            System.out.println("Entrada inválida. Ingrese un número decimal (ej: 1500.50).");
            scanner.next();
            System.out.print(mensaje);
        }
        double numero = scanner.nextDouble();
        return numero;
    }

    // --- OPERACIONES DEL CRUD ---

    private static void crearArticulo() {
        System.out.println("\n-- CREAR ARTÍCULO --");
        String nombre = leerTexto("Ingrese el nombre: ");
        double precio = leerDouble("Ingrese el precio: ");

        Articulo nuevo = new Articulo(nombre, precio);
        dao.guardar(nuevo);
        System.out.println("Artículo creado con éxito. ID: " + nuevo.getId());
    }

    private static void listarArticulos() {
        System.out.println("\n-- LISTADO DE ARTÍCULOS --");
        List<Articulo> lista = dao.listarTodos();
        if (lista.isEmpty()) {
            System.out.println("No hay artículos en el sistema.");
        } else {
            lista.forEach(System.out::println);
        }
    }

    private static void modificarArticulo() {
        System.out.println("\n-- MODIFICAR ARTÍCULO --");
        int id = leerEntero("Ingrese el ID del artículo a modificar: ");

        Articulo existente = dao.buscarPorId(id);

        if (existente != null) {
            System.out.println("Artículo actual: " + existente);

            String nuevoNombre = leerTexto("Ingrese el NUEVO nombre: ");
            double nuevoPrecio = leerDouble("Ingrese el NUEVO precio: ");

            Articulo articuloActualizado = new Articulo(id, nuevoNombre, nuevoPrecio);

            if (dao.actualizar(articuloActualizado)) {
                System.out.println("✅ Modificación realizada con éxito.");
            }
        } else {
            System.out.println("❌ Error: No se encontró el artículo con ID " + id);
        }
    }

    private static void eliminarArticulo() {
        System.out.println("\n-- ELIMINAR ARTÍCULO --");
        int id = leerEntero("Ingrese el ID del artículo a eliminar: ");

        if (dao.eliminar(id)) {
            System.out.println("✅ Artículo ID " + id + " eliminado con éxito.");
        } else {
            System.out.println("❌ Error: No se encontró el artículo con ID " + id + " para eliminar.");
        }
    }
}