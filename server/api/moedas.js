export default defineEventHandler((event) => {

  const moedas = [
    { id: 1, nome: "Bitcoin", sigla: "BTC", valor: 270000 },
    { id: 2, nome: "Ethereum", sigla: "ETH", valor: 15000 },
    { id: 3, nome: "Solana", sigla: "SOL", valor: 750 },
  ]

  return moedas
})
