function market() {
    div.innerHTML = `<h1>community market</h1>
<p>
    The marketplace is a way to completely customize your game, Modifying behaviors and adding new games, Even changing the game theme and music! If you've found a repository, Why not <a href="#" onclick="add_repository();">add it to your collection</a>? or if you want to make your own, why not <a href="#" onclick="market_repository()">check out the repository format</a>?
</p>
<ul>`;
    let data = localStorage.getItem('market_repositories') || '[]';
    data = JSON.parse(data);
    if(data === []) localStorage.setItem('market_repositories', )
    data.forEach(item => {
        const name = item.name;
        const url = item.url;
        div.innerHTML += `<li><a href="#" onclick="load_repository('${url}', '${name}');">${name}</a></li>`;
    })
    div.innerHTML += `
</ul>`;
}

function market_repository() {
    div.innerHTML = `<h2>Marketplace repository format</h2>
<p>
    <textarea disabled style="font-size: 1.1rem; resize: none; width: 280px; height: 180px; background-color: #333; color: AliceBlue;">{
    "name": "Exmaple repository",
    "packages": [
        "https://example.org/repository/files/some-package.js",
        "https://example.org/another-package.js"
    ]
}</textarea>
</p>`
}

function add_repository() {
    const repo = prompt('To add a repository, Please enter the URL of it here:');
    if(!repo) return;
    fetch(repo).then(e => e.text().then((text) => {
        try {
            const data = JSON.parse(text);
            if(data.name && data.packages) {
                localStorage.setItem('market_repositories', JSON.stringify([...JSON.parse(localStorage.getItem('market_repositories')), {
                    'name': data.name,
                    'url': repo
                }]));
                alert('Your repository has been successfully added!');
                market();
            } else {
                prompt('The reposiotry does not contain the required fields, Verify it and click OK to retry, or Cancel.', repo);
            }
        } catch (e) {
            prompt('The reposiotry has an invalid format, Verify it and click OK to retry, or Cancel.', repo);
        }
    }).catch((e) => {
        console.warn(e);
        prompt('Failed to add your repository, Verify it and click OK to retry, or Cancel.', repo);
    })).catch((e) => {
        console.warn(e);
        prompt('Failed to add your repository, Verify it and click OK to retry, or Cancel.', repo);
    })
}

function load_repository(url, name) {
    div.innerHTML = "Loading ${name} packages...";
    fetch(url).then(e => e.text().then(text => {
        div.innerHTML = `<h1>${name}</h1>
<ul>
    ${JSON.parse(text).packages.map((pkg) => `<li><a href="#" onclick="check_pkg('${pkg}', true);">${check_pkg(url) ? 'Remove' : 'Install'}: "${pkg}"</a></li>`).join('\n')}
</ul>`;
    })).catch((e) => {
        div.innerHTML = `Seems like an error occured, Want to <a href="#" onclick="market();">return</a>?`;
    })
}

function check_pkg(url, modify = false) {
    if(JSON.parse(localStorage.getItem('packages'))[url]) {
        if(modify) {
            let data = JSON.parse(localStorage.getItem('packages'));
            delete data[url];
            localStorage.setItem('packages', data);
        }
        return true;
    } else {
        if(modify) {
            let data = JSON.parse(localStorage.getItem('packages'));
            data[url] = url;
            localStorage.setItem('packages', data);
        }
        return false;
    }
}