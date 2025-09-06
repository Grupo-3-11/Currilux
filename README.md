Currilux: O seu Criador de Currículos Inteligente
Bem-vindo ao Currilux! Este é um projeto para criar um site onde qualquer pessoa pode montar um currículo de forma fácil e rápida, com a ajuda de inteligência artificial.

A ideia é ter uma página única e interativa, onde tudo acontece na mesma tela.

✨ O que ele faz de especial?
Tela Dividida: De um lado, você preenche as suas informações. Do outro, vê o seu currículo a ganhar forma na mesma hora!

Tudo em Tempo Real: Digitou o seu nome? Ele aparece imediatamente na pré-visualização. Sem precisar de carregar a página.

Código Organizado: O projeto foi construído em pequenas partes que se encaixam, como peças de LEGO. Isso torna a manutenção e a adição de novas funcionalidades muito mais fáceis.

🛠️ Como ele funciona por dentro?
Todo o código principal está no ficheiro src/App.tsx. Ele organiza tudo e funciona assim:

O "Cérebro" da Aplicação (useCVData): É aqui que todas as informações do currículo (nome, experiências, etc.) ficam guardadas. Também é aqui que estão as ferramentas para alterar essas informações.

As Caixas de Formulário (FormSection): São os campos onde você digita os seus dados. Quando você escreve algo, eles avisam o "cérebro" para guardar a nova informação.

A Pré-visualização (PreviewSection): Esta parte só tem uma função: mostrar as informações que estão guardadas no "cérebro" de uma forma bonita e organizada.

🚀 Ferramentas Utilizadas
Base do Site: React 18

Linguagem: TypeScript

Estrutura do Projeto: Vite

Estilo e Design: Tailwind CSS

Ícones: Lucide React

⚙️ Como experimentar na sua máquina
Quer testar o projeto? Siga estes passos:

Faça o download (clone) do projeto:

git clone [https://github.com/Grupo-3-11/Currilux.git](https://github.com/Grupo-3-11/Currilux.git)

Entre na pasta que foi criada:

cd Currilux

Instale as ferramentas necessárias:

npm install

Ligue o motor!

npm run dev

Depois disso, o site estará a funcionar no endereço http://localhost:5173.
