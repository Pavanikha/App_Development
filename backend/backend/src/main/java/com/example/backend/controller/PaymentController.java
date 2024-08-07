package com.example.backend.controller;

import com.example.backend.model.Payment;
import com.example.backend.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/submit2")
    public Payment submitPayment(@RequestBody Payment paymentModel) {
        return paymentService.savePayment(paymentModel);
    }

    @GetMapping("/all")
    public List<Payment> getAllPayments() {

        return paymentService.getAllPayments();
    }

    @PutMapping("/all/{id}")
    public Payment updatePayment(@PathVariable Long id, @RequestBody Payment paymentModel) {
        return paymentService.updatePayment(id, paymentModel);
    }

    @DeleteMapping("/all/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }
}