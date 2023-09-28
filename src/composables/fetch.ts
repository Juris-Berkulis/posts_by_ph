import { ref, type Ref } from 'vue';

export const useFetch = async (url: string) => {
    const fetchData: Ref<any> = ref(null);

    try {
        const response: Response = await fetch(url);

        if (response.ok) {
            fetchData.value = await response.json();
        } else {
            throw 'Ошибка при запросе'
        }
    } catch (error: unknown) {
        console.warn(error);
    }

    return {
        fetchData,
    }
};
