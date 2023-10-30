package com.melihcanclk.employeemanagementsystem.service.concretes;

import com.melihcanclk.employeemanagementsystem.entity.Employee;
import com.melihcanclk.employeemanagementsystem.repository.EmployeeRepository;
import com.melihcanclk.employeemanagementsystem.service.abstracts.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeManager implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    EmployeeManager(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee save(Employee employee) {
        // if same email exists, return null
        if (employeeRepository.findByEmail(employee.getEmail()).isEmpty()) {
            return employeeRepository.save(employee);
        }
        return null;
    }

    @Override
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> updateEmployeeOpt = employeeRepository.findById(id);
        if (updateEmployeeOpt.isPresent()) {
            Employee updateEmployee = updateEmployeeOpt.get();
            updateEmployee.setFirstName(employee.getFirstName());
            updateEmployee.setLastName(employee.getLastName());
            updateEmployee.setEmail(employee.getEmail());
            return employeeRepository.save(updateEmployee);
        } else {
            return null;
        }
    }

    @Override
    public void deleteEmployeeById(Long id) {
        employeeRepository.deleteById(id);
    }
}
