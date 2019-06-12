<template>
  <div id="app">
    <mavon-editor :ishljs = "true" v-model="value" :codeStyle="'atom-one-dark'"></mavon-editor>
  </div>
</template>

<script>
let code = `
\`\`\`js
export default {
  name: 'MarkdownEditor',
  data: function () {
    return {
      value: ''
    }
  }
}
\`\`\`
`
export default {
  name: 'MarkdownEditor',
  data: function () {
    return {
      value: code
    }
  }
}
</script>
