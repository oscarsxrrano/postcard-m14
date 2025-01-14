import { ref } from "vue";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function llegirPost() {
    // array reactiu para guardar mis posts
    const posts = ref([]);
    const post = ref(null);
    const user = ref(null);

    // funció per llegir els posts
    const llegirTots = async () => {
        const response = await fetch(URL);
        posts.value = await response.json();
    };

    // funció per llegir els posts per ID
    const llegirPostID = async (id) => {
        const response = await fetch(`${URL}/${id}`);
        post.value = await response.json();
        
        // obtenció de l'usuari relacionat amb el post
        const userResponse = await fetch(`${URL}/users/${post.value.userId}`);
        user.value = await userResponse.json();
    };

    return {
        posts,
        post,
        user,
        llegirTots,
        llegirPostID,
    };
}




