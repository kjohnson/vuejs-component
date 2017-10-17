import TestComponent from './components/TestComponent.vue';

export default {

    // When used as a plugin, automatically register each component.
    install(Vue) {
        Vue.component( 'test-component', TestComponent );
    },
};

// Export each component individually for manual registration.
export { TestComponent };
