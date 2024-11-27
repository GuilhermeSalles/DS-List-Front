
# DS-List Frontend 🕹️
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/GuilhermeSalles/DS-List-Front/blob/main/LICENSE)
> Interface web desenvolvida para gerenciar e visualizar uma lista de jogos, com integração completa ao backend da aplicação [DS-List Backend](https://github.com/GuilhermeSalles/DSList).

## 🖼️ Demonstração

![Página Inicial](https://github.com/GuilhermeSalles/assets/blob/main/dslist-front.png)

![Página Jogo](https://github.com/GuilhermeSalles/assets/blob/main/dslist-front2.png)

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: React.js
- **Bibliotecas**:
  - Axios (para comunicação com a API)
  - React Router Dom (para navegação)
- **Backend**: API Spring Boot ([DS-List Backend](https://github.com/GuilhermeSalles/DSList))
- **Hospedagem**:
  - Frontend: [Railway](https://ds-list-front-production.up.railway.app/)
  - Backend: [Railway](https://dslist-production-1f5c.up.railway.app/)

---

## 📂 Estrutura do Projeto

```
DS-List-Front
├── src
│   ├── components      # Componentes reutilizáveis
│   ├── pages           # Páginas do site (ex.: GameDetails e GameList)
│   ├── services        # Configuração de API (Axios)
│   ├── App.js          # Roteamento principal
│   ├── index.js        # Ponto de entrada da aplicação
├── public
│   ├── index.html      # Estrutura HTML principal
├── README.md           # Documentação do projeto
└── package.json        # Configurações e dependências do projeto
```

---

## 🛠️ Funcionalidades

### ✅ Lista de Jogos com Categorias
- Navegação entre diferentes categorias.
- Drag & Drop funcional para reorganizar a lista.

{**Sugestão de imagem: Lista de jogos com categorias selecionáveis.**}

### ✅ Página de Detalhes de um Jogo
- Exibição de detalhes como:
  - Gênero
  - Plataformas
  - Descrição
  - Avaliação com estrelas.

{**Sugestão de imagem: Página de detalhes de um jogo com avaliação e estrelas.**}

### ✅ Responsividade
- Layout otimizado para diferentes dispositivos.

---

## 🌐 Hospedagem e Acesso

- **Frontend**: [Acesse aqui](https://ds-list-front-production.up.railway.app)
- **Backend**: [Acesse aqui](https://dslist-production-1f5c.up.railway.app)

---

## ⚙️ Configuração Local

### Pré-requisitos
- Node.js
- Gerenciador de pacotes NPM ou Yarn

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/GuilhermeSalles/DS-List-Front.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```
   http://localhost:3000
   ```

---

## 🔗 Integração com o Backend

Este projeto consome a API do backend hospedado no Railway:

- **Repositório do backend**: [DS-List Backend](https://github.com/GuilhermeSalles/DSList)
- **URL da API**:
  ```
  https://dslist-production-1f5c.up.railway.app
  ```

Para integração local, altere a baseURL no arquivo `services/api.js`:
```javascript
const api = axios.create({
  baseURL: 'http://localhost:8080',
});
```

---

## ✨ Melhorias Futuras

- Melhorar a performance do Drag & Drop.
- Adicionar sistema de login para personalização da lista.
- Permitir avaliações e comentários pelos usuários.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

## 🖼️ Imagens do Projeto

1. Página Inicial com Lista de Jogos
   ![Página Inicial com Lista de Jogos](https://github.com/GuilhermeSalles/assets/blob/main/dslist-front.png)
   
2. Drag & Drop em ação
   ![Drag & Drop em ação](https://github.com/GuilhermeSalles/assets/blob/main/gifdslist.gif)
   
3. Detalhes de um Jogo
   ![Detalhes de um Jogo](https://github.com/GuilhermeSalles/assets/blob/main/dslist-front3.png)

---

## 📖 Autor

Guilherme Baltazar Vericimo de Sales

<a href="https://www.linkedin.com/in/guilhermebaltazar-v/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href="https://instagram.com/yguilhermeb" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
