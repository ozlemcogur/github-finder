
import Github from "./github.js"
import UI from "./ui.js"

//clasların örneğini oluşturma
const github = new Github()
const ui = new UI()



const searchUser = document.getElementById('searchUser')
const searchButton = document.getElementById('searchButton')

//eğer butona tıklanırsa
searchButton.addEventListener('click', getInput)
//eğer ente tuşuna basılırsa
searchUser.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        getInput()


    }
})

function getInput() {
    //input doluysa api isteği at
    if (searchUser.value !== '') {
        github.getUser(searchUser.value).then((data) => {

            if (data.profile.message === 'Not Found') {
                ui.showAlert('Aradığınız kullanıcı bulunamadı', 'alert alert-danger')

            } else {
                //kullanıcılrı göster
                ui.showProfile(data.profile)
                //repoları göster
                ui.showRepos(data.repos)
            }
        })

    } else {
        ui.showAlert('Form alanı boş olamaz', 'alert alert-info')
        ui.clearProfile();
    }
    searchUser.value="";
}




