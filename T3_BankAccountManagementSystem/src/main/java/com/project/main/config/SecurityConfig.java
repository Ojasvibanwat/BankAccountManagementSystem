package com.project.main.config;
<<<<<<< HEAD
=======

>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

<<<<<<< HEAD
//This Class is to authenticate,authorize the Mappings according to Roles using Spring Security. 
=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
<<<<<<< HEAD
		http.cors().and().csrf().disable();
=======
		http.csrf().disable();
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	}
}