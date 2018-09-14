//promesse est un objet particulier qui vont avoir des méthode qui vont
// nous permettre de résoudre les chose asynchrone
// polyfil est un objet js qui va nous permettre de simuler le support de nos promesse

//je lui passe seulement l'url
let get = function (url) {
    // je dit a la fonction de me retournée une nouvelle promesse du
    // coup je lui retourne un truc qui va se resoudre plus tard
    // cet objet prend en parametre une fonction qui aura en parametre deux callback success et error
    // qu'on appelera en general resolve et reject
    return new Promise(function (resolve, reject) {
        let xhr = new window.XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText)
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}
console.log(get('https://jsonplaceholder.typicode.com/users'))
// let xhr = new window.XMLHttpRequest()
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             success(xhr.responseText)
//         } else {
//             error(xhr)
//         }
//     }
// }
// xhr.open('GET', url, true)
// xhr.send()
// }
// let getPosts = function (success, error) {
//     get('https://jsonplaceholder.typicode.com/users', function (response) {
//         let users = JSON.parse(response)
//         get('https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id, function (response) {
//             let posts = JSON.parse(response)
//             success(posts)
//         }, function (e) {
//             error('erreur ajax ligne 46', e)
//         })
//     }, function (e) {
//         error('erreur ajax ligne 50', e)
//     })
// }
// getPosts(function (posts) {
//     console.log('le premier article', posts[0])
// }, function (error) {
//     console.error(error)
// })

