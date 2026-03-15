export default function Post({post}) {
    const { body, title } = post;
    console.log(post)
    return (
        <div className="card">
            <p>title : {title}</p>
            <p>body : {body}</p>
        </div>
    )
}