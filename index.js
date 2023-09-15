const readline = require('readline')

function calculateTriangularNumber(N) {
  if (N === 1) {
    return 1
  } else {
    return N + calculateTriangularNumber(N - 1)
  }
}

function drawEquivalentTriangle(N, level) {
  if (N === 0) {
    return
  }
  // Imprime espaços em branco para alinhar corretamente o triângulo
  for (let i = 0; i < level; i++) {
    process.stdout.write(' ')
  }
  // Imprime os pontos na linha atual
  for (let i = 0; i < N; i++) {
    process.stdout.write('* ')
  }
  console.log() // Pula para a próxima linha
  
  // Chama a função recursivamente para a próxima linha do triângulo
  drawEquivalentTriangle(N - 1, level + 1)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Digite um número natural N:  ', (N) => {
  N = parseInt(N)
  if (N <= 0) {
    console.log('Por favor, insira um número natural válido.')
  } else {
    const triangularNumber = calculateTriangularNumber(N)
    console.log(`O ${N}-ésimo número triangular é: ${triangularNumber}`)
    console.log(`Triângulo equivalente:`)
    drawEquivalentTriangle(triangularNumber, 0)
  }
  rl.close()
})
