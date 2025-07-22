package application;

import java.util.Locale;
import java.util.Scanner;
import com.mycompany.accountt.Accountt;

public class Program {

    public static void main(String[] args) {

        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        Accountt accountt;

        System.out.println("Enter account number:");
        int number = sc.nextInt();

        System.out.println("Enter account holder:");
        sc.nextLine(); // Limpa o buffer

        String holder = sc.nextLine();

        System.out.println("Is there an initial deposit? (y/n):");
        char response = sc.next().charAt(0);

        if (Character.toLowerCase(response) == 'y') {
            System.out.println("Enter initial deposit value:");
            double initialDeposit = sc.nextDouble();
            accountt = new Accountt(number, holder, initialDeposit);
        } else {
            accountt = new Accountt(number, holder);
        }

        System.out.println();
        System.out.println("Account Data:");
        System.out.println(accountt);

        System.out.println();
        System.out.println("Enter a deposit value:");
        double depositValue = sc.nextDouble();
        accountt.deposit(depositValue);

        System.out.println("Updated account data:");
        System.out.println(accountt);

        System.out.println();
        System.out.println("Enter a withdraw value:");
        double withdrawValue = sc.nextDouble();
        accountt.withdraw(withdrawValue);

        System.out.println("Updated account data:");
        System.out.println(accountt);

        sc.close();
    }
}
