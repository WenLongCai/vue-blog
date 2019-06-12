<template>
  <section class="article-detail col-md-9">
    <h2 class="hidden">Article</h2>
    <article class="double" id="article-1">
      <div class="post-meta">
        <div class="author">
          <a class="author-avatar" href="#author">
            <i class="el-icon-s-custom"></i>
            <span class="author-name">Masum Rana</span>
          </a>
        </div>
        <div class="">
          <i class="el-icon-time"></i>
          <time datetime="2014-12-02 10:00">Dec 2, 2015</time>
        </div>
        <div class="">
          <i class="el-icon-chat-line-round"></i> <label>34 Comments</label>
        </div>
        <div class="">
          <i class="el-icon-collection-tag"></i>
          <label>Music</label>
        </div>
      </div>
      <div class="content-wrapper">
        <h3 data-animate="lightSpeedIn" style="visibility: visible;" class="lightSpeedIn animated">A Large Heading Size
          Of The Image</h3>

        <div class="description">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
          <br>
          <p>Jeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.</p>
        </div>
        <div class="single-line">
          <div class="border-wrapper">
            end with
          </div>
        </div>
        <div class="related-posts">
          <h4>Related posts: -</h4>
          <a href="#">Rare Beanie Babies offered on eBay for hundreds of thousands of dollars</a>
          <a href="#">Anne Frank likely died a month earlier than believed</a>
          <a href="#">ISIS militants smash artifacts at UNESCO World Heritage Site in Iraq</a>
          <a href="#">10 modern 'Full House' plots for Netflix to consider</a>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'ArticleDetail'
}
</script>

<style scoped lang="scss">
  article.double .post-meta {
    padding: 30px 60px;
    margin: -80px 60px 0px 60px;
    background-color: #f4f7f9;
    position: relative;
    border-bottom: 1px solid #e8ecf1;
    line-height: 60px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -moz-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    > div {
      display: inline-block;
      font-family: "Fontin", Arial, Helvetica, sans-serif;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      color: #a4b0b6;
    }
    i {
      width: 25px;
      height: 25px;
    }
  }

  .author-avatar {
    color: #7dc561;
    font-family: "Fontin-Bold", Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;

    img {
      width: 60px;
      height: 60px;
      -webkit-border-radius: 50%;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 50%;
      -moz-background-clip: padding;
      border-radius: 50%;
      background-clip: padding-box;
    }
  }

  article.double > div.content-wrapper {
    padding: 0 60px 30px 60px;
    margin: 0 60px;
  }

  article > div.content-wrapper {
    position: relative;
    background-color: #ffffff;
  }

  article.double h3 {
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
    line-height: 1;
    font-family: "Fontin-Bold", Arial, Helvetica, sans-serif;
    font-size: 40px;
    font-weight: bold;
    font-style: normal;
    color: #334b64;
  }

  .lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  article.double div.description {
    text-align: left;
    font-family: "Fontin", Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
  }

  article.double div.single-line {
    width: 50%;
    margin: 50px auto 30px auto;

    .border-wrapper {
      background-color: #fff;
    }
  }

  div.single-line {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    position: relative;

    &:before {
      content: ' ';
      height: 1px;
      width: 100%;
      display: block;
      background-color: #e0e8ee;
      position: absolute;
      top: 50%;
    }

    .border-wrapper {
      position: relative;
      display: inline-block;
      border-left: 20px solid #ffffff;
      border-right: 20px solid #ffffff;
    }
  }

  article.double .related-posts {
    h4 {
      color: #334b64;
      font-family: "Fontin-Bold", Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      margin-top: 50px;
    }

    a {
      color: #7dc561;
      display: block;
      font-family: "Fontin", Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      line-height: 32px;
      -webkit-transition: color 0.3s;
      -moz-transition: color 0.3s;
      -o-transition: color 0.3s;
      transition: color 0.3s;
    }
  }
</style>
