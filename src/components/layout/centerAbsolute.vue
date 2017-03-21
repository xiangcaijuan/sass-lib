<template>
    <div class="wrapper">
        <div class="page-title title">center-absolute</div>
        <div class="content">
            <div class="summary">
                <b>说明:</b>
                <p>绝对定位水平与垂直居中</p>
            </div>
            <dl class="info-list">
                <dt>use-name:</dt>
                <dd><i>center-absolutely</i></dd>
                <dt>type:</dt>
                <dd>mixin</dd>
                <dt>arguments:</dt>
                <dd>大幅度</dd>
            </dl>

            <div class="example">
                <h2 class="pri-title title">example</h2>
                <h4 class="ex-title title">SCSS</h4>
                <div class="code">
                    <pre><div>
        .enter-absolutely-box {
            position: relative;
        }
        .center-absolute-1 {
           @include center-absolutely(70px, n);
        }
        .center-absolute-2 {
           @include center-absolutely(n, 20px);
        }
        .center-absolute-3 {
            @include center-absolutely(70px,20px);
        }
                        </div></pre>
                </div>
                <h3 class="ex-title title">Compiled css</h3>
                    <div class="code">
                    <pre><div>
.center-absolute-1 {
    position: absolute;
    width: 70px;
    left: 50%;
    margin-left: -35px;
}
.center-absolute-2 {
    position: absolute;
    height: 20px;
    top: 50%;
    margin-top: -10px;
}
.center-absolute-3 {
    position: absolute;
    width: 70px;
    left: 50%;
    margin-left: -35px;
    height: 20px;
    top: 50%;
    margin-top: -10px;
}
                    </div></pre>
                </div>
                <h3 class="demo-title title">示例结果</h3>
                <div class="demo">
                    <div class="center-absolutely-box demoItem">
                        <div class="center-absolute-1">左</div>
                    </div>
                    <div class="center-absolutely-box demoItem">
                        <div class="center-absolute-2">test</div>
                    </div>
                    <div class="center-absolutely-box demoItem">
                        <div class="center-absolute-3">中</div>
                    </div>
                </div> 
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'centerAbsolute'
}
</script>

<style>

</style>