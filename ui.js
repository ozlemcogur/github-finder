class UI {
    constructor() {
        this.profile = document.getElementById('profile')
    }

    //Profil arayüzünü ekrana basma

    showProfile(user) {
        const created_at = new Date(user.created_at).toLocaleDateString();

        this.profile.innerHTML = `  <div class="container border my-4 p-4">
    <div class="row">
        <div class="col-md-3">
        <img src="${user.avatar_url}" class="img-fluid" alt="">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100">Profili göster</a>
        </div>
        <div class="col-md-9">
            <span class="badge bg-primary fs-6 mt-1">Açık repolar:${user.public_repos}</span>
            <span class="badge bg-secondary fs-6 mt-1">Açık gistler:${user.public_gists}</span>
            <span class="badge bg-success fs-6 mt-1">Takipçiler:${user.followers}</span>  
            <span class="badge bg-info fs-6 mt-1">Takip edilenler:${user.following}</span>    
            <ul class="list-group my-5">
                <li class="list-group-item">Hakkında:${user.bio} </li>
                <li class="list-group-item">Şirket:${user.company} </li>
                <li class="list-group-item">Website:${user.blog} </li>
                <li class="list-group-item">Konum:${user.location} </li>
                <li class="list-group-item">Hesap oluşturulma tarihi:${created_at} </li>
            </ul>      
        </div>
    </div>

</div>

<div class="container p-3 " id="repos"></div>


    `
    }

    showRepos(repos) {
        let output = '<h3 class="fs-1 ">En son repolar</h3>';
        repos.forEach((repo) => {
            console.log(repo)
            output += `  <div class="border p-3 mb-4">
        <div class="row">
            <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge bg-primary">Yıldız:${repo.stargazers_count}</span>
                <span class="badge bg-secondary">İzleyenler:${repo.watchers_count}</span>
                <span class="badge bg-success">Forklar:${repo.forks_count}</span>   
        </div>
    </div>
   </div>`

        });
       //HTMLe gönderme
       document.getElementById('repos').innerHTML=output;

    }
    //Uyarı mesaji oluşturma

    showAlert(message, classname) {
        const div = document.createElement('div')
        div.className = classname
        div.innerText = message

        const outlet = document.getElementById('alert')

        outlet.appendChild(div);

        setTimeout(() => {
            //alerti 4 saniye sonra kaldır
            this.clearAlert();
        }, 4000)
    }


    //uyarıyı ekrandan silme
    clearAlert() {
        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    //arayüzü temizleme

    clearProfile() {
        this.profile.innerHTML = '';
    }


}

export default UI;