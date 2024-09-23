<template>
  <div id="shadow-container"></div>
</template>

<script>
export default {
  mounted() {
    // Tạo Shadow DOM cho phần tử chứa
    const shadowRoot = this.$el.attachShadow({ mode: 'open' });

    // Tạo nội dung bên trong Shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      .shadow-content {
        background-color: lightblue;
        color: white;
        padding: 20px;
      }
    `;
    
    const content = document.createElement('div');
    content.className = 'shadow-content';
    content.textContent = 'This content is inside the Shadow DOM!';

    // Thêm style và nội dung vào Shadow DOM
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(content);
  },
};
</script>
