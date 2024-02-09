

package com.party.atchaya.Service;

import com.party.atchaya.dto.request.LoginRequest;
import com.party.atchaya.dto.request.RegisterRequest;
import com.party.atchaya.dto.response.LoginResponse;
import com.party.atchaya.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}
