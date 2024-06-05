import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom"
import App from "../App"
import Login from "../pages/login/login"
import Users from "../pages/users/users"
import Main from "../pages/main/main"
import Todos from "../pages/todos/todos"
import Albums from "../pages/albums/albums"
import Posts from "../pages/posts/posts"
import Comments from "../pages/comments/comments"
import Photos from "../pages/photos/photos"
import Cars from "../pages/cars/cars"
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />}/>
                <Route path="main/*" element={<Main/>}>
                    <Route index element={<Users />}/>
                    <Route path="cars" element={<Cars />}/>
                    <Route path="todos" element={<Todos />}/>
                    <Route path="albums" element={<Albums />}/>
                    <Route path="posts" element={<Posts />}/>
                    <Route path="comments" element={<Comments />}/>
                    <Route path="photos" element={<Photos />}/>
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router}/>
 }
 export default Index