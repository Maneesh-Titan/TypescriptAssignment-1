Advanced Example
Exercise 1: Abstract Class for Banking System

abstract class BankAccount {
    protected constructor(protected accountNumber: string, protected balance: number) {}
    deposit(amount: number): void {
        this.balance += amount;
    }
    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    private withdrawalLimit: number = 1000;

    withdraw(amount: number): boolean {
        if (amount <= this.withdrawalLimit && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
class CheckingAccount extends BankAccount {
    private overdraftLimit: number = 500;
    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
const savings = new SavingsAccount("SA123", 2000);
savings.deposit(500);
console.log(`Savings Account Balance: ${savings.getBalance()}`);
console.log(`Withdraw 1000: ${savings.withdraw(1000)}`);
console.log(`Savings Account Balance: ${savings.getBalance()}`);
const checking = new CheckingAccount("CA123", 1000);
checking.deposit(500);
console.log(`Checking Account Balance: ${checking.getBalance()}`);
console.log(`Withdraw 1200: ${checking.withdraw(1200)}`);
console.log(`Checking Account Balance: ${checking.getBalance()}`);

Exercise 2: Interface for Payment System

interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}
class CreditCard implements PaymentMethod {
    constructor(private balance: number) {}
    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Credit Card`);
        } else {
            console.log("Insufficient balance");
        }
    }
    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Credit Card`);
    }
}
class DebitCard implements PaymentMethod {
    constructor(private balance: number) {}
    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using Debit Card`);
        } else {
            console.log("Insufficient balance");
        }
    }
    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to Debit Card`);
    }
}
class UPI implements PaymentMethod {
    constructor(private balance: number) {}
    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using UPI`);
        } else {
            console.log("Insufficient balance");
        }
    }
    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI`);
    }
}
const creditCard = new CreditCard(1000);
creditCard.pay(200);
creditCard.refund(50);
const debitCard = new DebitCard(500);
debitCard.pay(100);
debitCard.refund(20);
const upi = new UPI(300);
upi.pay(150);
upi.refund(30);

Exercise 3: Combining Abstract Class and Interface

abstract class PaymentGateway {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount}`);
    }
    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount}`);
    }
    abstract validateTransaction(transactionId: string): boolean;
}
interface SecurePayment {
    authenticateUser(userId: string): boolean;
}
class PayPal extends PaymentGateway implements SecurePayment {
    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction ${transactionId}`);
        return true;
    }
    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user ${userId}`);
        return true;
    }
}
const payPal = new PayPal();
payPal.processPayment(100);
payPal.processRefund(50);
console.log(`Transaction valid: ${payPal.validateTransaction("TX123")}`);
console.log(`User authenticated: ${payPal.authenticateUser("User123")}`);

Exercise 4: Multiple Interface Implementation

interface Loan {
    applyForLoan(amount: number): void;
}
interface Insurance {
    applyForInsurance(policy: string): void;
}
class Customer implements Loan, Insurance {
    private loanDetails: { amount: number } | null = null;
    private insuranceDetails: { policy: string } | null = null;
    applyForLoan(amount: number): void {
        this.loanDetails = { amount };
        console.log(`Applied for loan of ${amount}`);
    }
    applyForInsurance(policy: string): void {
        this.insuranceDetails = { policy };
        console.log(`Applied for insurance policy ${policy}`);
    }
}
const customer = new Customer();
customer.applyForLoan(5000);
customer.applyForInsurance("Health Insurance");