package com.amichi.dao;

import java.util.ArrayList;
import java.util.List;

import com.amichi.modelo.Articulo;

public class ArticuloDAO {

    // La base de datos es esta lista estatica
    private static List<Articulo> listaArticulos = new ArrayList<>();

    // Inicializa la lista con datos de prueba
    public ArticuloDAO() {
        if (listaArticulos.isEmpty()) {
            listaArticulos.add(new Articulo("Silla de Ruedas", 12000.00));
            listaArticulos.add(new Articulo("Baston Plegable", 20000.00));
        }
    }

    // CREATE (Guardar)
    public void guardar(Articulo articulo) {
        listaArticulos.add(articulo);
    }

    // READ ALL (Leer todo)
    public List<Articulo> listarTodos() {
        return listaArticulos;
    }

    // READ ONE (busca por ID)
    public Articulo buscarPorId(int id) {
        // Sintaxis correcta del bucle for-each y la condición if
        for (Articulo a : listaArticulos) {
            if (a.getId() == id) {
                return a;
            }
        }
        return null;
    }

    // UPDATE
    public boolean actualizar(Articulo articuloActualizado) {
        Articulo existente = buscarPorId(articuloActualizado.getId());

        // Sintaxis correcta del if (con paréntesis)
        if (existente != null) {
            existente.setNombre(articuloActualizado.getNombre());
            existente.setPrecio(articuloActualizado.getPrecio());
            return true;
        }
        return false;
    }

    // DELETE (Borrar)
    public boolean eliminar(int id) {
        // Uso de getId() y punto y coma final (;)
        return listaArticulos.removeIf(a -> a.getId() == id);
    }

    // Métodos extras (Getters/Setters para la lista)
    public static List<Articulo> getListaArticulos() {
        return listaArticulos;
    }

    public static void setListaArticulos(List<Articulo> listaArticulos) {
        ArticuloDAO.listaArticulos = listaArticulos;
    }
}