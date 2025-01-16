import { ref } from "vue";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function llegirPost() {
    
    const posts = ref([]);
    const post = ref(null);
    const user = ref(null);

    const llegirTots = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts`);
            posts.value = await response.json();
        } catch (error) {
            console.error("Error al cargar los posts:", error);
        }
    };

    const llegirPostID = async (id) => {
        try {
            const response = await fetch(`${BASE_URL}/posts/${id}`);
            post.value = await response.json();

            if (post.value && post.value.userId) {
                const userResponse = await fetch(
                    `${BASE_URL}/users/${post.value.userId}`
                );
                user.value = await userResponse.json();
            } else {
                console.error("No hay usuario en el post!");
            }
        } catch (error) {
            console.error("Error al cargar el post", error);
        }
    };

    return {
        posts,
        post,
        user,
        llegirTots,
        llegirPostID,
    };
}
