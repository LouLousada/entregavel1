import java.util.Scanner;

public class MDC {
  Scanner prompt = new Scanner(System.in);

 public void MDC() {
        System.out.println("\n*Máximo Divisor Comum*: ");
        System.out.print("Digite o primeiro número: ");
        int num1 = prompt.nextInt();
        System.out.print("Digite o segundo número: ");
        int num2 = prompt.nextInt();
        int mdc = calcularMDC(num1, num2);
        System.out.println("O Máximo Divisor Comum (MDC) entre " + num1 + " e " + num2 + " é " + mdc);
    }
    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}