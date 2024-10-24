package com.example.back.service;

import java.util.List;
import com.example.back.model.Product;

public interface ProductService {
    Product save(Product product);

    Product updateById(Long id, Product product);

    List<Product> findAll();

    Product findById(Long id);

    void deleteById(Long id);
}
