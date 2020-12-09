package com.example.demo.model;

import java.util.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime; 


@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ID;

    @Column(name = "# of Pepperoni")
    private int Pepperoni;

    @Column(name = "# of Cheese")
    private int Cheese;

    @Column(name = "Date")
    private Date date;

    public Order()
    {
        
    }

    public Order(int pepperoni, int cheese, Date date) {
        Pepperoni = pepperoni;
        Cheese = cheese; 
        this.date = new Date(); 
    }

    public long getID() {
        return ID;
    }

    public void setID(long iD) {
        ID = iD;
    }

    public int getPepperoni() {
        return Pepperoni;
    }

    public void setPepperoni(int pepperoni) {
        Pepperoni = pepperoni;
    }

    public int getCheese() {
        return Cheese;
    }

    public void setCheese(int cheese) {
        Cheese = cheese;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
