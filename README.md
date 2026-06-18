# Mini Sistema Web de Estoque

Projeto didático desenvolvido com **HTML, CSS, JavaScript e API simulada** para demonstrar um sistema funcional de gerenciamento de estoque.

## 📋 Descrição

Um sistema web responsivo que permite:
- ✅ Cadastrar, editar e excluir produtos
- ✅ Visualizar resumo dinâmico do estoque
- ✅ Buscar produtos por nome, categoria ou status
- ✅ Persistência de dados com `localStorage`
- ✅ Interface profissional e intuitiva

## 🎯 Características

### Dashboard
- **Produtos cadastrados**: Total de itens no estoque
- **Valor total em estoque**: Soma de (preço × quantidade)
- **Itens com baixo estoque**: Produtos marcados como "Baixo estoque" ou quantidade ≤ 3

### Formulário de Cadastro
Campos disponíveis:
- Nome do produto (obrigatório)
- Categoria (Informática, Material Escolar, Impressão 3D, Outros)
- Quantidade
- Preço unitário
- Status (Disponível, Baixo estoque, Esgotado)

### Tabela de Produtos
- Listagem completa de todos os produtos
- Busca em tempo real
- Botões para editar ou excluir
- Ordenação clara por colunas

## 🚀 Como Usar

1. **Abrir no navegador**
   Abra o arquivo index.html em seu navegador

   2. **Cadastrar um produto**
      - Preencha os campos do formulário
         - Clique em "Cadastrar"
            - O produto aparecerá na tabela

            3. **Editar um produto**
               - Clique em "Editar" na tabela
                  - Modifique os dados
                     - Clique em "Atualizar"

                     4. **Buscar produtos**
                        - Digite na caixa "Buscar produto"
                           - A busca filtra por nome, categoria ou status

                           5. **Limpar dados**
                              - Clique "Limpar" para resetar o formulário
                                 - Clique "Apagar tudo" para remover todos os produtos

                                 ## 💾 Armazenamento

                                 Os dados são armazenados no **localStorage** do navegador:
                                 - Chave: `produtos_senac`
                                 - Os dados persistem até que sejam manualmente limpos

                                 ## 🛠️ Tecnologias

                                 - **HTML5** - Estrutura semântica
                                 - **CSS3** - Design responsivo com Grid/Flexbox
                                 - **JavaScript Vanilla** - Manipulação do DOM e lógica
                                 - **localStorage** - Persistência de dados

                                 ## 📁 Estrutura de Arquivos

                                 ```
                                 Sistema WEB/
                                 ├── index.html      # Estrutura HTML
                                 ├── script.js       # Lógica JavaScript
                                 ├── style.css       # Estilos CSS
                                 └── README.md       # Este arquivo
                                 ```

                                 ## 🎨 Design

                                 - Interface limpa e profissional
                                 - Responsiva em dispositivos móveis e desktop
                                 - Cores azuis como tema principal
                                 - Cards com sombras sutis
                                 - Botões intuitivos com cores distintas (editar em laranja, excluir em vermelho)

                                 ## 📚 Projeto Didático

                                 Este projeto foi desenvolvido como material de aula para:
                                 - Ensinar conceitos de DOM manipulation
                                 - Demonstrar uso de `localStorage`
                                 - Praticar manipulação de eventos JavaScript
                                 - Implementar CRUD básico
                                 - Praticar CSS responsivo

                                 ## ✨ Funcionalidades Avançadas

                                 - ✅ Validação de formulário com alertas
                                 - ✅ Confirmação antes de excluir produtos
                                 - ✅ Atualização automática do resumo
                                 - ✅ Função de busca com múltiplos critérios
                                 - ✅ Formatação de moeda em português (BRL)

                                 ## 🔗 Links

                                 - **GitHub**: https://github.com/Emanuelleprestes/SistemaWeb
                                 - **Autor**: Emanuelle Prestes

                                 ## 📝 Licença

                                 Projeto criado para fins educacionais.

                                 ---

                                 **Desenvolvido com ❤️ para fins didáticos no SENAC**
