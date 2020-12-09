package com.example.demo.controller;

import com.example.demo.repository.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;

import java.util.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
    
    @Autowired
    private OrderRepository orderRepository;

    //Get all orders
    @GetMapping("/orders")
    public List<Order> getAllOrders()
    {
        return orderRepository.findAll();
    }

    //Create order rest api
    @PostMapping("/orders")
    public Order createOrder(@RequestBody Order order)
    {
        return orderRepository.save(order);
    }
}
