import { observer } from "mobx-react-lite";
// import Count from "../count/count";
// import CounterStore from "../../stores/counter-store";
// import postsStore from "../../stores/posts-store";
import { useEffect } from "react";
import { useStores } from "../../root-store-context";


// const counter1 = new CounterStore();
// const counter2 = new CounterStore();
export const Wrapper = observer(() => {
    // const {getPostsAction, posts}= postsStore; вариант с отдельным стором.
    //Вариант через rootProvider
    const {post}=useStores();
    useEffect(()=> {
        post.getPostsAction()//добавили пост из хука
    },[])
    console.log(post.posts, "posts")//добавили пост их хука

    // if(posts?.state ==="pending") {
    //     return <div>loading</div>
    // }
    // if(posts?.state==="rejected") {
    //     return <div>error</div>
    // } вариация с условиями

    // Вариация с методом case

    if(!post.posts) {
        return null;
    }

//   return (
//     <>
//       <Count {...counter1} total={counter1.total}/>
//       <Count {...counter2} total={counter2.total}/>
//       {posts?.value[0].body}
//     </>
//   );} вариация с условиями

return post.posts.case({
    pending:()=><div>Loading...</div>,
    rejected:()=><div>error...</div>,
    fulfilled:(value) => (
        <div>{value[0].body}</div>
    )
})
});

export default Wrapper;
