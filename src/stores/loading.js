import {defineStore} from "pinia";
import {ref} from "vue";

export const useLoadingStore = defineStore('loading', () => {
    const isLoading = ref(false);
    function setLoading(state) {
        isLoading.value = state;
    }

    function resetState() {
        isLoading.value = false;
    }

    return {isLoading, setLoading, resetState}

})