import java.util.Scanner;

public class Fibonacci {
  int n, a = 0, b = 1, i = 2;

    Scanner prompt = new Scanner(System.in);
      public void Fibonacci() {
        System.out.println("numero de termos: ");
        int n = prompt.nextInt();
         while (i<n) {
           System.out.print(a + " " + b + " ");
           a = a + b;
           b = a + b; 
           i = i + 2;
         }
        if (i == n)
          System.out.println(a + "," + b + ",");
        else
          System.out.println(a);
       }
      }