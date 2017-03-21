<template>
    <div class="wrapper">
        <div class="page-title title">center-transform</div>
        <div class="content">
            <div class="summary">
                <b>说明:</b>
                <p>中</p>
            </div>
            <dl class="info-list">
                <dt>use-name:</dt>
                <dd><i>center-transform</i></dd>
                <dt>type:</dt>
                <dd>mixin, with extension placeholder(s)</dd>
                <dt>arguments:</dt>
                <dd></dd>
            </dl>

            <div class="example">
                <h2 class="pri-title title">example</h2>
                <h4 class="ex-title title">SCSS</h4>
                <div class="code">
                    <pre><div>
    .center-transform-1 {
     @include center-transform;
   }
    .center-transform-2 {
     @include center-transform(x);
   }
    .center-transform-3 {
     @include center-transform(y);
   }
                    </div></pre>
                </div>
                <h3 class="ex-title title">Compiled css</h3>
                    <div class="code">
                    <pre><div>
.center-transform-1 {
    position: absolute;
    top: 50%;
    margin-top: auto;
    margin-bottom: auto;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
.center-transform-2 {
    position: absolute;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}
.center-transform-3 {
    position: absolute;
    top: 50%;
    margin-top: auto;
    margin-bottom: auto;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

                    </div></pre>
                </div>
                <h3 class="demo-title title">示例结果</h3>
                <div class="demo">
                    <div class="center-transform-box demoItem">
                        <div class="center-transform-1">水平垂直</div>
                    </div>
                     <div class="center-transform-box demoItem">
                        <div class="center-transform-2">水平(X)</div>
                    </div>
                     <div class="center-transform-box demoItem">
                        <div class="center-transform-3">垂直（Y）</div>
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