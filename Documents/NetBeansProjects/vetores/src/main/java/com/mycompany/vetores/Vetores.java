/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.vetores;

import java.util.Locale;
import java.util.Scanner;

public class Vetores {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        double[] vect = new double[n];

        for (int i = 0; i < n; i++) { //preencher o vetor
            vect[i] = sc.nextDouble();
        }

        double sum = 0.0;
        for (int i = 0; i < n; i++) { //preencher para realizar a soma
            sum += vect[i];
        }

        double avg = sum / n; //realizar a media
        System.out.printf("Average: %.2f\n", avg);

        sc.close();
    }
}
