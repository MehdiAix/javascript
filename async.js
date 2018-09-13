// on va voir par étapes pour crée des script coté navigateur :
// 1 le callback()
// 2 les promesse
// 3 async
// 4 await

// en 1 je crée une fonction a laquelle on passe une url en parametre pour faire une requête ajax
// en 2 paramètre je lui met la function success
// en 3 paramétré je lui met ma function error
// les paramètre 1 et 2 sont des callback je leur delegue le traitement a effectuer en cas de succes ou d'erreur '
// et c'est definit dans l'element qui appel cet methode la
var get = function (url, success, error) {
    var xhr = new window.XMLHttpRequest()

    //j'ecoute la sortie de cet objet la pour savoir lors de la sortie de celui la si j'ai un retour du statuts niveau 4 alors la requête a bien aboutie
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            //si sa marche bien sa me retourne succes ou sinon sa me mettra une erreur et ma function callback interviendra
            if (xhr.status === 200){
            success(xhr.responseText)
            } else {
                error(xhr)
            }
            //si sa marche je met que c'est terminé et je debug xhr (console.log('terminé',xhr))
        }
    }
        // ensuite je peut faire ma requête
    // la méthode,l'url en paramètre,et asynchrone
    xhr.open('GET',url,true)
    //ensuite j'envoie ma requête
    xhr.send()
}
let getPosts = function () {
    // en second parametre je vait lui mettre une fonction qui prendra en paramètre la response 
    get('https://jsonplaceholder.typicode.com/users', function (response) {
        //ensuite qui pourra faire un console log pour afficher la reponse (console.log(response))
        // j'enrengistre dans ma variable users un objet que j'ai parser('extrait de mon tableau au format son')
        let users = JSON.parse(response);
        // console.log(users[2]) en 1 ere paraametre je fait ma function de callback de reussite
        get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
            let posts = JSON.parse(response)
            console.log(posts)
            
        },function (error) {
            //si on a un probleme je te place le callback error
            console.log('erreur ajax',error)
            
        }  )
    },function (error) {
        //je lui crée un parametre pour me crée les erreur
        console.log('erreur ajax',error)
    })
};
console.log(getPosts())

