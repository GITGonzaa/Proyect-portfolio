/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portfolitorgs.rgs.Security.Service;

import com.portfolitorgs.rgs.Security.Entity.Usuario;
import com.portfolitorgs.rgs.Security.Repository.iUsuarioRepository;
import jakarta.transaction.Transactional;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    iUsuarioRepository iusuarioRepository;

    public Optional<Usuario> getByNombreUsuario(String nombreUsuario) {
        return iusuarioRepository.findByNombreUsuario(nombreUsuario);
    }

    public boolean existsByNombreUsuario(String nombreUsuario) {
        return iusuarioRepository.existsByNombreUsuario(nombreUsuario);

    }

    public boolean existsByEmail(String nombreUsuario) {

        return iusuarioRepository.existsByEmail(nombreUsuario);
    }
    public void save(Usuario usuario){
        iusuarioRepository.save(usuario);
    }
}
