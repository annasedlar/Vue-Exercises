<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'app-red'">Load Red Template</button>
                <hr>
                <app-blue>
                    This is the parent component injecting content via the child's slots
                    <h1>Parent H1</h1>
                </app-blue>
                <app-green>
                    Green Green Green! I am from the parent
                </app-green>
                <app-red> 
                    Red Red Red parent woo! But we're all styled from our respective child elements
                </app-red>
                <!-- component is a reserved Vue keyword - you can dynamically change 
                this specific component by changing it in the data -->
                <component :is="selectedComponent">Woo I'm dynamic!</component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return{
                selectedComponent: 'app-blue'
            }
        }
    }
</script>

<style>
</style>
