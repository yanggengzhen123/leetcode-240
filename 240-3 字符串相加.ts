function addStrings(num1: string, num2: string): string {
    let n1 = num1.length - 1;
    let n2 = num2.length - 1;
    let sum: number = 0;
    let curr: number = 0;
    let res: number[] = [];
    // sum > 0 是要排除num1 + num2 = 10的这种情况
    while (n1 > -1 || n2 > -1 || sum > 0) {
        if (n1 > -1) {
            sum += +num1[n1--];
        }
        if (n2 > -1) {
            sum += +num2[n2--];
        }
        if (sum > 9) {
            sum = sum % 10;
            curr = 1;
        }
        res.push(sum);
        sum = curr;
        curr = 0;
    }
    return res.reverse().join("");
}
