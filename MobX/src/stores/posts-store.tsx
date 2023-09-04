import {makeAutoObservable, runInAction} from "mobx";
import {IPosts, getPosts } from "../api/getPosts";
class PostsStore {

    posts: IPosts[]=[];
isLoading = false;
    constructor() {
    makeAutoObservable(this)
    }
    getPostsAction = async () => {
        try {
            this.isLoading=true;
            const res = await getPosts();
            runInAction(()=> {
                this.posts = res;
                this.isLoading=false;
            })

        } catch (error) {
            this.isLoading=false;
            console.error("ERROR in getPostsAction ")
        }
    }
}

export default new PostsStore();