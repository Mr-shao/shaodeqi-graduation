<template>
	<div class="mt50">
		<s-calculator></s-calculator>
		<s-clock></s-clock>
		<s-notes></s-notes>
	</div>
</template>
<script>
import sCalculator from './components/calculator.vue';
import sClock from './components/clock.vue';
import sNotes from './components/notes.vue';
export default{
	data () {
		return {
		};
	},
	components: {
		'sCalculator': sCalculator,
		'sClock': sClock,
		'sNotes': sNotes
	}
};
</script>
<style>
</style>