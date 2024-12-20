const users = [
    {
        name: "Sarah Johnson",
        image: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "2 minutes ago"
    },
    {
        name: "Mike Chen",
        image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "15 minutes ago"
    },
    {
        name: "Emma Wilson",
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "45 minutes ago"
    },
    {
        name: "James Rodriguez",
        image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "1 hour ago"
    },
    {
        name: "Lisa Kim",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "2 hours ago"
    },
    {
        name: "Alex Thompson",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "3 hours ago"
    },
    {
        name: "Maria Garcia",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "5 hours ago"
    },
    {
        name: "David Park",
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "7 hours ago"
    },
    {
        name: "Sophie Martin",
        image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "10 hours ago"
    },
    {
        name: "Tom Wilson",
        image: "https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "23 hours ago"
    }
];

 var sum = ""
 
 users.forEach(function(elem){
    sum += `<div class="line">
                <img src="${elem.image}" alt="">
                <div class="cont">
                <h1>${elem.name}</h1>
                <p>${elem.time}</p>
            </div>
            </div>
            <hr>`
    
 })

 console.log = sum
 var lower = document.querySelector(".lower")

 lower.innerHTML = sum

 var one = document.querySelector(".one")

 one.style.color = "green"