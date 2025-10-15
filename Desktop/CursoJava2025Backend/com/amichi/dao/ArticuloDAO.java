package com.amichi.dao;

import java.util.ArrayList;
import java.util.List;

import com.amichi.modelo.Articulo;
import com.amichi.excepciones.ArticuloNoEncontradoException;

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
    // Archivo: ArticuloDAO.java

    // Update
    // 🚨 CAMBIO 3: Cambia 'boolean' a 'void'
    public void actualizar(Articulo articuloActualizado) {
        Articulo existente = buscarPorId(articuloActualizado.getId());

        if (existente != null) {
            existente.setNombre(articuloActualizado.getNombre());
            existente.setPrecio(articuloActualizado.getPrecio());
            // ¡Ya no hay 'return true' aquí!
        } else {
            // 🚨 CAMBIO 4: Si no existe, lanzamos la excepción
            throw new ArticuloNoEncontradoException(articuloActualizado.getId());
        }
        // ¡Ya no hay 'return false' aquí!
    }

    // DELETE (Borrar)
    public void eliminar(int id) {
        // removeIf devuelve true si se elimina algo, false si no encuentra el ID
        boolean eliminado = listaArticulos.removeIf(a -> a.getId() == id);
        // 🚨 CAMBIO 2: Si NO se eliminó, lanzamos la excepción
        if (!eliminado) {
            throw new ArticuloNoEncontradoException(id);
        }
    }

    // Métodos extras (Getters/Setters para la lista)
    public static List<Articulo> getListaArticulos() {
        return listaArticulos;
    }

    public static void setListaArticulos(List<Articulo> listaArticulos) {
        ArticuloDAO.listaArticulos = listaArticulos;
    }
}