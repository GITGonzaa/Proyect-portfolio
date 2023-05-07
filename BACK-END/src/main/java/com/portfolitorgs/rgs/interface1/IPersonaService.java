/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portfolitorgs.rgs.interface1;

import com.portfolitorgs.rgs.entity.Persona;
import java.util.List;


/**
 *
 * @author Gonza
 */
public interface IPersonaService {
    //Traer una persona
    public List<Persona> getPersona() ;
    
    //Guardar un objeto de tipo persona
    public void savePersona(Persona persona) ;
    
    //Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id) ;
    
    //Buscar una persona por ID
    public Persona findPersona(Long id) ;

    
    
}
