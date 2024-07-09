function calculateNetSalary() {
    // Prompt user for input
    let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    let benefits = parseFloat(prompt("Enter Benefits:"));

    // Check if inputs are valid numbers
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Error: Please enter valid numbers for Basic Salary and Benefits.");
        return;
    }

    // Constants for tax rates and deductions
    const NHIF_RATE = 1700; 
    const NSSF_RATE = 200;  

    // Fetch current tax rates and thresholds from KRA (hypothetical example, not actual code to fetch)
    const TAX_RATES = [
        { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32.5},
        { min: 800001, max: Infinity, rate: 35 }
    ];

    // Hypothetical personal relief
    const PERSONAL_RELIEF = 2400;

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate taxable income
    let taxableIncome = grossSalary - PERSONAL_RELIEF;

    // Calculate PAYE
    let paye = 0;
    for (let i = 0; i < TAX_RATES.length; i++) {
        if (taxableIncome > TAX_RATES[i].min) {
            let taxableAmount = Math.min(taxableIncome - TAX_RATES[i].min, TAX_RATES[i].max - TAX_RATES[i].min);
            paye += taxableAmount * (TAX_RATES[i].rate / 100);
        } else {
            break;
        }
    }

    // Calculate NHIF and NSSF deductions
    let nhifDeduction = NHIF_RATE;
    let nssfDeduction = NSSF_RATE;

    // Calculate net salary
    let netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

    // Output results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
}

// Example usage:
calculateNetSalary();