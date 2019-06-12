<template>
  <div id="write-article">
    write article
    <MarkdownEditor></MarkdownEditor>
  </div>
</template>

<script>
import MarkdownEditor from '../markdown/MarkdownEditor'
export default {
  name: 'WriteArticle',
  components: {
    MarkdownEditor
  }
}
</script>
