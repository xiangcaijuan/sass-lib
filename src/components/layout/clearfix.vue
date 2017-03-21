<template>
    <div class="wrapper">
        <div class="page-title title">clearfix</div>
        <div class="content">
            <div class="summary">
                <b>说明:</b>
                <p>中</p>
            </div>
            <dl class="info-list">
                <dt>use-name:</dt>
                <dd><i>clearfix</i></dd>
                <dt>type:</dt>
                <dd>mixin and placeholder (same)</dd>
                <dt>arguments:</dt>
                <dd></dd>
            </dl>

            <div class="example">
                <h2 class="pri-title title">example</h2>
                <h4 class="ex-title title">SCSS</h4>
                <div class="code">
                    <pre><div>
.clearfix-box{
  @include clearfix;
  // or @extend %clearfix;
}
                    </div></pre>
                </div>
                <h3 class="ex-title title">Compiled css</h3>
                    <div class="code">
                    <pre><div>
.clearfix-box:after {
    content: "";
    display: table;
    clear: both;
}
                    </div></pre>
                </div>
                <h3 class="demo-title title">示例结果</h3>
                <div class="demo">
                    <div class="clearfix-box demoItem">
                        <div class="clearfix">clearfloat</div>
                        <div class="clearfix">clearfloat</div>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'centerTransform'
}
</script>

<style>

</style>