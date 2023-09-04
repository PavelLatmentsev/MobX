// import { makeAutoObservable, runInAction } from "mobx";
// import { IPosts, getPosts } from "../api/getPosts";
// class PostsStore {
//   posts: IPosts[] = [];
//   isLoading = false;
//   constructor() {
//     makeAutoObservable(this);
//   }
//   getPostsAction = async () => {
//     try {
//       this.isLoading = true;
//       const res = await getPosts();
//       runInAction(() => {
//         this.posts = res;
//         this.isLoading = false;
//       });
//     } catch (error) {
//       this.isLoading = false;
//       console.error("ERROR in getPostsAction ");
//     }
//   };
// }

// export default new PostsStore();
//Вариация без fromPromise



// Вариация с fromPromise
import { makeAutoObservable } from "mobx";
import { IPosts, getPosts } from "../api/getPosts";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";
class PostsStore {
  posts?: IPromiseBasedObservable<IPosts[]>
  constructor() {
    makeAutoObservable(this);
  }
  getPostsAction = async () => {
    this.posts=fromPromise(getPosts())
  };
}

export default new PostsStore();