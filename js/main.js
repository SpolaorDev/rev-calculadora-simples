function calculate(operator) {
    // Obter os valores dos campos
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    // Realizar as operações fornecidas
    let result;
    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            if (input2 !== 0) {
                result = input1 / input2;
            } else {
                alert("Não é possível dividir por zero.");
                return;
            }
            break;
        default:
            alert("Operação inválida");
            return;
    }
    // Exibir o resultado no input type="number"=
    document.getElementById('display').value = result;
}