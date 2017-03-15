<template>
	<li class="nav-item">
		<router-link :to="{path:path}" replace router-link-active="active">
			<i v-bind:class="iconClass"></i>
			<span>{{navname}}</span>
		</router-link>
    </li>
  
</template>
<script>
	export default {
		props:{
			path:'',
			icon:'',
			navname:''
		},
		computed: {
			iconClass () {
				return "icon-"+this.icon
			}
		}
	}
</script>
<style>
	
</style>