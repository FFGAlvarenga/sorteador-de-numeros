# 🎲 Sorteador de Números

Um projeto simples e funcional de sorteio de números aleatórios, desenvolvido em **HTML**, **CSS** e **JavaScript** — sem frameworks externos.

🔗 **Versão online:** [https://sorteador-de-numeros-kohl.vercel.app](https://sorteador-de-numeros-kohl.vercel.app)

---
## ✨ Funcionalidades

- Permite sortear uma quantidade específica de números aleatórios.
- Define um intervalo personalizável (`de` até `até`).
- Garante que os números sorteados sejam **únicos** (sem repetições).
- Validações para evitar uso incorreto:
  - O número inicial (`de`) deve ser menor que o número final (`até`).
  - A quantidade de números sorteados não pode ser maior que o total de números disponíveis no intervalo.
- Botão de **reiniciar** para limpar todos os campos e começar de novo.

---
## 🧠 Como funciona a lógica

1. Ler valores: quantidade, limite inicial (`de`) e limite final (`até`).
2. Verificar se `de < até`. Se não for, alertar o usuário e reiniciar.
3. Verificar se a quantidade desejada de números únicos cabe dentro do intervalo. Se não, alertar e reiniciar.
4. Sortear números aleatórios:
   - Gerar um número entre `de` e `até`.
   - Se já existe no array de sorteados, gerar outro (até conseguir um exclusivo).
   - Armazenar no array.
5. Mostrar os números resultantes (separados por vírgula).
6. O botão de reiniciar limpa os campos e reseta a interface.
   
---
## 🖥️ Tecnologias utilizadas

- HTML  
- CSS 
- JavaScript

---
## 🚀 Hospedagem

Projeto hospedado gratuitamente no Vercel.  
Visite: [https://sorteador-de-numeros-kohl.vercel.app](https://sorteador-de-numeros-kohl.vercel.app)

---
## 👤 Autor

Desenvolvido por **Francisco Alvarenga**.

Contribuições são bem-vindas! 🔧 Sinta-se à vontade para abrir **issues** ou **pull requests**.

---
