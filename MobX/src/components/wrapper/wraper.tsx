import { observer } from "mobx-react-lite";
// import Count from "../count/count";
// import CounterStore from "../../stores/counter-store";
import postsStore from "../../stores/posts-store";
import { useEffect } from "react";


// const counter1 = new CounterStore();
// const counter2 = new CounterStore();
export const Wrapper = observer(() => {
    const {getPostsAction, posts}= postsStore;
    useEffect(()=> {
getPostsAction()
    },[])
    console.log(posts, "posts")

    // if(posts?.state ==="pending") {
    //     return <div>loading</div>
    // }
    // if(posts?.state==="rejected") {
    //     return <div>error</div>
    // } вариация с условиями

    // Вариация с методом case

    if(!posts) {
        return null;
    }

//   return (
//     <>
//       <Count {...counter1} total={counter1.total}/>
//       <Count {...counter2} total={counter2.total}/>
//       {posts?.value[0].body}
//     </>
//   );} вариация с условиями

return posts.case({
    pending:()=><div>Loading...</div>,
    rejected:()=><div>error...</div>,
    fulfilled:(value) => (
        <div>{value[0].body}</div>
    )
})
});

export default Wrapper;
