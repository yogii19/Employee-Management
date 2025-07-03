package com.example.Employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.Employee.model.Employee;
import com.example.Employee.repository.EmployeeRepository;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	@Autowired
	 private EmployeeRepository employeerepository;
	@GetMapping("/getemp")
	List<Employee> getAllEmployee(){
		return employeerepository.findAll();
		}
	
	@GetMapping("/getemp/{id}")
	Employee getEmployeeById(@PathVariable Long id) {
		return employeerepository.findById(id).get();
	}
	
	@PostMapping("/addemp")
	String  create(@RequestBody Employee emp) {
		employeerepository.save(emp);
		return "Employee Added Successfult";
	}
	
	@DeleteMapping("/deleteemp/{id}")
    String deleteById(@PathVariable long id) {
		employeerepository.deleteById(id);
		return null;
	}
	
	@PutMapping("/editemp/{id}")
	String updateEmployee(@RequestBody Employee employee, @PathVariable Long id) {
		Employee e = employeerepository.findById(id).get();
		e.setName(employee.getName());
		e.setDept(employee.getDept());
	    employeerepository.save(e);
		return ("Employee edited successfully");
	}

}
