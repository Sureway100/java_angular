package com.javangular.employee_mgt_sys.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.javangular.employee_mgt_sys.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    Employee getByName(String name);

    Employee findByName(String name);
}