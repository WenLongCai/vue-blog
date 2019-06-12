<template>
  <div id="home">
    <el-row v-for="item in 10" v-bind:key="item">
      <div class="grid-content bg-purple-dark">
        <div class="post-holder">
          <div class="post-block mb30 ">
            <div class="bg-white">
              <h1><a href="blog-single.html" class="title"> {{item}} == How to get a scholarship</a></h1>
              <p class="meta"><span class="meta-date">Jan 28, 2017</span><span class="meta-author">By<a href="#" class="meta-link"> Admin</a></span><span class="meta-comments">05<a href="#" class="meta-link"> Comments</a> </span></p>
              <p class="article-content">Amet consectetur psum dolor sit adipiscing elitras molestie nunceu urna mattis vitae scelerisque nunceu urna mattis vitaefelis viverra ullam eulorem bibendum nislvel malesuadat amet consectetur adipiscing elitras molestie. </p>
              <a href="blog-single.html" class="btn-link">Read More</a> </div>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
#home {
  height: 100%;
}
  .el-row {
    padding: 16px;
  }
  a {
    color: #3c4d6b;
    transition: all 0.3s ease-in-out;
    text-decoration-line: none;
  }
.meta-link {
  color: #a4a7ac;
}
.post-holder { border-bottom: 1px solid #e8eaec; margin-bottom: 29px; }
.post-header { border-bottom: 1px solid #dee4ee; margin-bottom: 20px; padding-bottom: 19px; }
.post-block { }
.post-img { }
.meta { font-size: 12px; text-transform: uppercase; font-weight: 600; color: #a4a7ac; margin-bottom: 14px; margin-top: 14px; }
.meta span { margin-right: 0px; }
.meta span:after { margin-left: 15px; margin-right: 15px; color: #b0b0b0; content: "|"; }
.meta span:last-child:after { margin-left: 0px; margin-right: 0px; content: ""; }
.btn-link { color: #15549a; font-weight: 500; padding-bottom: 4px; border-bottom: 2px solid #15549a; display: inline-block; border-radius: 0; }
.btn-link:hover { color: #f51f8a; font-weight: 500; padding-bottom: 4px; border-bottom: 2px solid #f51f8a; text-decoration: none; }
.article-content {
  font-size: 20px;
  line-height: 1.4;
}
</style>
