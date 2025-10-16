## 🧩 Descrição de Uso
Após abrir a página, ative o bookmarklet clicando no favorito criado.  
O script detecta automaticamente o elemento que estiver sob o cursor do mouse e executa um clique a cada 20 segundos.  

### Passos:
1. Copie o código abaixo.  
2. Crie um novo favorito no navegador.  
3. No campo de URL do favorito, cole o código.  
4. Acesse o site onde deseja usar.  
5. Passe o mouse sobre o elemento que quer que seja clicado.  
6. O script clicará automaticamente nesse elemento a cada 20 segundos.  

### 📜 Código do Bookmarklet
```js
javascript:(function(){
  let target=null;
  document.addEventListener('mousemove',e=>target=e.target);
  setInterval(()=>{
    if(target && typeof target.click==='function') target.click();
  },20000);
})();
