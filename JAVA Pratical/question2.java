public class Main {
    public static void main(String[] args) {
        int number = 12;
        int sum = 0;

        for (int i = 1; i <= number; i++) {
            if (number % i == 0) {
                sum += i;
            }
        }

        System.out.println("Sum of all factors of " + number + " = " + sum);
    }
}
