package com.party.atchaya.config;


import static com.party.atchaya.Enum.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.party.atchaya.Models.User;
import com.party.atchaya.Repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Component
@RequiredArgsConstructor
// @SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count()>0)
        return;
        var user=User.builder()
            .name("ATCHAYA_S")
            .email("atchayaachu@gmail.com")
            .password(passwordEncoder.encode("atchaya@123"))
            .role(ADMIN)
            .build();
        userRepository.save(user);

    }

}