import { ref } from "vue";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function llegirPost(){
    // array reactiu para guardar mis posts
    const posts  = ref([]);    

    const llegirTots = async() => {
        const response = await fetch(URL);
        posts.value = await response.json();
    }

    return {
        posts,
        llegirTots
    }
}





