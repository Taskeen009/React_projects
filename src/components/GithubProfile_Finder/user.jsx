const User=({user})=>{
    const {avatar_url,followers, public_repos,url,name,login,created_at}=user;
    const createdDate=new Date(created_at)
    return(
        <div className="user">
           <div>
            <img src={avatar_url} alt="image" />
           </div>
           <div>
            <a href={`https://github.com/${login}`}>{name||login}</a>
            <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us',{month:'short'})} ${createdDate.getFullYear()}`}</p>
           </div>
        </div>
    )
}

export default User;