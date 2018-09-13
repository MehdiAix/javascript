// je crée ma fonction grace a const
const getUsers = async function () { 
    //je met un try catch pour capturer l'erreur si il y'en a une 
    try{
        //je veut que tu attendent les données et que tu fini de les parser 
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        //je fait une condition pour etre sur que sa marche car ma methode fetch ne me dit pas si il y'a une erreur 
        if(response.ok) {
            //une fois qu'on a la reponse on fait un 
            let data = await response.json()
            // et on attend la conversion en object 
            // et lorsque j'ai les données je peut faire un console log de data 
            console.log(data)
        } else {
            console.error('retour de l\'erreur serveur n°:',response.status)
            }
        }catch (e) {
            console.log(e)
            }
        }
//ici je lance un apel a getUsers pour m'envoyer les utilisateur
getUsers()

const insertPost = async function (data) {//parametre data
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',//en second paramétre je vais lui passer notre object
    // et notre méthode
    {
        method:'POST',//la méthode
        headers: {//comment je vais lui divulger les données et saura comment les données sont envoyer 
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)//pour les envoyer sous forme de caractére
    })
    //ici j'ai récuperer ce que j'ai envoyer 
    let responseData = await response.json()
    //je peu aussi bien faire responseData.id ...
    console.log(responseData)

}
insertPost({
    name: 'Mehdi',
    age: 26
})