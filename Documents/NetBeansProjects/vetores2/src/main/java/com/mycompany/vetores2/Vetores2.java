/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.vetores2;

import java.util.Locale;
import java.util.Scanner;
import entities.Program;

/**
 *
 * @author Pichau
 */
public class Vetores2 {

    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        Program[] vect = new Program[n];

        for (int i = 0; i < n; i++) {
            sc.nextLine(); // consome a quebra de linha pendente
            String name = sc.nextLine();
            double price = sc.nextDouble();
            vect[i] = new Program(name, price);
        }

        double sum = 0.0;
        for (int i = 0; i < n; i++) {
            sum += vect[i].getPrice();
        }

        double avg = sum / n;

        System.out.printf("Average price: %.2f%n", avg);

        sc.close();
    }
}
