package com.melihcanclk.employeemanagementsystem.service.abstracts;

import com.melihcanclk.employeemanagementsystem.entity.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    Employee save(Employee employee);
    Optional<Employee> getEmployeeById(Long id);
    List<Employee> getAllEmployees();
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployeeById(Long id);
}
