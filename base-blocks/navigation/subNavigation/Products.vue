<template>
    <div v-on-clickaway="clickedOutside">
        <NavigationCell  text="Produkter" :on-click="buttonClicked">
            <font-awesome-icon slot="icon" :icon="['fas', 'chevron-down']"/>
        </NavigationCell>
        <NavigationDropdown v-bind:state="stateChanged"></NavigationDropdown>
    </div>
</template>

<script>
    import { mixin as clickaway } from 'vue-clickaway';
    import NavigationCell from '../../../components/buttons/NavigationCell';
    import NavigationDropdown from '../../../components/dropdownMenus/NavigationDropdown';
    export default {
        mixins: [clickaway],
        components: {
            NavigationCell,
            NavigationDropdown
        },
        data() {
            return {
                state: false
            }
        },
        computed: {
           stateChanged() {
               return this.state;
           }
        },
        methods: {
            buttonClicked() {
              this.state = !this.state;
            },
            clickedOutside() {
                this.state = false;
            }
        }
    }
</script>
