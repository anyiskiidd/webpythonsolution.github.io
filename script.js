const typewriterTexts = [
    `def ma_fonction(param1, param2):
    resultat = param1 * param2
    return resultat

print(ma_fonction(5, 6))`,
    `Pour toutes demandes de développement, veuillez détailler votre demande et envoyer un message à : webpythonsolutionservice@gmail.com`,
    `class Personne:
    def __init__(self, nom, prenom):
        self.nom = nom
        self.prenom = prenom

    def se_presenter(self):
        print(f"Bonjour, je m'appelle {self.prenom} {self.nom}.")`,
    `Pour toutes demandes de développement, veuillez détailler votre demande et envoyer un message à : webpythonsolutionservice@gmail.com`,
    `import requests

url = 'https://api.example.com/data'
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print(data)`,
    `Pour toutes demandes de développement, veuillez détailler votre demande et envoyer un message à : webpythonsolutionservice@gmail.com`,
    `def tri_bulle(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

arr = [64, 34, 25, 12, 22, 11, 90]
tri_bulle(arr)
print(arr)`,
    `Pour toutes demandes de développement, veuillez détailler votre demande et envoyer un message à : webpythonsolutionservice@gmail.com`,
    `def factorielle(n):
    if n == 0:
        return 1
    else:
        return n * factorielle(n-1)

print(factorielle(5))`
];
let currentIndex = 0;
let currentTextIndex = 0;

function typeWriter() {
    if (currentTextIndex < typewriterTexts.length) {
        if (currentIndex < typewriterTexts[currentTextIndex].length) {
            document.getElementById("typewriter").innerHTML += typewriterTexts[currentTextIndex].charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").innerHTML = "";
                currentIndex = 0;
                currentTextIndex++;
                typeWriter();
            }, 2000);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter, 500);
});
