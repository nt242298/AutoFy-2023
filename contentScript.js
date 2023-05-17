console.log('Message received:');
(()=>{
    let myPromise = new Promise((myResolve, myReject)=> {
        chrome.runtime.onMessage.addListener((obj, sender) => {
            if(obj.type === "background"){
                myResolve(obj.url);
            }
        })
        myReject("Error");
    });

    myPromise.then()
    
})();



// const icon = document.createElement('div');
// icon.id = 'floating-icon';
// icon.style.position = 'fixed';
// icon.style.bottom = '20px';
// icon.style.right = '20px';
// icon.style.width = '50px';
// icon.style.height = '50px';
// icon.style.backgroundColor = 'red';
// document.body.appendChild(icon);