# Guia Básico sobre Compiladores

## Introdução

Um **compilador** é um programa que traduz código escrito em uma linguagem de programação (como C, Python, etc.) para um formato que o computador possa entender (como código de máquina ou bytecode). Para fazer isso, o compilador passa por várias etapas. Duas dessas etapas importantes são o **analisador léxico** e o **analisador sintático**.

## Analisador Léxico: A Primeira Etapa

### O que é?

O **analisador léxico** é como um filtro que quebra o seu código em pequenas partes chamadas **tokens**. Pense nos tokens como as palavras de uma frase. Cada palavra tem um significado, e o analisador léxico ajuda o compilador a entender cada parte do seu código.

### Como Funciona?

1. **Entrada**: Recebe o código que você escreveu.
2. **Quebra**: Divide o código em pedaços menores (tokens). Por exemplo, no código `int x = 5;`, os tokens podem ser `int`, `x`, `=`, `5`, `;`.
3. **Classificação**: Cada token é classificado (por exemplo, `int` é uma palavra-chave, `x` é um identificador, `5` é um número).

### Exemplo Rápido

Se você escreve:

int x = 10;
O analisador léxico vai transformar isso em tokens como:

- `int` (tipo de dado)
- `x` (nome de uma variável)
- `=` (operador de atribuição)
- `10` (número)

## Analisador Sintático: A Segunda Etapa

### O que é?

Depois que o analisador léxico faz seu trabalho, entra o **analisador sintático**. Ele verifica se os tokens fazem sentido juntos, como um corretor de gramática para o seu código.

### Como Funciona?

- **Entrada**: Recebe os tokens gerados pelo analisador léxico.
- **Verificação**: Checa se esses tokens estão na ordem correta, seguindo as regras da linguagem de programação.
- **Árvore Sintática**: Cria uma estrutura em forma de árvore (chamada **árvore sintática**) que mostra como os tokens estão relacionados.

### Exemplo Rápido

Com os tokens `int`, `x`, `=`, `10`, `;`, o analisador sintático vai verificar se isso é uma instrução válida em C. Se você tivesse escrito `int = x 10;`, ele apontaria um erro porque a ordem dos tokens está errada.

## Resumindo

- **Analisador Léxico**: Quebra o código em pedaços menores (tokens).
- **Analisador Sintático**: Verifica se esses pedaços fazem sentido juntos e constrói uma estrutura lógica.

Essas duas etapas são como a base de uma casa. Se algo estiver errado aqui, o resto do processo de compilação pode falhar.

## Dica para Lembrar

Pense no **analisador léxico** como um scanner de palavras e no **analisador sintático** como um revisor de frases. Um não funciona bem sem o outro!
