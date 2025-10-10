package com.amichi.modelo;

public class Articulo {

    private int id;
    private String nombre;
    private double precio;
    private static int contadorId = 1;

    // Constructor para crear un nuevo articulo

    public Articulo(String nombre, double precio) {

        this.id = contadorId++;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Constructor para actualizar cuando el Id ya existe)
    public Articulo(int id, String nombre, double precio) {

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    // Getters y Setters

    public int getId() {

        return id;

    }

    public String getNombre() {

        return nombre;
    }

    public double getPrecio() {

        return precio;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;

    }

    public double setPrecio() {

        return precio;
    }

    public void setPrecio(double precio) {

        this.precio = precio;
    }

    @Override
    public String toString() {

        return "ID: " + " |Nombre: " + nombre + "|Precio: $" + String.format("%.2f", precio);
    }

}