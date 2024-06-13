package com.javangular.registration.customerService;

import java.util.List;

import com.javangular.registration.customerDto.CustomerDTO;
import com.javangular.registration.customerDto.CustomerSaveDTO;
import com.javangular.registration.customerDto.CustomerUpdateDTO;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}