<template>
    <div class="wrapper">
        <div class="page-title title">center-block</div>
        <div class="content">
            <div class="summary">
                <b>说明:</b>
                <p>中</p>
            </div>
            <dl class="info-list">
                <dt>use-name:</dt>
                <dd><i>center-block</i></dd>
                <dt>type:</dt>
                <dd>mixin</dd>
                <dt>arguments:</dt>
                <dd></dd>
            </dl>

            <div class="example">
                <h2 class="pri-title title">example</h2>
                <h4 class="ex-title title">SCSS</h4>
                <div class="code">
                    <pre><div>
.center-block-1{
  width: 50px;
  @extend %center-block;
}
.center-block-2{
  margin-top: 10px;
  @include center-block(80%);
}
                    </div></pre>
                </div>
                <h3 class="ex-title title">Compiled css</h3>
                    <div class="code">
                    <pre><div>
.center-block-1 {
    margin-left: auto;
    margin-right: auto;
    width: 50px;
}
.center-block-2 {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
}
                    </div></pre>
                </div>
                <h3 class="demo-title title">示例结果</h3>
                <div class="demo">
                    <div class="center-block-1 demobox">左</div>
                    <div class="center-block-2 demobox">test</div>
                </div> 
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'centerBlock'
}
</script>

<style>

</style>