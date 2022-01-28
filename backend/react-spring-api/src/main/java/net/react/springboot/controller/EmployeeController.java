package net.react.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.react.springboot.entity.Employee;
import net.react.springboot.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository eRepo;
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees() {
		return eRepo.findAll();
	}
	
	@PostMapping("/employees")
	public Employee saveEmployeeDetails(@RequestBody Employee employee) {
		return eRepo.save(employee);
	}
	
	
}
