const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário.">
                                         <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😭'}</p><br>
                                            <div class="info-followers">
                                                <h4 class="followers">Seguidores: ${user.followers}</h4>
                                                <h4>Seguindo: ${user.following}</h4>       
                                            </div>
                                         </div>
                                     </div>`
         let repositoriesItems = ''
         user.repositories.forEach(repo => repositoriesItems += `<li> 
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                     <div class= "items-repo">
                                                                        <p class="square">🍴${repo.forks}</p>
                                                                        <p class="square">⭐${repo.stargazers_count}</p>
                                                                        <p class="square">👀${repo.watchers}</p>
                                                                        <p class="square">👨‍💻${repo.language ?? 'Sem Linguagem'}</p>
                                                                     </div>
                                                                    </a>
                                                                </li>`)
         
         if(user.repositories.length > 0 ){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItems}</ul>
                                          </div>`
        }

        let eventsItems = ''
        user.events.forEach(event => {
            if(event.type === "PushEvent"){
                eventsItems += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`
            } else if(event.type === "CreateEvent"){
                eventsItems += `<li>Sem mensagem de commit!</li>`
            }
            console.log(event)
            
        })
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                             <h2>Eventos</h2>
                                             <ul>${eventsItems}</ul>
                                          </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado</h3>"
    }
}

export { screen }