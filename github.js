
class Github {
    constructor() {
        this.client_id= "45d5240db55bc3495b8b"
        this.client_secret= " 44b4d3899c07e09e07a359b81a16f76b28a368af"
        this.repos_count=10
        this.repos_sort='asc'

    }

 async getUser(user){
    //gelen userla birlikte istek atma
    const profileResponse =  await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    //kullanıcının repolarını çekme

    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
    client_id=${this.client_id}&client_secret=${this.client_secret}`)

    //cevabı jsona çevirme
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    console.log(repos)
    
    // işlenmiş veriyi çağrıldığı yere gönderme
    return {
        profile,
        repos,
    };
    

   

    }

}

export default Github

// try {const profileResponse =  await fetch (`https://api.github.com/users/${user}`)

// const profile = await profileResponse.json();
// return profil;

// }
// catch (err){
//     console.log(err)

// }

